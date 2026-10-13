import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { services } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';

/**
 * Services as a carousel of slides sitting side by side. On desktop the
 * section pins in place and the row glides left as you scroll down — once
 * the last card is in view the pin releases and the page moves on to the
 * next section. On small screens (or reduced motion) it degrades to a
 * native horizontal scroll-snap row.
 */
export default function Services() {
  const outerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [pinned, setPinned] = useState(false);
  const [space, setSpace] = useState(0); // extra scroll length drives the slide
  const [progress, setProgress] = useState(0);

  // Travel distance: from the last card's right edge to the viewport's
  // right edge. The <ul> box itself is clamped to the container width (the
  // cards overflow it), so measure the final <li>, not the track's rect.
  const travel = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const last = track?.lastElementChild;
    if (!viewport || !track || !last) return 0;
    // Measure untransformed: the track may already be slid mid-scroll.
    const previous = track.style.transform;
    track.style.transform = 'none';
    const vRect = viewport.getBoundingClientRect();
    const end = last.getBoundingClientRect().right;
    track.style.transform = previous;
    return Math.max(end - (vRect.right + 16), 0);
  };

  // Decide which mode to run in, and measure how far the track must travel.
  useLayoutEffect(() => {
    const measure = () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const enable = window.innerWidth >= 1024 && !reduce && trackRef.current && viewportRef.current;
      setPinned(Boolean(enable));
      if (enable) {
        setSpace(travel());
      } else {
        setSpace(0);
        setProgress(0);
        if (trackRef.current) trackRef.current.style.transform = 'none';
      }
    };

    measure();
    window.addEventListener('resize', measure);
    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : undefined;
    if (observer && trackRef.current) observer.observe(trackRef.current);
    return () => {
      window.removeEventListener('resize', measure);
      observer?.disconnect();
    };
  }, []);

  // While pinned, map vertical scroll position to horizontal travel.
  useEffect(() => {
    if (!pinned) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const outer = outerRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!outer || !viewport || !track) return;

      const total = outer.offsetHeight - viewport.offsetHeight;
      if (total <= 0) return;
      const passed = Math.min(Math.max(-outer.getBoundingClientRect().top, 0), total);
      const p = passed / total;
      const dist = travel();
      setProgress(p);
      track.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned, space]);

  // Fallback mode: the rail tracks the native horizontal scroll instead.
  const onFallbackScroll = (e) => {
    if (pinned) return;
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section id="services" className="bg-grey-100" aria-label="Services">
      {/* Heading lives in normal flow — it scrolls in once and can never be
          cropped by the pinned strip below it. */}
      <Container className="py-20 pb-14 md:pt-24 md:pb-16">
        <SectionIntro
          kicker="Services"
          heading="What I do best"
          sub="Four ways I help brands: the strategy, the creative, and the numbers that connect them."
        />
      </Container>

      <div
        ref={outerRef}
        className={pinned ? undefined : 'pb-24 md:pb-28'}
        style={pinned ? { height: `calc(100vh + ${space}px)` } : undefined}
      >
        <div
          ref={viewportRef}
          className={
            pinned
              ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden'
              : undefined
          }
        >
          <Container className="flex flex-col gap-8">

            {/* Track: pinned = transformed row; fallback = native snap scroll */}
            <div
              className={
                pinned
                  ? 'overflow-visible'
                  : 'no-scrollbar -mx-6 snap-x snap-mandatory overflow-x-auto px-6 pb-2 lg:mx-0 lg:overflow-visible lg:px-0'
              }
              onScroll={onFallbackScroll}
            >
              <ul
                ref={trackRef}
                className="flex gap-6 will-change-transform lg:gap-8"
              >
                {services.map((s) => (
                  <li
                    key={s.number}
                    className={
                      pinned
                        ? 'w-[min(82vw,620px)] shrink-0 lg:w-[min(50vw,580px)]'
                        : 'w-[min(82vw,540px)] shrink-0 snap-center'
                    }
                  >
                    <ServiceCard service={s} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll progress rail */}
            <div className="flex items-center justify-between gap-6">
              <div
                className="relative h-[3px] w-40 overflow-hidden rounded-full bg-grey-200"
                aria-hidden="true"
              >
                <span
                  className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand transition-transform duration-150 ease-out"
                  style={{ transform: `translateX(${progress * 190}%)` }}
                />
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-[15px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold"
              >
                Hire me
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

// One slide: tall card, image on top, serif title, muted description,
// and feature pills with an orange dot each.
function ServiceCard({ service: s }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-surface p-3 ring-1 ring-grey-200/50 transition-all duration-700 ease-luxe hover:ring-brand/60">
      {s.img && (
        <div className="relative h-[26vh] max-h-[240px] min-h-[130px] w-full overflow-hidden rounded-[22px] bg-grey-100">
          <img
            src={s.img}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.05]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-5 px-6 pb-6 pt-7 md:px-8">
        <div>
          <p className="text-[13px] font-medium text-brand">{s.number}</p>
          <h3 className="mt-2 font-display text-[22px] leading-snug text-ink">
            {s.title}{' '}
            {s.sub && <span className="text-grey-500">{s.sub}</span>}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-grey-500">{s.desc}</p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2.5">
          {s.tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center gap-2.5 rounded-full bg-grey-100 py-1.5 pl-3 pr-4 text-[13px] font-medium text-ink"
            >
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
