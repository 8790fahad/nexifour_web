import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero, Section } from "../components/ui";
import {
  company,
  companySizes,
  contactIntents,
  serviceOptions,
} from "../data/content";

const empty = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  companySize: "",
  intent: "",
  message: "",
};

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const defaultIntent = useMemo(() => {
    const intent = params.get("intent");
    if (intent === "security") return "Request a Cybersecurity Assessment";
    if (intent === "software") return "Discuss a Software Project";
    return "";
  }, [params]);

  useEffect(() => {
    document.title = "Contact Us | Nexifour Technologies";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact Nexifour Technologies for consultations, cybersecurity assessments, software projects, and partnership enquiries.",
      );
    }
  }, []);

  useEffect(() => {
    if (defaultIntent) {
      setForm((prev) => ({
        ...prev,
        intent: defaultIntent,
        service:
          defaultIntent.includes("Cybersecurity")
            ? "Cybersecurity"
            : defaultIntent.includes("Software")
              ? "Enterprise Software"
              : prev.service,
      }));
    }
  }, [defaultIntent]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.companyName.trim()) next.companyName = "Company name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.service) next.service = "Select a service.";
    if (!form.companySize) next.companySize = "Select company size.";
    if (!form.intent) next.intent = "Select how we can help.";
    if (form.message.trim().length < 20) {
      next.message = "Please share a short message (at least 20 characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your next technology priority"
        lead="Request a consultation, cybersecurity assessment, software engagement, or partnership conversation. Our team will respond with next steps."
      />

      <Section>
        <div className="contact-layout">
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            {submitted ? (
              <div className="form-success" role="status">
                <h3>Thank you — your enquiry has been received.</h3>
                <p>
                  A Nexifour specialist will review your request and follow up
                  shortly. For urgent matters, email{" "}
                  <a href={`mailto:${company.email}`}>{company.email}</a>.
                </p>
              </div>
            ) : (
              <>
                <div className="form-grid">
                  <Field
                    label="Full Name"
                    error={errors.fullName}
                    value={form.fullName}
                    onChange={(v) => update("fullName", v)}
                    required
                  />
                  <Field
                    label="Company Name"
                    error={errors.companyName}
                    value={form.companyName}
                    onChange={(v) => update("companyName", v)}
                    required
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    error={errors.email}
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    required
                  />
                  <Field
                    label="Phone Number"
                    type="tel"
                    error={errors.phone}
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    required
                  />
                  <Select
                    label="Service Interested In"
                    error={errors.service}
                    value={form.service}
                    onChange={(v) => update("service", v)}
                    options={serviceOptions}
                    required
                  />
                  <Select
                    label="Company Size"
                    error={errors.companySize}
                    value={form.companySize}
                    onChange={(v) => update("companySize", v)}
                    options={companySizes}
                    required
                  />
                </div>

                <fieldset className="intent-set">
                  <legend>How can we help?</legend>
                  {contactIntents.map((intent) => (
                    <label key={intent} className="radio-row">
                      <input
                        type="radio"
                        name="intent"
                        checked={form.intent === intent}
                        onChange={() => update("intent", intent)}
                      />
                      <span>{intent}</span>
                    </label>
                  ))}
                  {errors.intent && <p className="field-error">{errors.intent}</p>}
                </fieldset>

                <label className="field">
                  <span>Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Share your goals, timeline, and current environment."
                  />
                  {errors.message && (
                    <p className="field-error">{errors.message}</p>
                  )}
                </label>

                <button className="btn btn-primary" type="submit">
                  Send Enquiry
                </button>
              </>
            )}
          </form>

          <aside className="contact-aside">
            <div className="panel">
              <h3>Business contact</h3>
              <ul className="contact-list">
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                    {company.phone}
                  </a>
                </li>
                <li>
                  <strong>Location</strong>
                  <span>{company.address}</span>
                </li>
              </ul>
            </div>
            <div className="panel">
              <h3>Connect</h3>
              <div className="socials stacked">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  X / Twitter
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ label, value, onChange, error, type = "text", required }) {
  return (
    <label className="field">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="field-error">{error}</p>}
    </label>
  );
}

function Select({ label, value, onChange, options, error, required }) {
  return (
    <label className="field">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="field-error">{error}</p>}
    </label>
  );
}
