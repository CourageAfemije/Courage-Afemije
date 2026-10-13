import { whyMe } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

// Reference "Why me?" band: three cards side by side — an orange stat card,
// a positioning card, and the practical badges.
export default function WhyMe() {
  // Pull the leading numeral out of the headline for the orange stat card.
  const match = whyMe.headline.match(/^(\d+)\s+([\s\S]*)$/);
  const figure = match ? match[1] : '9';
  const phrase = match ? match[2] : whyMe.headline;

  return (
    <section className="bg-grey-100 py-24 md:py-28" aria-label="Why work with me">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro
            kicker="Why me?"
            heading="Media buying and creative, under one roof"
            sub="Most teams hand off between the buyer and the editor. Nothing gets lost in translation when they're the same person."
          />
        </Reveal>

        <div className="grid w-full gap-5 md:grid-cols-3">
          {/* Orange stat card */}
          <Reveal variant="zoom">
            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[20px] bg-brand p-8 text-white md:p-10">
              <p className="font-display text-[clamp(4.5rem,9vw,6.5rem)] leading-none">{figure}+</p>
              <p className="text-[17px] leading-snug text-white/90">
                {phrase.replace(/,.*$/, '')}
              </p>
            </div>
          </Reveal>

          {/* Positioning card */}
          <Reveal variant="zoom" delay={100}>
            <div className="flex h-full min-h-[300px] flex-col justify-center gap-4 rounded-[20px] bg-surface p-8 ring-1 ring-grey-200/50 md:p-10">
              <p className="font-display text-[24px] leading-snug text-ink">
                Across beauty, food, apparel, faith &amp; sports.
              </p>
              <p className="text-[14px] leading-relaxed text-grey-500">
                Agency and in-house: strategy decks and final-cut files, dashboards and
                storyboards. One person owning both halves of the growth function.
              </p>
            </div>
          </Reveal>

          {/* Badges card */}
          <Reveal variant="zoom" delay={200}>
            <div className="flex h-full min-h-[300px] flex-col justify-center gap-6 rounded-[20px] bg-surface p-8 ring-1 ring-grey-200/50 md:p-10">
              {whyMe.badges.map((b) => (
                <div key={b.title} className="flex flex-col gap-1 border-b border-grey-200/60 pb-5 last:border-0 last:pb-0">
                  <p className="flex items-center gap-2.5 text-[15px] font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    {b.title}
                  </p>
                  <p className="pl-[18px] text-[13px] leading-relaxed text-grey-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
