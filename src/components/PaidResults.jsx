import { paidResults } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

// The PRD's second gallery — paid-media results as stat cards, same panel
// language as the reference's cards. Dashboard screenshots can replace these
// later; the copy stays anonymized to category labels either way.
export default function PaidResults() {
  return (
    <section id="results" className="bg-surface py-24 md:py-28" aria-label="Paid media results">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro
            kicker="Paid media results"
            heading="Numbers that back up the creative"
            sub="Managed-spend results across accounts, the strategist half of the skillset."
          />
        </Reveal>

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paidResults.map((r, i) => (
            <Reveal key={r.client} delay={i * 110}>
              <article className="group flex h-full flex-col justify-between gap-10 rounded-[20px] bg-grey-100 p-8 ring-1 ring-grey-200/40 transition-all duration-700 ease-luxe hover:-translate-y-1.5 hover:ring-brand/60 md:p-10">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-grey-500">
                    {r.category}
                  </p>
                  <p className="mt-6 font-display text-[clamp(2.4rem,4.6vw,3.2rem)] leading-none text-lime">
                    {r.headline}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-grey-500">{r.label}</p>
                </div>

                <div className="flex items-center gap-3 border-t border-grey-200/60 pt-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-[11px] font-semibold text-lime ring-1 ring-brand/40">
                    {r.client.slice(0, 1)}
                  </span>
                  <p className="text-[14px] font-medium text-ink">{r.client}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="max-w-md text-center text-[13px] text-grey-400">
            Client names anonymized to category labels. Account details redacted from all
            public reporting.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
