// Edite este arquivo para atualizar as informações do workshop.
// Imagens locais devem ser colocadas em public/ e referenciadas por /arquivo.ext.
export const workshop = {
  title: "Workshop de Biometria - 04/11/2026 - Gabriel Pontes",
  subtitle: "Tecnologia, padrões e boas práticas na identificação biométrica.",
  date: "04 de novembro de 2026",
  dateTime: "2026-11-04T15:00:00-03:00",
  weekday: "Quarta-feira",
  time: "15h",
  timezone: "Horário de Brasília",
  duration: "50 minutos",
  platform: "Microsoft Teams",
  // URL do formulário externo. Use null para exibir “Inscrições em breve”.
  registrationUrl: "https://forms.gle/oYcYiBHmEY4WjadW9" as string | null,
  invitationUrl: "/imgs/convite-workshop.png",
  speaker: {
    name: "Gabriel Pontes",
    role: "Líder Técnico e Arquiteto de Software na Renova Soluções em Tecnologia",
    bio:
      "Gabriel Pontes atua na interseção entre biometria, arquitetura de sistemas e cibersegurança, conectando conhecimento técnico a soluções de identificação em larga escala.\n\nEntre os projetos em que atua está o RCollector, ecossistema de coleta biométrica utilizado no processo de emissão da Carteira Nacional de Habilitação (CNH). Sua experiência também abrange motores biométricos ABIS e soluções de identificação civil e criminal.\n\nPossui certificações de empresas reconhecidas internacionalmente, como Microsoft, IBM, Cisco e Fortinet.",
    photoUrl: "/imgs/pontes.jpg",
  },
  organizers: [
    { name: "Opal Bytes", logoUrl: "/imgs/opal-bytes-logo.png" },
    { name: "Renova", logoUrl: "/imgs/renova-logo.png" },
  ],
};

export const syllabus = [
  {
    title: "Introdução ao universo da biometria",
    description:
      "O que é biometria, sua evolução, características e aplicações no cotidiano.",
    tag: "Fundamentos",
  },
  {
    title: "Modalidades biométricas",
    description:
      "Biometria facial, impressões digitais, assinaturas e biometria comportamental. Diferenças, vantagens e limitações.",
    tag: "Modalidades",
  },
  {
    title: "Da captura ao processamento",
    description:
      "Como ocorre a captura, extração de características, geração de templates e preparação para reconhecimento.",
    tag: "Processo",
  },
  {
    title: "Como funciona o reconhecimento biométrico?",
    description:
      "Verificação 1:1, identificação 1:N, matching, scores de similaridade, falsos positivos e falsos negativos.",
    tag: "Reconhecimento",
  },
  {
    title: "Qualidade e conformidade biométrica",
    description:
      "Introdução aos padrões ICAO, NFIQ, WSQ e ISO. Critérios de qualidade e motivos de rejeição.",
    tag: "Padrões",
  },
  {
    title: "Segurança e privacidade",
    description:
      "LGPD, proteção de dados biométricos, prova de vida, prevenção de fraudes e riscos associados.",
    tag: "Proteção",
  },
  {
    title: "Biometria na prática",
    description:
      "Demonstração contextualizada do RCollector e dinâmica de identificação de capturas válidas e inválidas.",
    tag: "Demonstração",
  },
  {
    title: "Encerramento",
    description: "Perguntas, curiosidades e revisão dos aprendizados.",
    tag: "Conversa aberta",
  },
];

export const questions = [
  {
    question: "A participação é obrigatória?",
    answer:
      "Não. O workshop é um convite a todos os colaboradores que têm curiosidade sobre o tema. A participação é totalmente opcional.",
  },
  {
    question: "Onde e quando acontece?",
    answer:
      "O encontro será online, pelo Microsoft Teams, em 04 de novembro de 2026, quarta-feira, às 15h, no horário de Brasília. A duração prevista é de 50 minutos.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Clique em “Quero participar” para abrir o formulário de inscrição em uma nova aba e preencha os dados solicitados.",
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer:
      "A programação começa pelos fundamentos e avança até os exemplos práticos. Você pode acompanhar mesmo que esteja começando a explorar o universo da biometria.",
  },
  {
    question: "O workshop terá gravação e material de apoio?",
    answer:
      "Sim, o encontro terá gravação. O material de apoio será enviado por e-mail a todos que participarem do workshop.",
  },
  {
    question: "Haverá certificado de participação?",
    answer: "Não haverá emissão de certificado para este workshop.",
  },
];
