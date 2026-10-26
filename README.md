# Workshop de Biometria

Landing page em Next.js para o workshop de 04/11/2026, às 15h de Brasília, via Microsoft Teams. A referência visual está em `examples/Convite Workshop .png`.

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Personalizar conteúdo e identidade

As informações editáveis estão em **`app/content.ts`**:

- `workshop.registrationUrl`: URL completa do formulário externo. Enquanto for `null`, os botões mostram “Inscrições em breve” e não redirecionam. Ao preencher, passam a mostrar “Quero participar” e abrem o formulário em outra aba.
- `workshop.invitationUrl`: imagem do convite, aberta em uma nova aba pelo botão “Visualizar convite”. O arquivo atual está em `public/imgs/convite-workshop.png`.
- `workshop.speaker.role` e `workshop.speaker.bio`: cargo e apresentação profissional do palestrante.
- `workshop.speaker.photoUrl`: caminho da foto. Por exemplo: `/gabriel-pontes.jpg`, para um arquivo colocado em `public/gabriel-pontes.jpg`.
- `workshop.organizers[].logoUrl`: caminho dos logos oficiais. Por exemplo: `/opal-bytes.svg` e `/renova.svg`, com os arquivos em `public/`.
- `syllabus`: os oito módulos da ementa.
- `questions`: perguntas e respostas frequentes.

A foto, o cargo e a biografia de Gabriel Pontes já estão preenchidos. A biografia aceita parágrafos separados por `\n\n`. Os logos mantêm placeholders visíveis até serem preenchidos. Prefira imagens locais em `public/`. Se usar um servidor de imagens externo, configure `images.remotePatterns` no `next.config.ts`.

O material de apoio será enviado por e-mail aos participantes. A página informa que haverá gravação. A participação é voluntária e não há certificado.

## Estrutura

- `app/page.tsx`: seções e componentes da página.
- `app/globals.css`: cores, layout responsivo e animação da impressão digital.
- `app/icons.tsx`: ícones SVG locais.
- `app/layout.tsx`: fontes, idioma e metadados.
- `public/icon.svg`: ícone do site.

A página usa renderização no servidor, navegação por âncoras e perguntas expansíveis nativas. A animação respeita a preferência por movimento reduzido.

## Validação e produção

```bash
npm run lint
npm run build
npm start
```
