import { Link } from 'react-router-dom';
import { caseStudies } from '../data/siteData.js';
import Container from './Container.jsx';
import SectionIntro from './SectionIntro.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Portfolio() {
  const featured = caseStudies.slice(0, 4);

  return (
    <section id="work" className="py-24" aria-label="Selected work">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro kicker="Selected projects" heading="My work" />
          <Link
            to="/case-studies"
            className="shrink-0 rounded-full border border-grey-200 px-6 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            See all 8 case studies
          </Link>
        </div>

        <div className="flex flex-col">
          {featured.map((study) => (
            <ProjectCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
