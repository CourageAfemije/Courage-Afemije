import { Link } from 'react-router-dom';
import { profile } from '../data/siteData.js';
import Container from './Container.jsx';
import Reveal from './Reveal.jsx';

const socialIcons = {
  twitter: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  whatsapp: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  ),
};

const explore = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Services', hash: '#services' },
  { label: 'Contact', hash: '#contact' },
];

const pages = [
  { label: 'All work', to: '/work' },
  { label: 'Case studies', to: '/case-studies' },
];

// Reference footer: one oversized statement line, then a compact grid of
// link columns — logo, quick links, reach out, socials.
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="flex flex-col gap-16 pb-10 pt-20 md:pt-24">
        <Reveal>
          <p className="max-w-4xl font-display text-[clamp(2rem,5.4vw,3.6rem)] leading-[1.12] tracking-tight text-white">
            Strategy that spends smart.{' '}
            <span className="text-grey-500">Creative that stops the scroll.</span>
          </p>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="group flex items-center gap-2.5 text-[16px] font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand transition-transform duration-500 ease-luxe group-hover:rotate-[8deg]">
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
              {profile.name}
            </Link>
            <p className="max-w-[16rem] text-[13px] leading-relaxed text-white/50">
              {profile.role}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-medium text-grey-500">Quick Links</p>
            {explore.map((l) => (
              <a
                key={l.hash}
                href={`/${l.hash}`}
                className="w-fit text-[15px] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            {pages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="w-fit text-[15px] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {p.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-medium text-grey-500">Reach Out</p>
            <a
              href={`mailto:${profile.email}`}
              className="w-fit text-[15px] text-white/75 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
            >
              {profile.email}
            </a>
            {profile.whatsapp && (
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[15px] text-white/75 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
              >
                WhatsApp
              </a>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-medium text-grey-500">My Socials</p>
            <div className="flex flex-wrap items-center gap-3">
              {Object.entries(profile.socials).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/75 ring-1 ring-white/15 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:bg-brand hover:text-white"
                >
                  {socialIcons[key]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/50 transition-colors duration-300 hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-white/15 transition-all duration-500 ease-luxe group-hover:-translate-y-1 group-hover:bg-brand group-hover:ring-brand">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
