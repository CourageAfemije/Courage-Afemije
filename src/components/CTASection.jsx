import { profile } from '../data/siteData.js';
import Container from './Container.jsx';

export default function CTASection() {
  return (
    <section className="py-24" aria-label="Start your journey">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-[28px] bg-navy px-8 py-14 md:flex-row md:items-center md:justify-between md:px-16">
          <h2 className="max-w-lg text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold leading-[1.12] tracking-tightest text-white">
            Let&rsquo;s build your next growth chapter together
          </h2>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#0D1117]transition-colors hover:bg-brand hover:text-white"
          >
            Start a conversation
          </a>
        </div>
      </Container>
    </section>
  );
}
