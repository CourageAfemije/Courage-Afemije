import { certifications } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

export default function Certifications() {
  return (
    <section className="bg-surface py-28 md:py-32" aria-label="Certifications">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionIntro
            kicker="Credentials"
            heading="Certifications"
            sub="Platform- and agency-issued credentials behind the paid media work."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 70, 240)}>
              <div className="group flex items-start gap-4 rounded-[20px] border border-grey-200 p-6 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-brand/45 hover:shadow-luxe">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand transition-all duration-500 ease-luxe group-hover:bg-brand group-hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </span>
                <p className="text-[15px] font-semibold leading-snug text-ink">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
