import { profile } from '../data/siteData.js';
import Container from './Container.jsx';
import HeroVideoCarousel from './HeroVideoCarousel.jsx';
import Reveal from './Reveal.jsx';

// Centered serif headline, muted subhead, one orange pill CTA, then the
// phone-frame reel of looping portrait clips.
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden py-20 md:py-24"
      aria-label="Hero"
    >
      {/* Faint warm bloom behind the headline so the dark canvas isn't flat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand opacity-[0.14] blur-[130px]"
      />

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <Reveal>
          <h1 className="mx-auto max-w-4xl text-[clamp(2.4rem,5.6vw,4.2rem)] leading-[1.05] text-ink">
            {profile.heroLine1}{' '}
            <span className="text-grey-500">{profile.heroLine2}</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-grey-500 md:text-[17px]">
            {profile.heroSubhead}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[16px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold"
          >
            View my work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </Reveal>

        <Reveal variant="zoom" delay={300} className="w-full">
          <HeroVideoCarousel />
        </Reveal>
      </Container>
    </section>
  );
}
