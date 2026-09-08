# Priscila Takahashi Imóveis

Site de catálogo de imóveis da corretora Priscila Takahashi (São José dos Campos / Vale do Paraíba).
A corretora publica os imóveis pelo painel administrativo e os clientes navegam pelo catálogo público.

## Como funciona

Site estático (HTML, CSS e JavaScript sem framework) com backend no Supabase.

- `index.html` — página única; a navegação acontece pelo endereço (`#catalogo`, `#sobre`, `#<id-do-imóvel>`)
- `css/style.css` — estilos e tokens visuais da marca
- `js/app.js` — toda a aplicação: estado, telas, painel administrativo e acesso ao banco
- `images/` — logotipos e imagens fixas do site

### Backend (Supabase)

- **`properties`** — os imóveis. Visitantes leem apenas os publicados; cadastrar, editar e excluir exige a conta da corretora.
- **`site_settings`** — configuração da marca-d'água aplicada nas fotos.
- **`admins`** — quais contas podem administrar o site.
- **Storage:** `property-photos` (fotos dos imóveis) e `site-assets` (marca-d'água).

As regras de acesso ficam no próprio banco (Row Level Security), então nem o site nem a chave pública
conseguem burlá-las. A chave usada no `js/app.js` é a chave pública (anon) — pode ficar no repositório.

### O que fica no navegador do visitante

Apenas favoritos, imóveis já visitados e o aceite do aviso de cookies. Nada disso vai para o servidor.

## Rodando localmente

```bash
python3 -m http.server 8000
```

Acesse http://localhost:8000 — o painel fica em http://localhost:8000/#admin.

## Deploy (Vercel)

O site não tem etapa de build: é só publicar os arquivos como estão.

1. Em vercel.com, **Add New → Project** e importe este repositório do GitHub
2. Framework Preset: **Other**; deixe os campos de build e output **vazios**
3. **Deploy**

Cada push na branch `main` publica automaticamente. O `vercel.json` já cuida de URLs limpas e cache.

Depois de publicar, vale adicionar o domínio do site em **Supabase → Authentication → URL Configuration**.
