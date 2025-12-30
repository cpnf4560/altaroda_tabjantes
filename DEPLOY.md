# 🚀 Guia de Deploy - GitHub + Render

## Passo 1: Preparar Repositório GitHub

### 1.1 Criar Repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. **Nome**: `altaroda-jantes` (ou seu nome preferido)
4. **Descrição**: `Tabela de Compatibilidade de Jantes - Altaroda`
5. **Visibilidade**: Private ou Public (sua escolha)
6. ❌ **NÃO** marque "Add README" (já temos um)
7. Clique em **"Create repository"**

### 1.2 Inicializar Git Local

Abra PowerShell e execute:

```powershell
cd "g:\O meu disco\Altaroda\Compatibilidade Jantes"

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Tabela de Compatibilidade de Jantes"

# Conectar ao repositório GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/altaroda-jantes.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### 1.3 Verificar no GitHub
- Acesse: `https://github.com/SEU_USUARIO/altaroda-jantes`
- Verifique se todos os arquivos foram enviados

---

## Passo 2: Deploy no Render

### 2.1 Criar Conta no Render
1. Acesse [render.com](https://render.com)
2. Clique em **"Get Started"**
3. **Login com GitHub** (recomendado)
4. Autorize o Render a acessar seus repositórios

### 2.2 Criar Web Service
1. No dashboard do Render, clique em **"New +"**
2. Selecione **"Web Service"**
3. Conecte seu repositório:
   - **GitHub**: Procure por `altaroda-jantes`
   - Clique em **"Connect"**

### 2.3 Configurar Web Service

Preencha os campos:

| Campo | Valor |
|-------|-------|
| **Name** | `altaroda-jantes` |
| **Region** | `Frankfurt (EU Central)` (mais próximo de Portugal) |
| **Branch** | `main` |
| **Root Directory** | *(deixe em branco)* |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` ⭐ |

### 2.4 Variáveis de Ambiente (Opcional)
Se precisar adicionar variáveis:
- Clique em **"Advanced"**
- **Add Environment Variable**
- Exemplo: `NODE_ENV=production`

### 2.5 Iniciar Deploy
1. Clique em **"Create Web Service"**
2. Aguarde o deploy (3-5 minutos)
3. Acompanhe os logs em tempo real

### 2.6 Acessar Aplicação
Após o deploy:
- URL será algo como: `https://altaroda-jantes.onrender.com`
- Clique no link para abrir

---

## Passo 3: Configurar Domínio Personalizado (Opcional)

### 3.1 No Render
1. No seu Web Service, vá em **"Settings"**
2. Role até **"Custom Domain"**
3. Clique em **"Add Custom Domain"**
4. Digite: `jantes.altaroda.com` (exemplo)
5. Copie os registros DNS fornecidos

### 3.2 No seu Provedor de Domínio
1. Acesse o painel DNS do seu domínio
2. Adicione um registro **CNAME**:
   - **Host**: `jantes`
   - **Value**: `altaroda-jantes.onrender.com`
   - **TTL**: `3600`
3. Aguarde propagação (até 24h, geralmente < 1h)

---

## Passo 4: Atualizar a Aplicação

### 4.1 Fazer Alterações Localmente
```powershell
# Edite os arquivos necessários

# Adicionar mudanças
git add .

# Commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

### 4.2 Deploy Automático
- O Render detecta automaticamente o push
- Inicia novo deploy automaticamente
- Aguarde 2-3 minutos

---

## Passo 5: Atualizar Base de Dados

### 5.1 Editar Dados
1. Abra `base de dados.txt`
2. Edite os dados (formato tab-separated)
3. Salve o arquivo

### 5.2 Converter para JSON
```powershell
npm run convert
```

### 5.3 Commit e Push
```powershell
git add dados.json "base de dados.txt"
git commit -m "Atualizar base de dados"
git push
```

### 5.4 Deploy Automático
- Render faz redeploy automaticamente
- Dados atualizados em 2-3 minutos

---

## 📊 Comandos Git Úteis

```powershell
# Ver status
git status

# Ver histórico
git log --oneline

# Desfazer mudanças não commitadas
git checkout .

# Ver diferenças
git diff

# Criar branch
git checkout -b nova-feature

# Voltar para main
git checkout main

# Mesclar branch
git merge nova-feature

# Deletar branch
git branch -d nova-feature
```

---

## 🔧 Troubleshooting

### Problema: Push é rejeitado
```powershell
# Pull primeiro
git pull origin main --rebase
git push
```

### Problema: Deploy falha no Render
- Verifique os logs no dashboard
- Confirme que `package.json` está correto
- Verifique `npm install` localmente

### Problema: Aplicação não carrega
- Verifique se `dados.json` foi enviado
- Confirme que `server.js` está correto
- Revise logs do Render

### Problema: "Bad file descriptor" no npm install
- Normal em Windows com caminhos longos
- Se `node_modules` existe, está OK
- Pode ignorar os warnings

---

## ✅ Checklist Final

- [ ] Repositório GitHub criado
- [ ] Código enviado para GitHub
- [ ] Web Service criado no Render
- [ ] Deploy concluído com sucesso
- [ ] Aplicação acessível via URL
- [ ] Todos os dados carregam corretamente
- [ ] Filtros e pesquisa funcionam
- [ ] Paginação funciona
- [ ] (Opcional) Domínio personalizado configurado

---

## 🎉 URLs Importantes

### Desenvolvimento
- Local: `http://localhost:3000`

### Produção
- Render: `https://altaroda-jantes.onrender.com`
- (Opcional) Domínio: `https://jantes.altaroda.com`

### Repositórios
- GitHub: `https://github.com/SEU_USUARIO/altaroda-jantes`
- Render Dashboard: `https://dashboard.render.com`

---

## 📞 Próximos Passos

1. ✅ Testar aplicação em produção
2. ✅ Verificar em diferentes dispositivos
3. ✅ Compartilhar URL com equipe
4. ✅ Configurar Google Analytics (opcional)
5. ✅ Adicionar SSL (automático no Render)
6. ✅ Configurar backup automático

---

**Deploy realizado com sucesso! 🚀**

Qualquer problema, consulte a documentação:
- [Render Docs](https://render.com/docs)
- [GitHub Docs](https://docs.github.com)
