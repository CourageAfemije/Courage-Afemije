import { Link } from 'react-router-dom';
import { useState } from 'react';
import { creativeWork, staticAds, caseStudies } from '../data/siteData.js';
import Container from '../components/Container.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { WorkGrid } from '../components/CreativeWork.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Experience from '../components/Experience.jsx';
import Certifications from '../components/Certifications.jsx';

// The "all work" page — everything the clean, reference-mirroring homepage
// leaves off: the full creative video gallery, work history, the case-study
// list (each links to its /case-studies/:slug detail page), and certifications.
export default function AllWork() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32" aria-label="All work hero">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand-50 opacity-80 blur-[110px]"
        />
        <Container className="relative flex flex-col gap-7">
          <Link
            to="/"
            className="group flex w-fit items-center gap-2 text-[13px] font-bold uppercase tracking-luxe text-grey-500 transition-colors duration-500 hover:text-brand"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:-translate-x-1">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to portfolio
          </Link>

          <Reveal>
            <SectionIntro
              kicker="All work"
              heading="Creative, campaigns, and the numbers behind them"
              sub="The full gallery: ad creative across categories, the accounts I've grown, and the paid-media results that backed both."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-28" aria-label="Creative work gallery">
        <Container>
          <WorkGrid items={creativeWork} />
        </Container>
      </section>

      <StaticAds />

      <Experience />

      <section className="py-28" aria-label="Case studies">
        <Container className="flex flex-col gap-14">
          <Reveal>
            <SectionIntro
              kicker="Case studies"
              heading="Performance marketing & growth results"
              sub="Real campaigns and the strategy behind them. Open any account for the full breakdown."
            />
          </Reveal>

          <div className="flex flex-col divide-y divide-grey-200">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={Math.min(i * 60, 240)}>
                <ProjectCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Certifications />
    </>
  );
}

// Feed-ready statics in mixed ratios — a loose masonry column layout keeps
// the 9:16 / 4:5 / 1:1 set tidy without cropping any of the designs.
function StaticAds() {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;

  return (
    <section className="pb-28" aria-label="Static ad creative">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro
            kicker="Static creative"
            heading="Feed-ready statics"
            sub="Scroll-stopping stills for Meta feed, Stories, and Demand Gen, in every aspect ratio."
          />
        </Reveal>

        <div className="flex w-full flex-wrap items-start justify-center gap-4">
          {staticAds.map((ad, i) => (
            <Reveal key={ad.src} delay={(i % 4) * 80} className="flex-1 basis-[44%] sm:basis-[30%] lg:basis-[22%]">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View ${ad.label}`}
                className="group block w-full overflow-hidden rounded-[14px] bg-grey-100 ring-1 ring-grey-200/50 transition-all duration-700 ease-luxe hover:ring-brand/60"
              >
                <img
                  src={ad.src}
                  alt={ad.label}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.04]"
                />
              </button>
              <p className="px-1.5 pb-1 pt-3 text-[12px] text-grey-500">{ad.label}</p>
            </Reveal>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            media={{
              kind: 'image',
              src: staticAds[index].src,
              alt: staticAds[index].label,
              title: staticAds[index].label.split(' · ')[1] || 'Static ad',
              subtitle: staticAds[index].label.split(' · ')[0],
              meta: `${staticAds[index].ratio} feed-ready`,
            }}
            onClose={() => setIndex(null)}
            onPrev={() => setIndex((i) => (i - 1 + staticAds.length) % staticAds.length)}
            onNext={() => setIndex((i) => (i + 1) % staticAds.length)}
          />
        )}
      </Container>
    </section>
  );
}
