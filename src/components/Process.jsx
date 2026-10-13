import { process } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';

// Reference treatment: centered intro, then a vertical list of steps, each
// led by an orange square number badge.
export default function Process() {
  return (
    <section id="process" className="bg-surface py-24 md:py-28" aria-label="How I work">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro
            kicker="The process"
            heading="How We'll Work Together"
            sub="A simple, transparent process. From brief to scaled results, with the media plan and the creative built side by side."
          />
        </Reveal>

        <ol className="flex w-full max-w-3xl flex-col gap-3">
          {process.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 80}
              className="group flex items-center gap-5 rounded-[20px] p-4 transition-colors duration-500 ease-luxe hover:bg-grey-100 md:gap-7 md:p-5"
            >
              <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-brand font-display text-[24px] text-white transition-transform duration-500 ease-luxe group-hover:scale-105">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-[21px] leading-snug text-ink md:text-[23px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-grey-500">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
