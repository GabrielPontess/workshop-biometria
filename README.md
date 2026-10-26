![Workshop Biometria - 04/11](./public/imgs/convite-workshop.png)

# Workshop de Biometria

Página do workshop com programação, inscrição, convite e temas claro/escuro.

**Endereço de publicação:** https://gabrielpontess.github.io/workshop-biometria/

## Desenvolvimento local

Com Node.js 24 e npm instalados:

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. O desenvolvimento local usa a raiz `/`.

## Publicar no GitHub Pages

1. No repositório `GabrielPontess/workshop-biometria`, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações deste projeto para a branch **`main`**.
4. Acompanhe **Actions → Deploy Next.js site to Pages**. Ao terminar, a URL estará disponível no ambiente `github-pages` e no endereço acima.

O workflow `.github/workflows/nextjs.yml` instala as dependências com `npm ci`, executa o lint, gera o site estático e publica a pasta `out/`. Novos pushes em `main` atualizam o site. Também é possível executar o workflow manualmente pela aba **Actions → Run workflow**.

A publicação usa o `GITHUB_TOKEN` fornecido pelo GitHub Actions; não é necessário cadastrar um token pessoal. A pasta `out/` é gerada no build e não precisa ser versionada.

## Gerar os arquivos estáticos

```bash
npm run lint
npm run build:pages
```

O comando `build:pages` funciona no Windows, Linux e macOS. Ele ativa `STATIC_EXPORT=true` e usa `/workshop-biometria` como prefixo padrão. Os arquivos finais são gerados em **`out/`** e devem ser servidos nesse subcaminho, como no GitHub Pages.

No workflow, `NEXT_PUBLIC_BASE_PATH` recebe automaticamente o caminho informado pelo GitHub Pages. É possível sobrescrever essa variável antes do build para publicar em outro subdiretório, ou defini-la como uma string vazia para publicar na raiz de um domínio.

As imagens são servidas diretamente como arquivos estáticos. O formulário externo, o convite, as âncoras e a alternância de tema funcionam sem servidor Node.js na hospedagem.

O build convencional continua disponível com `npm run build`, seguido de `npm start`. Se você acabou de gerar uma exportação estática, execute novamente `npm run build` antes de usar `npm start`.

## Editar o conteúdo

- `app/content.ts`: informações do evento, ementa, formulário, convite, palestrante e logos.
- `app/globals.css`: paletas, layout responsivo e estilos.
- `app/public-path.ts`: prefixo dos arquivos públicos na publicação.
- `public/imgs/`: foto do palestrante e imagem do convite.

Nos dados de conteúdo, mantenha os caminhos locais a partir de `/`, por exemplo `/imgs/pontes.jpg`. O prefixo da publicação é aplicado na renderização. URLs externas, como o formulário do Google, permanecem completas.
