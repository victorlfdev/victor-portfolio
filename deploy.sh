#!/bin/bash

echo "🔄 1/3 - Baixando atualizações do GitHub..."
git pull origin main

echo "🏗️ 2/3 - Reconstruindo a imagem Docker..."
docker build -t victor-portfolio .

echo "🚀 3/3 - Reiniciando o contêiner no CasaOS..."
docker restart VictorPortfolio

echo "✅ Concluído! O site foi atualizado com sucesso."