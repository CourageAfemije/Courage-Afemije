import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Services', hash: '#services' },
];

const linkClass =
  'text-[15px] font-medium text-grey-500 transition-colors duration-300 hover:text-ink';

// Reference nav: a rounded floating bar — wordmark left, links center,
// orange "Hire me" pill right. Kept sticky for usability on long pages.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  const hrefFor = (hash) => (onHome ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 pt-3 md:pt-4">
      <Container>
        <nav
          aria-label="Primary"
          className={`flex h-16 items-center justify-between rounded-[20px] px-5 transition-all duration-500 ease-luxe md:px-6 ${
            scrolled
              ? 'glass shadow-luxe ring-1 ring-grey-200/50'
              : 'bg-grey-100/80 ring-1 ring-grey-200/30'
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[16px] font-semibold tracking-tight text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Courage Afemije
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a key={l.label} href={hrefFor(l.hash)} className={linkClass}>
                {l.label}
              </a>
            ))}
            <Link to="/work" className={linkClass}>
              All Work
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={hrefFor('#contact')}
              className="hidden rounded-full bg-brand px-6 py-2.5 text-[14px] font-medium text-white transition-all duration-500 ease-luxe hover:bg-brand-dark hover:shadow-gold lg:inline-flex"
            >
              Hire me
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`h-[2px] w-6 bg-ink transition-all duration-400 ease-luxe ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-ink transition-all duration-400 ease-luxe ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-ink transition-all duration-400 ease-luxe ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`absolute inset-x-6 top-[72px] origin-top rounded-[20px] border border-grey-200/50 bg-surface px-6 shadow-luxe-lg transition-all duration-500 ease-luxe lg:hidden ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-5">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={hrefFor(l.hash)}
                onClick={() => setOpen(false)}
                className={`border-b border-grey-200/50 py-3.5 text-[16px] font-medium text-ink transition-all duration-500 ease-luxe hover:pl-2 hover:text-lime ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/work"
              onClick={() => setOpen(false)}
              className={`border-b border-grey-200/50 py-3.5 text-[16px] font-medium text-ink transition-all duration-500 ease-luxe hover:pl-2 hover:text-lime ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: open ? '300ms' : '0ms' }}
            >
              All Work
            </Link>
            <a
              href={hrefFor('#contact')}
              onClick={() => setOpen(false)}
              className={`mt-5 rounded-full bg-brand px-6 py-3.5 text-center text-[15px] font-medium text-white transition-all duration-500 ease-luxe ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: open ? '360ms' : '0ms' }}
            >
              Hire me
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
