/**
 * Company mark used in project lists and case-study heroes. When a case
 * study has a real `logo` (cropped brand asset) it renders as an app-icon
 * tile on the logo's own background colour; otherwise it falls back to the
 * coloured initials badge.
 */
export default function CompanyBadge({ study, className = '' }) {
  if (study.logo) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden shadow-luxe transition-transform duration-500 ease-luxe group-hover:scale-105 group-hover:rotate-1 ${className}`}
        style={{ backgroundColor: study.logoBg || study.color }}
        aria-hidden="true"
      >
        <img
          src={study.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center font-display font-semibold text-white transition-transform duration-500 ease-luxe group-hover:scale-105 group-hover:rotate-3 ${className}`}
      style={{ backgroundColor: study.color }}
      aria-hidden="true"
    >
      {study.company.slice(0, 2).toUpperCase()}
    </span>
  );
}
