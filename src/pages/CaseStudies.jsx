import { Link } from 'react-router-dom';
import { caseStudies } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function CaseStudies() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-grey-200 bg-grey-50 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-brand opacity-[0.08] blur-[120px]"
        />
        <Container className="relative flex flex-col gap-8">
          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-grey-500 transition-colors duration-300 hover:text-brand"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-grey-200 bg-surface transition-all duration-500 ease-luxe group-hover:-translate-x-1 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
              Back to portfolio
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 rounded-full bg-brand" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-luxe text-brand">Case studies</span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="max-w-3xl text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.03] text-ink">
              Performance marketing & growth achievements
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="max-w-2xl border-l-2 border-brand/50 pl-5 text-[18px] leading-relaxed text-grey-500">
              Real campaigns, real results: a deep-dive into the strategies and executions that drove measurable
              growth across {caseStudies.length} companies and industries.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-label="All case studies">
        <Container className="flex flex-col divide-y divide-grey-200">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={Math.min(i * 60, 240)}>
              <ProjectCard study={study} />
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
