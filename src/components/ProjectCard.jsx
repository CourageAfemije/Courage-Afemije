import { Link } from 'react-router-dom';
import CompanyBadge from './CompanyBadge.jsx';

export default function ProjectCard({ study }) {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group relative flex flex-col gap-6 py-9 transition-all duration-700 ease-luxe hover:bg-grey-50/70 md:flex-row md:items-center md:justify-between md:px-5 md:hover:px-7"
    >
      {/* Accent rail that fills in on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-brand transition-all duration-700 ease-luxe group-hover:h-2/3"
      />

      <div className="flex items-start gap-5">
        <CompanyBadge
          study={study}
          className={`rounded-[16px] ${study.logo ? 'h-12 w-[84px]' : 'h-12 w-12 text-[15px]'}`}
        />
        <div>
          <h3 className="font-display text-[21px] font-semibold text-ink transition-colors duration-500 group-hover:text-brand">
            {study.company}
          </h3>
          <p className="mt-1 text-[12px] font-bold uppercase tracking-luxe text-grey-400">
            {study.role} · {study.industry}
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-grey-500">{study.summary}</p>
        </div>
      </div>

      <span className="flex shrink-0 items-center gap-2.5 self-start text-[15px] font-semibold text-ink transition-colors duration-500 group-hover:text-brand md:self-center">
        View case study
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-grey-200 transition-all duration-500 ease-luxe group-hover:border-brand group-hover:bg-brand group-hover:text-white">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
