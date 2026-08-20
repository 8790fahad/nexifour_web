import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Checklist, CtaBand, PageHero, Section } from "../components/ui";
import { services } from "../data/content";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Nexifour Technologies";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore Nexifour services across enterprise software, cybersecurity, cloud, digital transformation, AI, and managed IT.",
      );
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services for modern enterprises"
        lead="From secure software platforms to cybersecurity assessments and cloud programmes, Nexifour delivers the capabilities organisations need to operate with confidence."
        actions={
          <Link className="btn btn-primary" to="/contact">
            Talk to an Expert
          </Link>
        }
      />

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          dark={index % 2 === 1}
          eyebrow={service.title}
          title={service.title}
          lead={service.summary}
        >
          <div className="split">
            <Checklist items={service.items} />
            <div className="panel">
              <h3>Engage this capability</h3>
              <p>
                Whether you need a focused assessment or a multi-year delivery
                programme, our specialists design a roadmap around your risk,
                budget, and operational priorities.
              </p>
              <Link className="btn btn-primary" to={service.path.startsWith("/") ? service.path : "/contact"}>
                {service.path.includes("#") ? "Discuss this service" : "View details"}
              </Link>
            </div>
          </div>
        </Section>
      ))}

      <CtaBand
        title="Need a tailored technology roadmap?"
        text="Tell us about your environment and priorities. We will recommend the right starting point."
      />
    </>
  );
}
