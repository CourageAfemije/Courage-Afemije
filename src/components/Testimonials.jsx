import { testimonials } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

// Reference layout: a simple grid of quote cards — no carousel, all visible.
export default function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-28" aria-label="Client testimonials">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro kicker="Testimonials and results" heading="Work That Speaks" />
        </Reveal>

        <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col gap-8 rounded-[18px] bg-grey-100 p-8 ring-1 ring-grey-200/40 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:ring-brand/50 md:p-9">
                <p
                  className="text-[12px] tracking-[0.3em] text-brand"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {'★'.repeat(t.rating)}
                  <span className="text-grey-200">{'★'.repeat(5 - t.rating)}</span>
                </p>

                <blockquote className="flex-1 text-[14px] leading-relaxed text-grey-500">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-3.5 border-t border-grey-200/60 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/15 text-[13px] font-semibold text-lime ring-1 ring-brand/40">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-display text-[17px] text-ink">{t.name}</p>
                    <p className="text-[13px] text-grey-500">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
