import { useState } from 'react';
import { profile, contactOptions } from '../data/siteData.js';
import Container from './Container.jsx';
import Reveal from './Reveal.jsx';

// Reference contact: one wide rounded container — orange panel with the
// pitch and email on the left, the form on the right with pill selectors.
const fieldClass =
  'w-full rounded-[20px] border border-grey-200/50 bg-surface px-4 py-3.5 text-[15px] text-ink outline-none transition-all duration-300 ease-luxe placeholder:text-grey-400 focus:border-brand focus:ring-4 focus:ring-brand/15';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    purpose: contactOptions[0],
    budget: '',
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New enquiry: ${form.purpose}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Looking for: ${form.purpose}`,
      form.budget ? `Budget / salary range: ${form.budget}` : null,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-grey-100 py-24 md:py-28" aria-label="Contact">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            <span className="text-[14px] font-medium text-grey-500">Contact</span>
          </div>
        </Reveal>
        <Reveal className="-mt-10">
          <h2 className="text-center text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-ink">
            Start With a Brief
          </h2>
        </Reveal>

        <Reveal variant="zoom" className="w-full max-w-5xl">
          <div className="grid gap-3 rounded-[32px] bg-surface p-3 ring-1 ring-grey-200/40 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Orange panel */}
            <div className="flex flex-col justify-between gap-10 rounded-[22px] bg-brand p-8 text-white md:p-10">
              <div>
                <h3 className="font-display text-[26px] leading-snug">
                  Need a custom package?
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/85">
                  Tell me about your brand, your audience, and what you&rsquo;re testing. Or
                  if you&rsquo;re hiring, tell me about the role. I&rsquo;ll scope what fits.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex w-fit items-center gap-2.5 text-[15px] font-medium underline decoration-white/40 decoration-1 underline-offset-8 transition-colors hover:decoration-white"
                >
                  {profile.email}
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2.5 text-[15px] font-medium text-white/85 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
                <p className="text-[13px] text-white/65">
                  Drop me a message, I typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 md:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className={fieldClass}
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  aria-label="Name"
                />
                <input
                  className={fieldClass}
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  aria-label="Email"
                />
              </div>

              <fieldset>
                <legend className="mb-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-grey-500">
                  What are you looking for?
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {contactOptions.map((opt) => {
                    const active = form.purpose === opt;
                    return (
                      <label
                        key={opt}
                        className={`flex cursor-pointer items-center gap-2.5 rounded-full py-2 pl-3 pr-4 text-[13px] font-medium transition-all duration-300 ease-luxe ${
                          active
                            ? 'bg-brand/15 text-ink ring-1 ring-brand/60'
                            : 'bg-grey-100 text-grey-500 ring-1 ring-grey-200/40 hover:text-ink'
                        }`}
                      >
                        <input
                          type="radio"
                          name="purpose"
                          value={opt}
                          checked={active}
                          onChange={update('purpose')}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`h-2 w-2 rounded-full transition-colors ${
                            active ? 'bg-brand' : 'bg-grey-400'
                          }`}
                        />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <input
                className={fieldClass}
                type="text"
                value={form.budget}
                onChange={update('budget')}
                placeholder="Budget / salary range (optional)"
                aria-label="Budget or salary range, optional"
              />

              <textarea
                className={`${fieldClass} min-h-[120px] resize-y`}
                required
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about the brand, the goal, or the role…"
                aria-label="Message"
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-3.5 text-[15px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold"
                >
                  Send message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <p className="text-[12px] text-grey-400">
                  Opens your email app with the details filled in. Nothing is stored here.
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
