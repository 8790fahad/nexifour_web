import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { company, navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" width={36} height={36} />
          <span>{company.shortName}</span>
        </Link>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-panel ${open ? "is-open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            className="btn btn-primary nav-cta mobile-only"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Talk to an Expert
          </Link>
        </nav>

        <Link className="btn btn-primary nav-cta desktop-only" to="/contact">
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
}
