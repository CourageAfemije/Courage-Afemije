import { useState } from 'react';
import { Link } from 'react-router-dom';
import { creativeWork } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import Reveal from './Reveal.jsx';
import Lightbox from './Lightbox.jsx';
import useInView from '../hooks/useInView.js';

// Card treatment mirrors the reference: a soft panel with the clip inset on
// a 14px radius, brand label + serif title sitting underneath.
export function WorkCard({ item, onOpen }) {
  // The clip isn't requested at all until the card is scrolled into view —
  // a dozen autoplaying videos on first paint would sink the page.
  const [ref, inView] = useInView({ threshold: 0.35 });

  const ratioClass = item.ratio === 'landscape' ? 'aspect-video' : 'aspect-[4/5]';

  return (
    <div ref={ref} className="group flex flex-col">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Play ${item.format} for ${item.client}`}
        className={`relative ${ratioClass} w-full overflow-hidden rounded-[14px] bg-navy text-left ring-1 ring-grey-200/50 transition-all duration-700 ease-luxe hover:ring-brand/70`}
      >
        {inView && item.src && (
          <video
            src={item.src}
            muted
            playsInline
            autoPlay
            loop
            preload="none"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05]"
          />
        )}

        {/* Play chip, reference style */}
        <span className="absolute left-1/2 top-1/2 flex h-14 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand/90 opacity-0 backdrop-blur-sm transition-all duration-500 ease-luxe group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="translate-x-[1px] text-white">
            <polygon points="6 4 20 12 6 20" />
          </svg>
        </span>

        <span className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
          {item.category}
        </span>
      </button>

      <div className="flex items-start justify-between gap-4 px-1.5 pb-1 pt-4">
        <div>
          <p className="text-[13px] text-grey-500">{item.client}</p>
          <p className="mt-1 font-display text-[17px] leading-snug text-ink transition-colors duration-500 group-hover:text-lime">
            {item.format}
          </p>
          {item.desc && (
            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-grey-400">{item.desc}</p>
          )}
        </div>
        <span
          aria-hidden="true"
          className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-grey-100 text-grey-500 transition-all duration-500 ease-luxe group-hover:bg-brand group-hover:text-white"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="8 7 17 7 17 16" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/** Grid + its own lightbox state, shared by the homepage and the /work page. */
export function WorkGrid({ items, cols = 2 }) {
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;
  const active = isOpen ? items[index] : null;

  const close = () => setIndex(null);
  const step = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  const media = active
    ? {
        kind: 'video',
        src: active.src,
        title: active.format,
        subtitle: active.client,
        meta: active.desc || active.category,
      }
    : null;

  return (
    <>
      <div className={`grid gap-x-5 gap-y-10 sm:grid-cols-2 ${cols === 5 ? 'md:grid-cols-3 lg:grid-cols-5 lg:gap-y-12' : ''}`}>
        {items.map((item, i) => (
          <Reveal key={`${item.client}-${i}`} delay={(i % 2) * 100}>
            <WorkCard item={item} onOpen={() => setIndex(i)} />
          </Reveal>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          media={media}
          onClose={close}
          onPrev={items.length > 1 ? () => step(-1) : undefined}
          onNext={items.length > 1 ? () => step(1) : undefined}
        />
      )}
    </>
  );
}

export default function CreativeWork() {
  // Five portrait cuts, all the same ratio, so the row sits perfectly aligned.
  const featured = creativeWork.filter((item) => item.featured).slice(0, 5);

  return (
    <section id="work" className="bg-grey-100 py-24 md:py-28" aria-label="Performance creative work">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionIntro
            kicker="Work"
            heading="Performance creative work"
            sub="Hook-first edits for paid social. Click any tile to play it full screen."
          />
        </Reveal>

        <div className="w-full">
          <WorkGrid items={featured} cols={5} />
        </div>

        <Reveal>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[15px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold"
          >
            See all my work
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
