import Hero from '../components/Hero.jsx';
import CreativeWork from '../components/CreativeWork.jsx';
import PaidResults from '../components/PaidResults.jsx';
import About from '../components/About.jsx';
import Stats from '../components/Stats.jsx';
import Tools from '../components/Tools.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import WhyMe from '../components/WhyMe.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactSection.jsx';

// Section order mirrors the reference (ugochukwuanudu.framer.website)
// section-for-section: Hero reel → dual work galleries (creative video +
// paid-media results) → About/stats → Tools → Services → Process → Why Me →
// Testimonials → Contact. Case studies, experience and certifications live
// on the /work page instead of the homepage.
export default function Home() {
  return (
    <>
      <Hero />
      <CreativeWork />
      <PaidResults />
      <About />
      <Stats />
      <Tools />
      <Services />
      <Process />
      <WhyMe />
      <Testimonials />
      <ContactSection />
    </>
  );
}
