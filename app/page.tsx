import Image from "next/image";
import { questions, syllabus, workshop } from "./content";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { publicPath } from "./public-path";

function RegistrationButton({ compact = false }: { compact?: boolean }) {
  const className = `button button-primary${compact ? " button-compact" : ""}`;

  if (!workshop.registrationUrl) {
    return (
      <span className={`${className} button-pending`} aria-disabled="true">
        Inscrições em breve <Icon name="clock" />
      </span>
    );
  }

  return (
    <a className={className} href={workshop.registrationUrl} target="_blank" rel="noopener noreferrer">
      Quero participar <Icon name="external" />
    </a>
  );
}

function OrganizerMarks({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`organizer-marks${footer ? " organizer-marks-footer" : ""}`} aria-label="Organização">
      {workshop.organizers.map((organizer) => (
        <div className="organizer" key={organizer.name}>
          {organizer.logoUrl ? (
            <Image src={publicPath(organizer.logoUrl)} alt={organizer.name} width={136} height={44} className="organizer-logo" />
          ) : (
            <span className="organizer-placeholder">
              <Icon name="layers" />
              <span>{organizer.name}<small>ESPAÇO PARA LOGO</small></span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function FingerprintVisual() {
  return (
    <div className="biometric-visual" aria-hidden="true">
      <div className="visual-grid" />
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="scan-meta"><span className="live-dot" /> IDENTIDADE ÚNICA <span>01 / 01</span></div>
      <div className="scan-frame">
        <span className="scan-corner corner-tl" /><span className="scan-corner corner-tr" />
        <span className="scan-corner corner-bl" /><span className="scan-corner corner-br" />
        <svg className="fingerprint-art" viewBox="0 0 320 390" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
          <path d="M33 124C39 58 91 19 156 19c79 0 135 61 135 139 0 93-22 155-53 202" />
          <path d="M22 169c0-16 0-30 3-42M48 96c23-43 62-64 109-64 71 0 121 55 121 125 0 93-25 164-51 195" />
          <path d="M18 217c6-16 9-31 10-50M43 144c2-57 52-99 113-99 63 0 109 49 109 113 0 89-22 149-53 195" />
          <path d="M29 242c15-33 26-61 27-91 1-54 46-93 100-93 57 0 96 43 96 100 0 98-31 165-59 204" />
          <path d="M44 258c14-31 25-65 25-104 0-48 37-83 87-83 48 0 83 38 83 87 0 22-2 45-5 63M227 250c-10 46-27 84-50 117" />
          <path d="M56 274c20-40 26-79 26-117 0-40 31-73 74-73 42 0 70 31 70 74 0 90-28 164-67 211" />
          <path d="M68 291c17-35 29-83 28-132-1-34 24-62 60-62 34 0 57 27 57 62 0 87-29 163-70 209" />
          <path d="M79 309c22-42 32-87 30-147-1-29 18-52 47-52 27 0 44 22 44 52 0 74-20 135-51 182" />
          <path d="M96 317c19-43 28-91 26-151-1-25 10-43 34-43 22 0 31 18 31 43 0 91-31 160-66 197" />
          <path d="M110 324c20-47 28-101 25-156-1-20 6-32 21-32 13 0 18 13 18 32 0 75-21 140-52 179" />
          <path d="M149 153c-5 5 2 46-3 84-4 33-12 63-22 84M159 153c4 69-5 124-25 168M116 341l-11 17M88 338l-9 14M63 322l-8 12" />
          <path d="M36 292c17-26 27-47 33-74M24 269l12-25M35 70C63 28 106 7 157 7c87 0 147 65 147 151 0 52-5 90-16 126M281 307l-15 34" opacity=".4" />
        </svg>
        <div className="scan-line" />
        <span className="scan-coordinate coordinate-top">X: 04.11</span>
        <span className="scan-coordinate coordinate-bottom">Y: 15.00</span>
      </div>
      <div className="scan-caption"><Icon name="fingerprint" /><span>Cada detalhe conta.<small>EXPLORE O QUE NOS TORNA ÚNICOS.</small></span><span className="scan-check"><Icon name="check" /></span></div>
      <span className="visual-side-label">BIOMETRIC EXPLORATION / 2026</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="site-brand" href="#inicio" aria-label="Workshop de Biometria — início">
            <span className="brand-icon"><Icon name="fingerprint" /></span>
            <span>BIOMETRIA<small>WORKSHOP / 2026</small></span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sobre">O encontro</a><a href="#ementa">Ementa</a><a href="#palestrante">Palestrante</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <div className="header-actions"><ThemeToggle /><div className="header-cta"><RegistrationButton compact /></div></div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero section-anchor" id="inicio" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="live-dot" /> UM ENCONTRO. MUITAS DESCOBERTAS.</p>
                <div className="hero-title-wrap"><span className="hero-kicker">WORKSHOP</span><h1 id="hero-title">BIOMETRIA<span className="title-period">.</span></h1></div>
                <p className="hero-headline">A tecnologia que<br />reconhece <span>você.</span></p>
                <p className="hero-description">{workshop.subtitle} Um convite para explorar o que está por trás de cada identificação.</p>
                <div className="hero-actions">
                  <RegistrationButton />
                  <a className="button button-secondary" href={publicPath(workshop.invitationUrl)} target="_blank" rel="noopener noreferrer" aria-label="Visualizar convite (abre em nova aba)">Visualizar convite <Icon name="external" /></a>
                  <a className="button button-text" href="#ementa">Conheça a ementa <Icon name="arrow" /></a>
                </div>
                <p className="participation-note"><Icon name="user" /> Para todos os colaboradores. Participação opcional.</p>
              </div>
              <FingerprintVisual />
            </div>
            <div className="event-details" aria-label="Informações do workshop">
              <div className="event-detail"><Icon name="calendar" /><div><span>RESERVE A DATA</span><strong><time dateTime={workshop.dateTime}>04 de novembro</time></strong><small>{workshop.weekday} · 2026</small></div></div>
              <div className="event-detail"><Icon name="clock" /><div><span>HORÁRIO</span><strong>{workshop.time}</strong><small>{workshop.timezone}</small></div></div>
              <div className="event-detail"><Icon name="hourglass" /><div><span>DURAÇÃO</span><strong>{workshop.duration}</strong><small>Do conceito à prática</small></div></div>
              <div className="event-detail"><Icon name="video" /><div><span>ONDE NOS ENCONTRAMOS</span><strong>{workshop.platform}</strong><small>100% online</small></div></div>
            </div>
            <div className="hero-footnote"><span>CONHECIMENTO PARA COMPARTILHAR.</span><a href="#sobre">Explore o encontro <span>↓</span></a></div>
          </div>
        </section>

        <section className="about-section section-spacing section-anchor" id="sobre" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="section-intro">
              <p className="eyebrow section-label"><span>01 /</span> O ENCONTRO</p>
              <h2 id="about-title">Muito além de<br />uma <span className="text-accent">impressão digital.</span></h2>
              <p>A biometria já faz parte do nosso dia a dia. Mas você sabe o que acontece entre uma captura e o reconhecimento de uma identidade?</p>
              <p>Vamos conectar conceitos, tecnologias e aplicações em um encontro acessível, com exemplos práticos e espaço para a sua curiosidade.</p>
              <div className="audience-tag"><span className="live-dot" /> Curiosidade é o ponto de partida.</div>
            </div>
            <div className="learning-list">
              <article className="learning-item"><div className="icon-box"><Icon name="fingerprint" /></div><div><span className="item-label">ENTENDA OS FUNDAMENTOS</span><h3>Uma identidade, muitas possibilidades.</h3><p>Conheça as modalidades biométricas e como cada uma transforma características em reconhecimento.</p></div><span className="learning-number">01</span></article>
              <article className="learning-item"><div className="icon-box"><Icon name="shield" /></div><div><span className="item-label">EXPLORE COM CONFIANÇA</span><h3>Qualidade e segurança em cada etapa.</h3><p>Descubra o papel dos padrões, da privacidade e das boas práticas em uma identificação confiável.</p></div><span className="learning-number">02</span></article>
              <article className="learning-item"><div className="icon-box"><Icon name="layers" /></div><div><span className="item-label">CONECTE COM A PRÁTICA</span><h3>Da teoria para uma captura real.</h3><p>Acompanhe uma demonstração do RCollector e participe da análise de capturas válidas e inválidas.</p></div><span className="learning-number">03</span></article>
            </div>
          </div>
        </section>

        <section className="syllabus-section section-spacing section-anchor" id="ementa" aria-labelledby="syllabus-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow section-label"><span>02 /</span> O QUE VAMOS EXPLORAR</p><h2 id="syllabus-title">Uma jornada pelo<br /><span className="text-accent">universo da biometria.</span></h2></div><div className="syllabus-summary"><span>08</span><p>tópicos para conectar<br />conhecimento e prática.</p></div></div>
            <ol className="syllabus-grid">
              {syllabus.map((item, index) => (
                <li className={`syllabus-card${index === 6 ? " syllabus-card-featured" : ""}`} key={item.title}>
                  <div className="syllabus-card-top"><span className="module-number">{String(index + 1).padStart(2, "0")}</span><span className="module-tag">{index === 6 && <span className="live-dot" />}{item.tag}</span></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                  {index === 6 && <span className="demo-note"><Icon name="play" /> RCollector em ação</span>}
                </li>
              ))}
            </ol>
            <p className="syllabus-note"><Icon name="clock" /> Um encontro de 50 minutos, com demonstração prática e espaço para perguntas.</p>
          </div>
        </section>

        <section className="speaker-section section-spacing section-anchor" id="palestrante" aria-labelledby="speaker-title">
          <div className="container speaker-grid">
            <div className={`speaker-portrait${workshop.speaker.photoUrl ? " speaker-portrait-photo" : ""}`}>
              {workshop.speaker.photoUrl ? <Image src={publicPath(workshop.speaker.photoUrl)} alt={`Foto de ${workshop.speaker.name}`} fill sizes="(max-width: 760px) 100vw, 380px" className="speaker-photo" /> : <><div className="portrait-orbit" /><span className="portrait-initials" aria-hidden="true">GP<span>+</span></span><span className="portrait-placeholder"><Icon name="user" /> Espaço para foto do palestrante</span></>}
              <span className="portrait-label">CONHECIMENTO QUE CONECTA</span>
            </div>
            <div className="speaker-content">
              <p className="eyebrow section-label"><span>03 /</span> QUEM CONDUZ O ENCONTRO</p>
              <h2 id="speaker-title">Uma conversa com<br /><span className="text-accent">{workshop.speaker.name}.</span></h2>
              <p className={workshop.speaker.role ? "speaker-role" : "speaker-role placeholder-copy"}>{workshop.speaker.role ?? "Cargo / área de atuação a preencher"}</p>
              <div className={workshop.speaker.bio ? "speaker-bio" : "speaker-bio placeholder-copy"}>
                {(workshop.speaker.bio ?? "Este espaço está reservado para a apresentação profissional do palestrante. Adicione aqui uma breve biografia, experiência com biometria e o que deseja compartilhar neste encontro.").split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="speaker-signoff"><span className="short-rule" /><span>Conceitos, experiências e boas conversas.</span></div>
            </div>
          </div>
        </section>

        <section className="resources-section" aria-labelledby="resources-title"><div className="container resources-inner"><div className="resource-icon"><Icon name="mail" /></div><div className="resources-copy"><p className="eyebrow">O APRENDIZADO CONTINUA</p><h2 id="resources-title">Para rever. Para consultar. Para ir além.</h2><p>O workshop terá gravação. O material de apoio será enviado por e-mail a todos que participarem.</p></div><span className="resource-badge"><Icon name="video" /> Encontro com gravação</span></div></section>

        <section className="faq-section section-spacing section-anchor" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><div className="section-intro"><p className="eyebrow section-label"><span>04 /</span> BOM SABER</p><h2 id="faq-title">Antes de<br /><span className="text-accent">nos encontrarmos.</span></h2><p>As informações essenciais para você se programar e aproveitar o workshop.</p><span className="faq-decoration" aria-hidden="true">?</span></div><div className="faq-list">{questions.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span className="faq-toggle"><Icon name="plus" /></span></summary><p>{item.answer}</p></details>)}</div></div></section>

        <section className="closing-section" aria-labelledby="closing-title"><div className="container"><div className="closing-panel"><div className="closing-art" aria-hidden="true"><Icon name="fingerprint" /></div><p className="eyebrow"><span className="live-dot" /> SUA CURIOSIDADE TEM LUGAR AQUI.</p><h2 id="closing-title">O próximo passo é<br /><span className="text-accent">participar.</span></h2><p>Reserve um espaço na agenda e venha explorar o universo da biometria com a gente.</p><RegistrationButton /><span className="closing-date">04 NOV 2026 <span> / </span> 15H <span> / </span> MICROSOFT TEAMS</span><span className="closing-note">Participação opcional, aberta a todos os colaboradores.</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div><a href="#inicio" className="footer-title">Workshop de Biometria<Icon name="arrow" /></a><p>Contamos com sua participação.</p></div><OrganizerMarks footer /></div><div className="footer-bottom"><span>© 2026 · {workshop.title}</span><span>Tecnologia que reconhece. Conhecimento que conecta.</span><a href="#inicio">Voltar ao início ↑</a></div></div></footer>
    </>
  );
}
