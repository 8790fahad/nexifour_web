import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Checklist,
  CtaBand,
  PageHero,
  ProcessRail,
  Section,
} from "../components/ui";
import { softwareProcess } from "../data/content";

const solutions = [
  "ERP",
  "Finance & Accounting",
  "Inventory",
  "Manufacturing",
  "CRM",
  "HR & Payroll",
  "Procurement",
  "Custom Software",
];

export default function EnterpriseSoftware() {
  useEffect(() => {
    document.title = "Enterprise Software | Nexifour Technologies";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Nexifour designs secure, scalable enterprise software including ERP, finance, inventory, manufacturing, CRM, and custom platforms.",
      );
    }
  }, []);

  return (
    <>
      <PageHero
        visual="software"
        eyebrow="Enterprise Software"
        title="Software Built Around Your Business."
        lead="Nexifour designs and develops secure, scalable, and integrated enterprise systems that mirror how your organisation actually works—from finance and inventory to manufacturing and customer operations."
        actions={
          <Link className="btn btn-primary" to="/contact?intent=software">
            Discuss a Software Project
          </Link>
        }
      />

      <Section
        eyebrow="Solutions"
        title="Enterprise systems that connect people, process, and data"
        lead="Replace fragmented tools with coherent platforms that improve control, visibility, and operational speed."
      >
        <div className="card-grid cols-4">
          {solutions.map((item) => (
            <article key={item} className="info-card compact">
              <h3>{item}</h3>
              <p>
                Purpose-built modules and integrations designed for reliability,
                role-based control, and long-term maintainability.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        dark
        eyebrow="Delivery"
        title="From Idea to Enterprise Scale"
        lead="A delivery model that moves from discovery to secure production systems without losing business context."
      >
        <ProcessRail steps={softwareProcess} />
      </Section>

      <Section
        eyebrow="Capabilities"
        title="What we typically deliver"
      >
        <Checklist
          items={[
            "ERP Solutions",
            "Accounting & Financial Management",
            "Inventory & Warehouse Management",
            "CRM Solutions",
            "HR & Payroll Systems",
            "Procurement & Supply Chain",
            "Manufacturing Systems",
            "Custom Enterprise Software",
            "Legacy System Modernization",
          ]}
        />
      </Section>

      <CtaBand
        title="Ready to modernise your enterprise systems?"
        text="Share your current stack and priorities. We will outline a practical path from idea to enterprise scale."
        button="Talk to an Expert"
      />
    </>
  );
}
