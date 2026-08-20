import { Link } from "react-router-dom";
import { company, industries, services } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="" width={36} height={36} />
            <span>{company.shortName}</span>
          </Link>
          <p>
            {company.name} is a trusted B2B technology partner helping enterprises,
            government organisations, and institutions transform, secure, and scale.
          </p>
          <p className="tagline">{company.tagline}</p>
          <div className="socials" aria-label="Social media">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={s.path}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">All Services</Link>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Industries</h4>
          <ul>
            {industries.slice(0, 6).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© 2026 {company.name}. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
