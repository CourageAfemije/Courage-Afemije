import { stats } from '../data/siteData.js';
import Container from './Container.jsx';
import Reveal from './Reveal.jsx';

// Reference stats row: a plain 2×2 grid of oversized serif numbers with
// small uppercase labels — no chrome, the type does the work.
export default function Stats() {
  return (
    <section className="bg-surface py-20 md:py-24" aria-label="Key statistics">
      <Container>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-8 gap-y-14 text-center sm:gap-x-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="flex flex-col gap-3">
              <p className="font-display text-[clamp(2.6rem,5.4vw,3.6rem)] leading-none text-ink">
                {s.value}
              </p>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-grey-500">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
