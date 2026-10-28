import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const origin = "http://127.0.0.1:4173";
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], { stdio: "pipe", windowsHide: true });
let serverOutput = "";
server.stdout.on("data", (chunk) => { serverOutput += chunk; });
server.stderr.on("data", (chunk) => { serverOutput += chunk; });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let browser;

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error(`Preview server exited: ${serverOutput}`);
    try { ready = (await fetch(origin)).ok; } catch { /* Wait for preview startup. */ }
    if (ready) break;
    await sleep(250);
  }
  assert(ready, "Preview server did not start");
  try {
    browser = await chromium.launch(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {});
  } catch (error) {
    if (process.env.PLAYWRIGHT_CHANNEL) throw error;
    browser = await chromium.launch({ channel: "msedge" });
  }
  await mkdir(".impeccable", { recursive: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(origin);
  await page.locator("h1").waitFor();
  await page.getByRole("link", { name: "Conhecer projetos", exact: true }).click();
  await page.waitForFunction(() => location.hash === "#projetos" && document.activeElement?.id === "projetos");
  assert((await page.locator("#projetos").boundingBox()).y >= 70, "Fixed header obscures section");
  assert.equal(await page.locator("iframe").count(), 0, "Project previews should be local assets");
  assert.equal(await page.locator("#projetos article").count(), 4);
  assert.equal(await page.locator("#projetos a").filter({ hasText: "Visitar site" }).count(), 3);
  assert.equal(await page.locator('a[href*="ai-cut-assistant-pro"]').count(), 0, "Private repository must not appear in the public showcase");
  assert.deepEqual(await page.locator("main > section").evaluateAll((sections) => sections.map((section) => section.id)), ["top", "projetos", "servicos", "sobre", "habilidades", "contato-contact"]);
  const missingTargets = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute("href")).filter((href) => !document.getElementById(decodeURIComponent(href.slice(1)))));
  assert.deepEqual(missingTargets, [], "All internal project and service links must resolve");
  const caseStudy = page.locator("#projeto-nexora details");
  await caseStudy.locator("summary").focus();
  await page.keyboard.press("Enter");
  assert(await caseStudy.locator("dd").first().isVisible(), "Project details must open with the keyboard");
  await page.keyboard.press("Space");
  assert.equal(await caseStudy.getAttribute("open"), null);

  await page.getByRole("button", { name: "Mudar visualização para inglês" }).click();
  await page.waitForFunction(() => document.documentElement.lang === "en");
  await page.reload();
  await page.getByRole("button", { name: "Switch portfolio to Portuguese" }).waitFor();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert((await page.title()).includes("Desktop Developer"));
  assert.equal(await page.locator('meta[property="og:locale"]').getAttribute("content"), "en_US");
  assert(await page.getByText("An independent concept study: the company, case studies, and metrics shown are fictional.", { exact: true }).isVisible());
  await page.getByRole("button", { name: "Enable light mode" }).click();
  assert(!(await page.locator("html").getAttribute("class")).includes("dark"));

  // Check real content at narrow, mobile, tablet and desktop widths in both languages.
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(() => !document.documentElement.classList.contains("lenis"));
  assert(!(await page.locator("html").getAttribute("class")).includes("lenis"), "Reduced motion must disable Lenis");
  for (const locale of ["en", "pt"]) {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      const overflowing = overflow ? await page.locator("body *").evaluateAll((elements) => elements.filter((element) => element.getBoundingClientRect().right > innerWidth + 1).map((element) => ({ tag: element.tagName, class: element.className, text: element.textContent?.slice(0, 80) })).slice(0, 12)) : [];
      assert(!overflow, `Horizontal overflow: ${width}px / ${locale}: ${JSON.stringify(overflowing)}`);
    }
    if (locale === "en") await page.getByRole("button", { name: "Switch portfolio to Portuguese" }).click();
  }

  await page.setViewportSize({ width: 390, height: 844 });
  const openMenu = page.getByRole("button", { name: "Abrir menu", exact: true });
  await openMenu.click();
  assert.equal(await page.getByRole("button", { name: "Fechar menu" }).getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Escape");
  assert(await openMenu.evaluate((element) => element === document.activeElement));
  await openMenu.click();
  await page.getByRole("navigation", { name: "Navegação móvel" }).getByRole("link", { name: "Tecnologias" }).click();
  assert.equal(await openMenu.getAttribute("aria-expanded"), "false");
  await page.waitForFunction(() => location.hash === "#habilidades");
  assert(await page.getByText("API REST, armazenamento local e sincronização com controle de reenvios.", { exact: true }).isVisible());

  for (const [name, width, theme] of [["mobile-dark", 390, "dark"], ["mobile-light", 390, "light"], ["desktop-dark", 1440, "dark"], ["desktop-light", 1440, "light"]]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    await page.evaluate((theme) => { localStorage.setItem("theme", theme); }, theme);
    await page.goto(origin);
    await page.waitForFunction((theme) => document.documentElement.classList.contains(theme), theme);
    await page.waitForTimeout(400);
    // Scroll the full document to load lazy images and exercise real reveal observers.
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += 700) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(70);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0));
    await page.screenshot({ path: `.impeccable/${name}.png`, fullPage: true });
    if (theme === "dark") {
      for (const section of ["top", "projetos", "servicos"]) {
        await page.locator(`#${section}`).screenshot({ path: `.impeccable/${name}-${section}.png` });
      }
    }
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    assert.deepEqual(accessibility.violations.map((issue) => ({ id: issue.id, impact: issue.impact, nodes: issue.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })) })), [], `${name}: accessibility violations`);
  }

  await page.goto(`${origin}/pagina-inexistente`);
  assert(await page.getByRole("heading", { name: "Página não encontrada" }).isVisible());
  await page.getByRole("link", { name: "Voltar ao início" }).click();
  await page.locator("h1").waitFor();
  await page.keyboard.press("Tab");

  const touchContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
  const touchPage = await touchContext.newPage();
  touchPage.on("pageerror", (error) => errors.push(error.message));
  await touchPage.goto(origin);
  await touchPage.getByRole("button", { name: "Abrir menu" }).tap();
  await touchPage.getByRole("navigation", { name: "Navegação móvel" }).getByRole("link", { name: "Tecnologias" }).tap();
  assert(await touchPage.getByText("API REST, armazenamento local e sincronização com controle de reenvios.", { exact: true }).isVisible());

  // All reveal content remains available when IntersectionObserver is unavailable.
  const fallback = await browser.newContext({ reducedMotion: "reduce" });
  await fallback.addInitScript(() => { delete window.IntersectionObserver; });
  const fallbackPage = await fallback.newPage();
  fallbackPage.on("pageerror", (error) => errors.push(error.message));
  await fallbackPage.goto(origin);
  assert(await fallbackPage.locator("#sobre h2").isVisible());
  assert.equal(await fallbackPage.locator(".reveal-pending").count(), 0);
  assert.deepEqual(errors, [], "Browser runtime errors");
  console.log("Browser checks passed: anchors, keyboard, mobile menu, touch, PT/EN persistence, themes, 320–1440px, project media, 404, reduced-motion fallback and axe accessibility scans (mobile/desktop, light/dark).");
} finally {
  await browser?.close();
  server.kill();
}
