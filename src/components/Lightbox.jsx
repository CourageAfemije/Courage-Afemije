import { useEffect } from 'react';

/**
 * Full-screen media popup used by the creative work galleries.
 * Closes on Escape or backdrop click, steps with the arrow keys,
 * and locks body scroll while open.
 */
export default function Lightbox({ media, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!media) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [media, onClose, onPrev, onNext]);

  if (!media) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={media.title || 'Media preview'}
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-navy/85 p-4 backdrop-blur-xl sm:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 ease-luxe hover:rotate-90 hover:border-brand hover:text-brand sm:right-6 sm:top-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 ease-luxe hover:-translate-x-1 hover:border-brand hover:text-brand sm:flex sm:left-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 ease-luxe hover:translate-x-1 hover:border-brand hover:text-brand sm:flex sm:right-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      <figure
        key={media.src}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-4xl animate-scale-in flex-col gap-5"
      >
        <div className="overflow-hidden rounded-[28px] bg-black/70 shadow-luxe-xl ring-1 ring-white/10">
          {media.kind === 'image' ? (
            <img
              src={media.src}
              alt={media.alt || media.title || ''}
              className="mx-auto max-h-[72vh] w-full object-contain"
            />
          ) : (
            <video
              src={media.src}
              poster={media.poster}
              controls
              autoPlay
              playsInline
              loop
              className="mx-auto max-h-[72vh] w-full bg-black object-contain"
            />
          )}
        </div>

        <figcaption className="flex flex-col items-center gap-1.5 text-center">
          {media.meta && (
            <p className="text-[11px] font-bold uppercase tracking-luxe text-brand">{media.meta}</p>
          )}
          <p className="font-display text-[22px] font-semibold text-white">{media.title}</p>
          {media.subtitle && <p className="text-[14px] text-white/55">{media.subtitle}</p>}
        </figcaption>
      </figure>
    </div>
  );
}
