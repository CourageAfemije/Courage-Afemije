/**
 * Section header in the reference's pattern: a small orange-dot eyebrow
 * label above a big centered Lora heading, optional muted sub-line.
 */
export default function SectionIntro({
  kicker,
  heading,
  sub,
  dark = false,
  align = 'center',
}) {
  const alignClass =
    align === 'left' ? 'items-start text-left mx-0' : 'items-center text-center mx-auto';

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass}`}>
      {kicker && (
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
          <span
            className={`text-[14px] font-medium ${
              dark ? 'text-white/60' : 'text-grey-500'
            }`}
          >
            {kicker}
          </span>
        </div>
      )}
      <h2
        className={`text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {heading}
      </h2>
      {sub && (
        <p className={`max-w-xl text-[16px] leading-relaxed ${dark ? 'text-white/65' : 'text-grey-500'}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
