import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CardGrid, CtaBand, PageHero, Section } from "../components/ui";
import { company, values } from "../data/content";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Nexifour Technologies";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn about Nexifour Technologies—our mission, vision, and values as an enterprise software, cybersecurity, and digital transformation partner.",
      );
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="About Nexifour"
        title="Building Technology That Powers Progress."
        lead={`${company.name} partners with businesses, enterprises, government organisations, and institutions to deliver secure, intelligent, and scalable technology programmes.`}
        actions={
          <Link className="btn btn-primary" to="/contact">
            Talk to an Expert
          </Link>
        }
      />

      <Section
        eyebrow="Overview"
        title="A trusted B2B technology partner"
        lead="We help organisations modernise operations, strengthen cyber resilience, and unlock value from data and infrastructure—with delivery discipline that suits enterprise and institutional environments."
      >
        <div className="split">
          <div className="panel">
            <h3>Mission</h3>
            <p>
              To empower organisations with secure, intelligent, and scalable
              technology solutions that drive efficiency, innovation, and
              sustainable growth.
            </p>
          </div>
          <div className="panel">
            <h3>Vision</h3>
            <p>
              To become a leading global technology partner for enterprise
              software, cybersecurity, and digital transformation.
            </p>
          </div>
        </div>
      </Section>

      <Section
        dark
        eyebrow="Values"
        title="Core values that shape every engagement"
      >
        <CardGrid items={values} columns={3} />
      </Section>

      <CtaBand
        title="Partner with a team built for enterprise outcomes"
        text="Whether you are planning a security programme, an ERP rollout, or a cloud migration, we are ready to help."
      />
    </>
  );
}
