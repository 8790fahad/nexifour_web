import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  CardGrid,
  CtaBand,
  PageHero,
  PillList,
  ProcessRail,
  Section,
} from "../components/ui";
import {
  company,
  industries,
  processSteps,
  services,
  whyChoose,
} from "../data/content";

export default function Home() {
  useEffect(() => {
    document.title = "Nexifour Technologies | Enterprise Software, Cybersecurity & Cloud";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Nexifour Technologies helps enterprises transform, secure, and scale through software, cybersecurity, cloud, AI, and managed IT services.",
      );
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow={company.tagline}
        title="Technology Solutions Built for Modern Enterprises"
        lead="Nexifour Technologies helps businesses and organisations transform, secure, and scale through enterprise software, cybersecurity, cloud infrastructure, digital transformation, and intelligent technology solutions."
        actions={
          <>
            <Link className="btn btn-primary" to="/contact">
              Talk to an Expert
            </Link>
            <Link className="btn btn-ghost" to="/services">
              Explore Our Services
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Capabilities"
        title="Enterprise technology services"
        lead="End-to-end solutions for organisations that need reliable systems, strong security, and modern digital capability."
      >
        <div className="card-grid cols-3">
          {services.map((s) => (
            <article key={s.id} className="info-card">
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <Link className="text-link" to={s.path}>
                Explore service
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        dark
        eyebrow="Why Nexifour"
        title="A technology partner built for enterprise trust"
        lead="We combine software engineering, cybersecurity, and infrastructure expertise into engagements that executives and operators can rely on."
      >
        <CardGrid items={whyChoose} columns={3} />
      </Section>

      <Section
        eyebrow="How we work"
        title="A clear path from discovery to lasting support"
      >
        <ProcessRail steps={processSteps} />
      </Section>

      <Section
        dark
        eyebrow="Industries"
        title="Industries we serve"
        lead="From regulated institutions to growing mid-market businesses, we adapt delivery to your operating reality."
      >
        <PillList items={industries} />
      </Section>

      <CtaBand
        title="Ready to Transform Your Business With Technology?"
        text="Talk with Nexifour about software, cybersecurity, cloud, and digital programmes tailored to your organisation."
        button="Get Started"
      />
    </>
  );
}
