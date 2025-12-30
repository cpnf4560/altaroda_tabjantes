# 🚗 Tabela de Compatibilidade de Jantes - Altaroda

Sistema web interativo para consulta de compatibilidade de jantes para veículos. Desenvolvido para a **Altaroda** com design moderno e funcionalidades avançadas de filtros e pesquisa.

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

## 🎯 Funcionalidades

- ✅ **1732 veículos** catalogados de **66 marcas**
- ✅ **Paginação** com 50 resultados por página (customizável: 25/50/100/200)
- ✅ **Filtros Excel-style** em todas as 7 colunas
- ✅ **Pesquisa global** em tempo real
- ✅ **Estatísticas dinâmicas** (total de modelos, marcas, resultados visíveis)
- ✅ **Design responsivo** com cores da marca Altaroda
- ✅ **Carregamento via JSON** (performance otimizada)

## 📊 Estrutura de Dados

### Colunas da Tabela:
1. **Marca** - Fabricante do veículo
2. **Modelo** - Modelo do veículo
3. **Ano** - Período de fabricação
4. **Furação (PCD)** - Padrão de furos (ex: 4/98, 5/110)
5. **Offset** - Distância do plano de montagem
6. **Centro (mm)** - Diâmetro do centro da jante
7. **Tamanho Parafuso** - Especificação do parafuso (ex: B 12x1,25)

## 🚀 Deploy no Render

### Opção 1: Deploy Automático (Recomendado)

1. **Faça fork ou clone este repositório**
2. **Acesse [Render.com](https://render.com)** e faça login
3. **Clique em "New +" → "Web Service"**
4. **Conecte seu repositório GitHub**
5. **Configure:**
   - **Name**: `altaroda-jantes` (ou seu nome preferido)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
6. **Clique em "Create Web Service"**
7. **Aguarde o deploy** (3-5 minutos)
8. **Acesse sua URL**: `https://altaroda-jantes.onrender.com`

### Opção 2: Deploy via Render CLI

```bash
# Instalar Render CLI
npm install -g render-cli

# Login
render login

# Deploy
render deploy
```

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/altaroda-jantes.git
cd altaroda-jantes

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start
```

O servidor estará rodando em: `http://localhost:3000`

## 📝 Atualizar Dados

### 1. Editar arquivo fonte
Edite o arquivo `base de dados.txt` (formato tab-separated):

```
MARCA    MODELO    ANO    FURAÇÃO    OFFSET    CENTRO    PARAFUSO
```

### 2. Converter para JSON
```bash
npm run convert
```

Isso irá gerar/atualizar o arquivo `dados.json` com:
- ✅ Dados validados
- ✅ Ordenação alfabética por marca
- ✅ Formato otimizado para o frontend

### 3. Commit e push
```bash
git add dados.json
git commit -m "Atualizar base de dados"
git push
```

O Render fará o redeploy automaticamente! 🎉

## 🎨 Personalização

### Cores da Marca
As cores podem ser alteradas no arquivo `index.html` (seção `<style>`):

```css
--primary-red: #e31e24;    /* Vermelho Altaroda */
--bg-dark: #1a1a1a;        /* Preto */
--bg-medium: #2d2d2d;      /* Cinza escuro */
```

### Tamanho de Página Padrão
No arquivo `index.html`, linha ~580:

```javascript
let pageSize = 50; // Altere para 25, 50, 100 ou 200
```

## 📂 Estrutura do Projeto

```
altaroda-jantes/
├── index.html              # Frontend (HTML + CSS + JavaScript)
├── dados.json              # Base de dados (1732 veículos)
├── server.js               # Servidor Express.js
├── package.json            # Dependências Node.js
├── converter.js            # Script de conversão TXT → JSON
├── base de dados.txt       # Fonte de dados original
├── altaroda2025w.png       # Logo (branco)
├── altaroda2025.png        # Logo alternativo
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Este arquivo
```

## 🔧 Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js + Express.js
- **Deploy**: Render (PaaS)
- **Dados**: JSON (carregamento assíncrono)

## 📱 Responsividade

✅ Desktop (1400px+)  
✅ Tablet (768px - 1399px)  
✅ Mobile (< 768px)

## 🖨️ Impressão

Atalho: **Ctrl + P**

Layout de impressão otimizado:
- Remove pesquisa, filtros e paginação
- Mostra apenas a tabela
- Ajusta para papel A4

## 🌐 Navegadores Suportados

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)

## 📊 Performance

- **Tamanho HTML**: 29.92 KB
- **Tamanho JSON**: 300.77 KB
- **Total**: ~330 KB (compressão gzip: ~80 KB)
- **Tempo de carregamento**: < 1s (conexão 4G)
- **First Contentful Paint**: < 0.5s

## 🐛 Troubleshooting

### Problema: Dados não carregam
**Solução**: Verifique se `dados.json` existe no mesmo diretório de `index.html`

### Problema: Filtros não funcionam
**Solução**: Limpe o cache do navegador (Ctrl + Shift + Delete)

### Problema: Erro ao converter dados
**Solução**: Verifique o formato do `base de dados.txt` (deve ser tab-separated)

## 📄 Licença

© 2025 Altaroda - Todos os direitos reservados

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/seu-usuario/altaroda-jantes.git

# Instale
cd altaroda-jantes && npm install

# Execute
npm start

# Acesse
http://localhost:3000
```

**Desenvolvido com ❤️ para Altaroda**
