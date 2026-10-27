![Workshop Biometria - 04/11](./public/imgs/convite-workshop.png)
**Endereço de publicação:** https://gabrielpontess.github.io/workshop-biometria/

## Idiomas

A página é publicada em três versões estáticas:

- **Português do Brasil (padrão):** https://gabrielpontess.github.io/workshop-biometria/
- **English:** https://gabrielpontess.github.io/workshop-biometria/en/
- **Español:** https://gabrielpontess.github.io/workshop-biometria/es/

O seletor PT-BR / EN / ES fica no cabeçalho. O endereço principal abre sempre em português, sem redirecionar pelo idioma do navegador. O tema claro/escuro escolhido é preservado entre as versões.

Os textos estão em `app/i18n/pt-BR.ts`, `app/i18n/en.ts` e `app/i18n/es.ts`. Os dicionários compartilham a mesma tipagem, e a versão em português reutiliza os dados de `app/content.ts`. Links, fotos e logos permanecem centralizados nesse arquivo de conteúdo.

O workshop é apresentado em português do Brasil. As versões em inglês e espanhol informam isso, assim como o idioma do formulário externo e do convite original.

## Desenvolvimento e publicação

```bash
npm ci
npm run dev
```

Localmente, as páginas ficam em `/`, `/en/` e `/es/`.

```bash
npm run lint
npm run build:pages
```

O build estático gera `out/index.html`, `out/en/index.html` e `out/es/index.html`, com caminhos compatíveis com `/workshop-biometria/`. O workflow `.github/workflows/nextjs.yml` publica essa pasta após pushes para `main`.
