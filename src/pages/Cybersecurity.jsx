import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Checklist,
  CtaBand,
  PageHero,
  ProcessRail,
  Section,
} from "../components/ui";
import { cyberProcess, services } from "../data/content";

const cyber = services.find((s) => s.id === "cybersecurity");

const highlights = [
  "VAPT",
  "Web Security",
  "API Security",
  "Network Security",
  "Cloud Security",
  "Security Risk Assessment",
  "Compliance & Security Audits",
  "Security Monitoring",
  "Incident Response",
];

export default function Cybersecurity() {
  useEffect(() => {
    document.title = "Cybersecurity | Nexifour Technologies";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Secure your business with Nexifour cybersecurity services including VAPT, cloud security, risk assessment, and incident response.",
      );
    }
  }, []);

  return (
    <>
      <PageHero
        visual="shield"
        eyebrow="Cybersecurity"
        title="Secure Your Business. Protect What Matters."
        lead="Identify weaknesses before attackers do. Nexifour helps enterprises and institutions strengthen applications, APIs, networks, and cloud environments with practical, risk-led security engagements."
        actions={
          <>
            <Link className="btn btn-primary" to="/contact?intent=security">
              Request a Security Assessment
            </Link>
            <Link className="btn btn-ghost" to="/services#cybersecurity">
              View full services
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Protection"
        title="Cybersecurity services built around business risk"
        lead="We combine offensive testing, architecture guidance, and remediation support so security improvements are actionable—not just documented."
      >
        <div className="card-grid cols-3">
          {highlights.map((item) => (
            <article key={item} className="info-card compact">
              <h3>{item}</h3>
              <p>
                Enterprise-grade coverage for teams that need clear findings,
                prioritised remediation, and measurable risk reduction.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        dark
        eyebrow="Coverage"
        title="Deep assessment capability"
      >
        <Checklist items={cyber.items} />
      </Section>

      <Section
        eyebrow="Method"
        title="Cybersecurity assessment process"
        lead="A structured approach from scoping through reassessment—designed for clarity with executives and precision with technical teams."
      >
        <ProcessRail steps={cyberProcess} />
      </Section>

      <CtaBand
        title="Identify Your Security Risks Before Attackers Do."
        text="Request a security assessment and get a clear view of your exposure, priorities, and next steps."
        button="Request a Security Assessment"
        to="/contact?intent=security"
      />
    </>
  );
}
