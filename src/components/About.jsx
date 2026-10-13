import { profile } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

// Reference intro: a dot eyebrow, then the first-person pitch set large in
// the serif, with the headshot tucked alongside.
export default function About() {
  return (
    <section id="about" className="bg-grey-100 py-24 md:py-28" aria-label="About me">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal variant="zoom" className="relative mx-auto w-full max-w-[20rem] lg:max-w-none">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-surface ring-1 ring-grey-200/50">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-brand px-5 py-2.5 text-white shadow-luxe-lg">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
            <p className="text-[13px] font-medium whitespace-nowrap">6+ years of experience</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionIntro
              kicker="Hey, just an intro"
              heading={profile.aboutHeading}
              align="left"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-2xl font-display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.5] text-ink">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[15px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold"
            >
              Hire me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
