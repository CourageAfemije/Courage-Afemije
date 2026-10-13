import { experience } from '../data/siteData.js';
import Container from './Container.jsx';

export default function LogosMarquee() {
  const names = experience.map((e) => e.company);
  const track = [...names, ...names];

  return (
    <section className="border-y border-grey-200 py-10" aria-label="Brands worked with">
      <Container>
        <p className="mb-6 text-center text-[14px] font-semibold text-grey-400">Brands I&rsquo;ve worked with</p>
      </Container>
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-14">
          {track.map((name, i) => (
            <span key={i} className="whitespace-nowrap text-[20px] font-bold text-grey-200">
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
