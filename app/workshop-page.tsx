import Image from "next/image";
import { workshop } from "./content";
import { Icon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { publicPath } from "./public-path";
import { dictionaries, eventDate, type Dictionary, type Locale } from "./i18n";
import { LanguageSelector } from "./language-selector";

function RegistrationButton({ copy, compact = false }: { copy: Dictionary; compact?: boolean }) {
  const className = `button button-primary${compact ? " button-compact" : ""}`;

  if (!workshop.registrationUrl) {
    return (
      <span className={`${className} button-pending`} aria-disabled="true">
        {copy.common.registrationPending} <Icon name="clock" />
      </span>
    );
  }

  return (
    <a className={className} href={workshop.registrationUrl} target="_blank" rel="noopener noreferrer">
      {copy.common.registration} <Icon name="external" />
    </a>
  );
}

function OrganizerMarks({ copy, footer = false }: { copy: Dictionary; footer?: boolean }) {
  return (
    <div className={`organizer-marks${footer ? " organizer-marks-footer" : ""}`} role="group" aria-label={copy.common.organizers}>
      {workshop.organizers.map((organizer) => (
        <div className="organizer" key={organizer.name}>
          {organizer.logoUrl ? (
            <Image src={publicPath(organizer.logoUrl)} alt={organizer.name} width={136} height={80} className="organizer-logo" />
          ) : (
            <span className="organizer-placeholder">
              <Icon name="layers" />
              <span>{organizer.name}<small>{copy.common.logoPlaceholder}</small></span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function FingerprintVisual({ copy }: { copy: Dictionary }) {
  return (
    <div className="biometric-visual" aria-hidden="true">
      <div className="visual-grid" />
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="scan-meta"><span className="live-dot" /> {copy.visual.identity} <span>01 / 01</span></div>
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
      <div className="scan-caption"><Icon name="fingerprint" /><span>{copy.visual.caption}<small>{copy.visual.detail}</small></span><span className="scan-check"><Icon name="check" /></span></div>
      <span className="visual-side-label">{copy.visual.side}</span>
    </div>
  );
}

export default function WorkshopPage({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale];
  const date = eventDate(locale);
  const learningIcons = ["fingerprint", "shield", "layers"] as const;

  return (
    <>
      <a className="skip-link" href="#conteudo">{copy.common.skip}</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="site-brand" href="#inicio" aria-label={copy.common.home}>
            <span className="brand-icon"><Icon name="fingerprint" /></span>
            <span>{copy.common.brand}<small>{copy.common.workshop} / {date.year}</small></span>
          </a>
          <nav aria-label={copy.common.navigation}>
            <a href="#sobre">{copy.common.nav.about}</a><a href="#ementa">{copy.common.nav.syllabus}</a><a href="#palestrante">{copy.common.nav.speaker}</a><a href="#duvidas">{copy.common.nav.faq}</a>
          </nav>
          <div className="header-actions"><LanguageSelector locale={locale} label={copy.common.language} /><ThemeToggle labels={copy.theme} /><div className="header-cta"><RegistrationButton copy={copy} compact /></div></div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero section-anchor" id="inicio" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="live-dot" /> {copy.hero.eyebrow}</p>
                <div className="hero-title-wrap"><span className="hero-kicker">{copy.common.workshop}</span><h1 id="hero-title">{copy.hero.title}<span className="title-period">.</span></h1></div>
                <p className="hero-headline">{copy.hero.headline}<br />{copy.hero.headlineEnd}{copy.hero.headlineEnd && " "}<span>{copy.hero.headlineAccent}</span></p>
                <p className="hero-description">{copy.hero.description}</p>
                <div className="hero-actions">
                  <RegistrationButton copy={copy} />
                  <a className="button button-secondary" href={publicPath(workshop.invitationUrl)} target="_blank" rel="noopener noreferrer" aria-label={copy.common.invitationLabel}>{copy.common.invitation} <Icon name="external" /></a>
                  <a className="button button-text" href="#ementa">{copy.common.syllabus} <Icon name="arrow" /></a>
                </div>
                <p className="participation-note"><Icon name="user" /> {copy.hero.participation}</p>
                {copy.hero.languageNote && <p className="event-language-note">{copy.hero.languageNote}</p>}
              </div>
              <FingerprintVisual copy={copy} />
            </div>
            <div className="event-details" aria-label={copy.hero.details}>
              <div className="event-detail"><Icon name="calendar" /><div><span>{copy.hero.saveDate}</span><strong><time dateTime={workshop.dateTime}>{date.date}</time></strong><small>{date.weekday} · {date.year}</small></div></div>
              <div className="event-detail"><Icon name="clock" /><div><span>{copy.hero.time}</span><strong>{date.time}</strong><small>{copy.hero.timezone}</small></div></div>
              <div className="event-detail"><Icon name="hourglass" /><div><span>{copy.hero.duration}</span><strong>{workshop.durationMinutes} {copy.hero.minutes}</strong><small>{copy.hero.practical}</small></div></div>
              <div className="event-detail"><Icon name="video" /><div><span>{copy.hero.where}</span><strong>{workshop.platform}</strong><small>{copy.hero.online}</small></div></div>
            </div>
            <div className="hero-footnote"><span>{copy.hero.footnote}</span><a href="#sobre">{copy.hero.explore} <span>↓</span></a></div>
          </div>
        </section>

        <section className="about-section section-spacing section-anchor" id="sobre" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="section-intro">
              <p className="eyebrow section-label"><span>01 /</span> {copy.about.label}</p>
              <h2 id="about-title">{copy.about.heading}<br /><span className="text-accent">{copy.about.headingAccent}</span></h2>
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="audience-tag"><span className="live-dot" /> {copy.about.curiosity}</div>
            </div>
            <div className="learning-list">
              {copy.about.learning.map((item, index) => <article className="learning-item" key={item.title}><div className="icon-box"><Icon name={learningIcons[index]} /></div><div><span className="item-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div><span className="learning-number">{String(index + 1).padStart(2, "0")}</span></article>)}
            </div>
          </div>
        </section>

        <section className="syllabus-section section-spacing section-anchor" id="ementa" aria-labelledby="syllabus-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow section-label"><span>02 /</span> {copy.syllabus.label}</p><h2 id="syllabus-title">{copy.syllabus.heading}<br /><span className="text-accent">{copy.syllabus.headingAccent}</span></h2></div><div className="syllabus-summary"><span>{String(copy.syllabus.modules.length).padStart(2, "0")}</span><p>{copy.syllabus.summary}</p></div></div>
            <ol className="syllabus-grid">
              {copy.syllabus.modules.map((item, index) => (
                <li className={`syllabus-card${index === 6 ? " syllabus-card-featured" : ""}`} key={item.title}>
                  <div className="syllabus-card-top"><span className="module-number">{String(index + 1).padStart(2, "0")}</span><span className="module-tag">{index === 6 && <span className="live-dot" />}{item.tag}</span></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                  {index === 6 && <span className="demo-note"><Icon name="play" /> {copy.syllabus.demo}</span>}
                </li>
              ))}
            </ol>
            <p className="syllabus-note"><Icon name="clock" /> {copy.syllabus.note}</p>
          </div>
        </section>

        <section className="speaker-section section-spacing section-anchor" id="palestrante" aria-labelledby="speaker-title">
          <div className="container speaker-grid">
            <div className={`speaker-portrait${workshop.speaker.photoUrl ? " speaker-portrait-photo" : ""}`}>
              {workshop.speaker.photoUrl ? <Image src={publicPath(workshop.speaker.photoUrl)} alt={`${copy.speaker.photoAlt} ${workshop.speaker.name}`} fill sizes="(max-width: 760px) 100vw, 380px" className="speaker-photo" /> : <><div className="portrait-orbit" /><span className="portrait-initials" aria-hidden="true">GP<span>+</span></span><span className="portrait-placeholder"><Icon name="user" /> {copy.speaker.photoPlaceholder}</span></>}
              <span className="portrait-label">{copy.speaker.portraitLabel}</span>
            </div>
            <div className="speaker-content">
              <p className="eyebrow section-label"><span>03 /</span> {copy.speaker.label}</p>
              <h2 id="speaker-title">{copy.speaker.heading}<br /><span className="text-accent">{workshop.speaker.name}.</span></h2>
              <p className="speaker-role">{copy.speaker.role}</p>
              <div className="speaker-bio">
                {copy.speaker.bio.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="speaker-signoff"><span className="short-rule" /><span>{copy.speaker.signoff}</span></div>
            </div>
          </div>
        </section>

        <section className="resources-section" aria-labelledby="resources-title"><div className="container resources-inner"><div className="resource-icon"><Icon name="mail" /></div><div className="resources-copy"><p className="eyebrow">{copy.resources.label}</p><h2 id="resources-title">{copy.resources.heading}</h2><p>{copy.resources.description}</p></div><span className="resource-badge"><Icon name="video" /> {copy.resources.badge}</span></div></section>

        <section className="faq-section section-spacing section-anchor" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><div className="section-intro"><p className="eyebrow section-label"><span>04 /</span> {copy.faq.label}</p><h2 id="faq-title">{copy.faq.heading}<br /><span className="text-accent">{copy.faq.headingAccent}</span></h2><p>{copy.faq.description}</p><span className="faq-decoration" aria-hidden="true">?</span></div><div className="faq-list">{copy.faq.questions.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span className="faq-toggle"><Icon name="plus" /></span></summary><p>{item.answer}</p></details>)}</div></div></section>

        <section className="closing-section" aria-labelledby="closing-title"><div className="container"><div className="closing-panel"><div className="closing-art" aria-hidden="true"><Icon name="fingerprint" /></div><p className="eyebrow"><span className="live-dot" /> {copy.closing.label}</p><h2 id="closing-title">{copy.closing.heading}<br /><span className="text-accent">{copy.closing.headingAccent}</span></h2><p>{copy.closing.description}</p><RegistrationButton copy={copy} /><span className="closing-date">{date.shortDate} <span> / </span> {date.time} <span> / </span> MICROSOFT TEAMS</span><span className="closing-note">{copy.closing.note}</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div><a href="#inicio" className="footer-title">{copy.meta.name}<Icon name="arrow" /></a><p>{copy.footer.participation}</p></div><OrganizerMarks copy={copy} footer /></div><div className="footer-bottom"><span>© {date.year} · {copy.meta.title}</span><span>{copy.footer.tagline}</span><a href="#inicio">{copy.footer.top} ↑</a></div></div></footer>
    </>
  );
}
