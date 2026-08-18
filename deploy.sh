#!/bin/bash

# Parar o script se algum comando falhar
set -e

echo "🔄 1/3 - Baixando atualizações do GitHub..."
git pull origin main

echo "🏗️ 2/3 - Reconstruindo a imagem Docker..."
docker build -t victor-portfolio .

echo "🚀 3/3 - Atualizando o contêiner no CasaOS..."
# Para e remove o contêiner antigo se ele existir
docker stop victor-portfolio 2>/dev/null || true
docker rm victor-portfolio 2>/dev/null || true

# Inicia o novo contêiner com a imagem recém-gerada
docker run -d \
  --name victor-portfolio \
  --restart unless-stopped \
  -p 8234:80 \
  victor-portfolio

echo "✅ Concluído! O site foi atualizado com sucesso."