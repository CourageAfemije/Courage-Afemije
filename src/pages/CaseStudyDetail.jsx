import { Link, useParams } from 'react-router-dom';
import { getCaseStudy, getAdjacentCaseStudies } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import Reveal from '../components/Reveal.jsx';
import CompanyBadge from '../components/CompanyBadge.jsx';
import CaseStudyGallery from '../components/CaseStudyGallery.jsx';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <Container className="flex flex-col items-start gap-6 py-28">
        <h1 className="text-[clamp(2rem,4vw,2.6rem)] leading-tight text-ink">Case study not found</h1>
        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-grey-200 transition-all duration-500 ease-luxe group-hover:-translate-x-1 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
          Back to all case studies
        </Link>
      </Container>
    );
  }

  const { prev, next } = getAdjacentCaseStudies(slug);
  const overview = study.overview || study.summary;
  const achievements = study.achievements;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-grey-200 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand opacity-[0.08] blur-[130px]"
        />
        <Container className="relative flex flex-col gap-12">
          <Reveal>
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-grey-500 transition-colors duration-300 hover:text-brand"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-grey-200 transition-all duration-500 ease-luxe group-hover:-translate-x-1 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
              Back to case studies
            </Link>
          </Reveal>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <Reveal variant="left">
              <CompanyBadge
                study={study}
                className={`shadow-luxe-lg ${study.logo ? 'h-20 w-[148px] rounded-[24px]' : 'h-20 w-20 rounded-[26px] text-[22px]'}`}
              />
            </Reveal>

            <div className="flex flex-col gap-5">
              <Reveal delay={80}>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-luxe text-brand">
                    {study.industry}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="max-w-3xl text-[clamp(2.2rem,5vw,3.7rem)] leading-[1.03] text-ink">
                  {study.company}
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="text-[17px] font-medium text-grey-500">{study.role}</p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-4 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 border-t border-grey-200 pt-7">
                  {study.kpis.map((kpi) => (
                    <div key={kpi.label}>
                      <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-none text-foil">
                        {kpi.value}
                      </p>
                      <p className="mt-2 text-[13px] leading-snug text-grey-500">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24" aria-label={`${study.company} details`}>
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.62fr]">
          <Reveal className="flex flex-col gap-12">
            <p className="max-w-2xl font-display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.5] text-ink">
              {overview}
            </p>

            {achievements && (
              <div>
                <h2 className="mb-6 text-[11px] font-bold uppercase tracking-luxe text-grey-500">
                  Key responsibilities &amp; achievements
                </h2>
                <ul className="flex flex-col divide-y divide-grey-200">
                  {achievements.map((a) => (
                    <li
                      key={a}
                      className="group flex gap-4 py-4 text-[16px] leading-relaxed text-grey-500 transition-colors duration-500 hover:text-ink"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-grey-200 transition-colors duration-500 group-hover:bg-brand"
                        aria-hidden="true"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          <Reveal variant="right" delay={120}>
            <aside className="sticky top-28 flex flex-col gap-5 overflow-hidden rounded-[28px] bg-navy p-9 text-white shadow-luxe-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand opacity-20 blur-[90px]"
              />
              <p className="relative text-[11px] font-bold uppercase tracking-luxe text-white/50">
                Results at a glance
              </p>
              {study.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="relative border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-[26px] font-semibold leading-none gilt">
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-white/55">{kpi.label}</p>
                </div>
              ))}
              <a
                href="/#contact"
                className="group relative mt-4 inline-flex items-center justify-between gap-3 rounded-full bg-brand px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-gold"
              >
                Work on campaigns like this
                <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </aside>
          </Reveal>
        </Container>
      </section>

      {/* Creative work for this account */}
      {study.gallery && study.gallery.length > 0 && (
        <CaseStudyGallery study={study} />
      )}

      {/* Prev / next */}
      <section className="border-t border-grey-200 bg-grey-50 py-14" aria-label="Case study navigation">
        <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="group flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-luxe text-grey-400">← Previous</span>
              <span className="font-display text-[20px] font-semibold text-ink transition-colors duration-500 group-hover:text-brand">
                {prev.company}
              </span>
            </Link>
          ) : (
            <span />
          )}

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-grey-200 bg-surface px-5 py-2.5 text-[14px] font-semibold text-ink transition-all duration-500 ease-luxe hover:border-brand hover:text-brand"
          >
            All case studies
          </Link>

          {next ? (
            <Link to={`/case-studies/${next.slug}`} className="group flex flex-col items-end gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-luxe text-grey-400">Next →</span>
              <span className="font-display text-[20px] font-semibold text-ink transition-colors duration-500 group-hover:text-brand">
                {next.company}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </Container>
      </section>
    </>
  );
}
