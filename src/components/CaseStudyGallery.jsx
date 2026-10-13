import { useState } from 'react';
import Container from './Container.jsx';
import Reveal from './Reveal.jsx';
import Lightbox from './Lightbox.jsx';

const ratioClass = {
  square: 'aspect-square',
  portrait: 'aspect-[9/16]',
  landscape: 'aspect-video',
};

/**
 * Creative work gallery on the case-study pages — the real ads produced for
 * the account (video cuts and statics). Tiles open in the shared Lightbox.
 */
export default function CaseStudyGallery({ study }) {
  const items = study.gallery || [];
  const [index, setIndex] = useState(null);
  const isOpen = index !== null;
  const active = isOpen ? items[index] : null;

  const close = () => setIndex(null);
  const step = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  const media = active
    ? {
        kind: active.kind,
        src: active.src,
        title: active.label,
        subtitle: study.company,
        meta: active.kind === 'video' ? 'Video ad' : 'Static ad',
        alt: `${study.company}: ${active.label}`,
      }
    : null;

  if (!items.length) return null;

  return (
    <section className="border-t border-grey-200 bg-grey-100 py-20 md:py-24" aria-label={`${study.company} creative work`}>
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              <p className="text-[13px] font-medium text-grey-500">Creative work</p>
            </div>
            <h2 className="max-w-2xl text-[clamp(1.7rem,3.4vw,2.4rem)] text-ink">
              Ads that ran for {study.company}
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-grey-500">
              The video cuts and statics behind the numbers. Click any piece to view it full screen.
            </p>
          </div>
        </Reveal>

        {/* Masonry columns keep the mixed video/static ratios (9:16, 1:1,
            16:9) packed tightly in tidy columns instead of ragged grid rows. */}
        <div className="columns-2 gap-4 md:columns-3 md:gap-5">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 80} className="mb-4 break-inside-avoid md:mb-5">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open ${item.label}`}
                className={`group relative w-full overflow-hidden rounded-[14px] bg-navy text-left ring-1 ring-grey-200/50 transition-all duration-700 ease-luxe hover:ring-brand/70 ${ratioClass[item.ratio] || 'aspect-square'}`}
              >
                {item.kind === 'video' ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05]"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${study.company}: ${item.label}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05]"
                  />
                )}

                {/* Play chip on video tiles */}
                {item.kind === 'video' && (
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand/90 opacity-0 backdrop-blur-sm transition-all duration-500 ease-luxe group-hover:opacity-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="translate-x-[1px] text-white">
                      <polygon points="6 4 20 12 6 20" />
                    </svg>
                  </span>
                )}

                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-2.5 pt-8 text-[11px] font-medium text-white/90">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {isOpen && (
        <Lightbox
          media={media}
          onClose={close}
          onPrev={items.length > 1 ? () => step(-1) : undefined}
          onNext={items.length > 1 ? () => step(1) : undefined}
        />
      )}
    </section>
  );
}
