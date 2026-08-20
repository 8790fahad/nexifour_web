import { Link } from "react-router-dom";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  dark = false,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`section ${dark ? "section-dark" : "section-light"} ${className}`}
    >
      <div className="wrap">
        {(eyebrow || title || lead) && (
          <div className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {lead && <p className="section-lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  visual = "network",
}) {
  return (
    <section className={`page-hero visual-${visual}`}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap page-hero-inner">
        <div className="page-hero-copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {actions && <div className="hero-actions">{actions}</div>}
        </div>
        <div className="page-hero-art" aria-hidden="true">
          <HeroArt variant={visual} />
        </div>
      </div>
    </section>
  );
}

function HeroArt({ variant }) {
  if (variant === "shield") {
    return (
      <svg viewBox="0 0 420 420" className="hero-svg">
        <defs>
          <linearGradient id="nx-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B4FBF" />
            <stop offset="100%" stopColor="#22B8E8" />
          </linearGradient>
        </defs>
        <path
          d="M210 48 L340 98 V198 C340 278 286 348 210 372 C134 348 80 278 80 198 V98 Z"
          fill="none"
          stroke="url(#nx-g)"
          strokeWidth="10"
        />
        <circle cx="150" cy="170" r="10" fill="#0F1F38" />
        <circle cx="270" cy="170" r="10" fill="#0F1F38" />
        <circle cx="210" cy="250" r="10" fill="#F5A623" />
        <path
          d="M150 170 L210 250 L270 170"
          fill="none"
          stroke="url(#nx-g)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "software") {
    return (
      <svg viewBox="0 0 420 420" className="hero-svg">
        <defs>
          <linearGradient id="nx-s" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B4FBF" />
            <stop offset="100%" stopColor="#22B8E8" />
          </linearGradient>
        </defs>
        <rect x="70" y="90" width="280" height="200" rx="18" fill="none" stroke="url(#nx-s)" strokeWidth="8" />
        <rect x="100" y="130" width="120" height="14" rx="4" fill="#22B8E8" opacity="0.7" />
        <rect x="100" y="160" width="180" height="10" rx="4" fill="#1B4FBF" opacity="0.45" />
        <rect x="100" y="186" width="150" height="10" rx="4" fill="#1B4FBF" opacity="0.35" />
        <circle cx="300" cy="250" r="18" fill="#0F1F38" />
        <circle cx="330" cy="290" r="12" fill="#F5A623" />
        <path d="M300 250 L330 290" stroke="url(#nx-s)" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 420" className="hero-svg">
      <defs>
        <linearGradient id="nx-n" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B4FBF" />
          <stop offset="100%" stopColor="#22B8E8" />
        </linearGradient>
      </defs>
      <path
        d="M110 90 V300 M110 90 L310 300 M310 90 V300"
        fill="none"
        stroke="url(#nx-n)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="110" cy="90" r="16" fill="#0F1F38" />
      <circle cx="110" cy="300" r="16" fill="#0F1F38" />
      <circle cx="310" cy="90" r="16" fill="#0F1F38" />
      <circle cx="310" cy="300" r="16" fill="#F5A623" />
    </svg>
  );
}

export function CtaBand({
  title,
  text,
  button = "Get Started",
  to = "/contact",
}) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <Link className="btn btn-accent" to={to}>
          {button}
        </Link>
      </div>
    </section>
  );
}

export function CardGrid({ items, columns = 3 }) {
  return (
    <div className={`card-grid cols-${columns}`}>
      {items.map((item) => (
        <article key={item.title} className="info-card">
          <h3>{item.title}</h3>
          <p>{item.text || item.summary}</p>
          {item.path && (
            <Link className="text-link" to={item.path}>
              Learn more
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

export function ProcessRail({ steps }) {
  return (
    <ol className="process-rail">
      {steps.map((s) => (
        <li key={s.title}>
          <span className="process-step">{s.step}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function PillList({ items }) {
  return (
    <ul className="pill-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
