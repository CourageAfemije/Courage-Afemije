import { useCallback, useEffect, useRef, useState } from 'react';
import { heroReel } from '../data/siteData.js';

// The hero reel as a phone-frame coverflow: the active phone pops forward
// full size, sharp, lifted while its neighbours sink back into a smaller,
// blurred, dimmed row. The reel drives itself endlessly: it auto-advances
// every AUTO_MS onto a duplicated set of clips, then silently shifts the
// scroll position back one set width, so the loop never rewinds or stops.
// Hovering no longer pauses it (only a touch drag does).
const AUTO_MS = 2200;
const N = heroReel.length;
// Two identical sets make the wrap-around seamless.
const LOOPED = [...heroReel, ...heroReel];

// Center-most card: scale 1.06, lifted, crisp. Edges: smaller, lower, blurred.
const styleFor = (t) => ({
  transform: `translateY(${-18 * (1 - t)}px) scale(${1.06 - 0.2 * t})`,
  filter: `blur(${5.5 * t}px)`,
  opacity: 1 - 0.55 * t,
  zIndex: Math.round(100 - t * 100),
});

export default function HeroVideoCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const indexRef = useRef(0);
  const rafRef = useRef(0);
  const reconcileRef = useRef(0);

  // When a clip from the duplicate set sits in the middle and scrolling has
  // settled, jump back one set width. The content is identical, so the shift
  // is invisible and the reel can keep marching forward forever.
  const reconcile = useCallback(() => {
    const track = trackRef.current;
    const items = track?.children;
    if (!track || !items[N]) return;
    const setWidth = items[N].offsetLeft - items[0].offsetLeft;
    if (indexRef.current >= N && track.scrollLeft >= setWidth) {
      // 'instant' overrides the track's CSS scroll-behavior: smooth so the
      // shift can't be seen.
      track.scrollTo({ left: track.scrollLeft - setWidth, behavior: 'instant' });
    }
  }, []);

  // Position every phone relative to the track's center.
  const decorate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const items = track.children;
    const focusSpan = Math.max(items[0]?.offsetWidth ?? 220, 1) * 1.35;

    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < items.length; i += 1) {
      const frame = items[i].firstElementChild;
      if (!frame) continue;
      const r = items[i].getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      const t = Math.min(dist / focusSpan, 1);
      Object.assign(frame.style, styleFor(t));
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    }
    indexRef.current = best;
    setActive((prev) => (prev === best % N ? prev : best % N));

    // Debounce: reconcile only once scrolling has been idle for a beat, never
    // mid-glide, so the seamless shift can't interrupt the smooth animation.
    window.clearTimeout(reconcileRef.current);
    if (best >= N) reconcileRef.current = window.setTimeout(reconcile, 380);
  }, [reconcile]);

  const scheduleDecorate = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = 0;
      decorate();
    });
  }, [decorate]);

  useEffect(() => {
    decorate();
    window.addEventListener('resize', decorate);
    return () => {
      window.removeEventListener('resize', decorate);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.clearTimeout(reconcileRef.current);
    };
  }, [decorate]);

  // Bring a given clip to dead center of the row. Indices inside the two-set
  // range glide step-by-step (so 5 -> 6 is a seamless forward move onto the
  // duplicate set); anything outside it wraps back into the first set.
  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children;
    if (!items.length) return;
    let physical = i;
    if (physical < 0 || physical >= items.length) {
      physical = ((i % N) + N) % N;
    }
    const item = items[physical];
    const left =
      item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2 + track.clientLeft;
    track.scrollTo({ left: Math.max(left, 0), behavior: 'smooth' });
  };

  const goTo = (dir) => scrollToIndex(indexRef.current + dir);

  // Auto-advance, forever. Only a touch drag pauses it briefly.
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = window.setInterval(() => goTo(1), AUTO_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <div
      className="group/reel relative mt-10"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
      aria-label="Selected ad video work"
    >
      {/* Warm glow pooling under the row of phones */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[20%] bottom-4 h-28 rounded-full bg-brand opacity-25 blur-[80px]"
      />

      <ul
        ref={trackRef}
        onScroll={scheduleDecorate}
        className="no-scrollbar relative flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth px-[max(0px,calc(50%-112px))] pb-6 pt-9 md:gap-9 md:px-[max(0px,calc(50%-134px))]"
      >
        {LOOPED.map((clip, i) => (
          <li
            key={`${clip.src}-${i}`}
            className="w-[224px] shrink-0 snap-center md:w-[268px]"
          >
            {/* Phone body — the coverflow transform lands on this wrapper */}
            <div
              className="relative aspect-[9/19.5] rounded-[36px] bg-gradient-to-b from-grey-400/80 via-grey-200 to-grey-400/50 p-[3px] shadow-luxe transition-[transform,filter,opacity] duration-500 ease-luxe will-change-transform"
            >
              <div className="flex h-full w-full flex-col rounded-[33px] bg-grey-800/90 p-2">
                {/* Speaker bar + camera dot */}
                <div className="relative flex h-7 items-center justify-center">
                  <span className="h-[5px] w-14 rounded-full bg-black/80" aria-hidden="true" />
                  <span className="absolute right-7 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-black/80 ring-1 ring-white/10" aria-hidden="true" />
                </div>

                {/* Screen */}
                <div className="relative flex-1 overflow-hidden rounded-[24px] bg-black">
                  <video
                    src={clip.src}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Glass reflection sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/14 via-transparent to-transparent"
                  />
                  {clip.label && (
                    <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-9 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/90">
                      {clip.label}
                    </p>
                  )}
                </div>

                {/* Home indicator */}
                <div className="flex h-5 items-center justify-center">
                  <span className="h-[4px] w-16 rounded-full bg-white/35" aria-hidden="true" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Prev / next — orange square buttons */}
      <button
        onClick={() => goTo(-1)}
        aria-label="Previous clips"
        className="absolute left-1 top-1/2 z-[120] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-brand text-white shadow-luxe transition-all duration-500 ease-luxe hover:bg-brand-dark md:left-2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => goTo(1)}
        aria-label="Next clips"
        className="absolute right-1 top-1/2 z-[120] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-brand text-white shadow-luxe transition-all duration-500 ease-luxe hover:bg-brand-dark md:right-2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot rail under the reel */}
      <Dock dots={heroReel.length} active={active} onSelect={scrollToIndex} />
    </div>
  );
}

// Tiny clickable rail showing which phone is in focus.
function Dock({ dots, active, onSelect }) {
  return (
    <div className="mt-1 flex items-center justify-center gap-2" aria-hidden="false">
      {Array.from({ length: dots }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Go to clip ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-500 ease-luxe ${
            i === active ? 'w-7 bg-brand' : 'w-1.5 bg-grey-400/60 hover:bg-grey-500'
          }`}
        />
      ))}
    </div>
  );
}
