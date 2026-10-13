import { experience } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience" className="bg-grey-50 py-28 md:py-32" aria-label="Professional experience">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionIntro
            kicker="Work history"
            heading="Professional experience"
            sub="Agency and in-house roles across e-commerce, food, fintech, SaaS and Web3."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={Math.min(i * 70, 280)}>
              <article className="group relative h-full overflow-hidden rounded-[22px] border border-grey-200 bg-surface p-6 transition-all duration-700 ease-luxe hover:-translate-y-1.5 hover:border-brand/45 hover:shadow-luxe">
                <span className="sheen" aria-hidden="true" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-display text-[14px] font-semibold text-brand transition-all duration-500 ease-luxe group-hover:bg-brand group-hover:text-white">
                  {e.initials}
                </div>
                <div className="mt-5">
                  <p className="text-[15px] font-bold text-ink transition-colors duration-500 group-hover:text-brand">
                    {e.company}
                  </p>
                  <p className="mt-1 text-[14px] text-grey-500">{e.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
