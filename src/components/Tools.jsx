import { toolkit } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

export default function Tools() {
  return (
    <section id="tools" className="bg-surface py-28 md:py-36" aria-label="Tools I use">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionIntro
            kicker="My toolkit"
            heading="Tools I work with"
            sub="From strategy to execution: the platforms I run daily to deliver results."
          />
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 90} className="flex flex-col gap-5">
              <h3 className="flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-luxe text-grey-500">
                <span className="font-display text-[14px] font-semibold normal-case tracking-normal text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {cat.category}
              </h3>
              <div className="rule-fade" aria-hidden="true" />
              <ul className="flex flex-wrap gap-2">
                {cat.tools.map((t) => (
                  <li
                    key={t}
                    className="cursor-default rounded-full border border-grey-200 bg-grey-50 px-3.5 py-1.5 text-[13px] font-semibold text-grey-500 transition-all duration-500 ease-luxe hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand-50 hover:text-brand"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
