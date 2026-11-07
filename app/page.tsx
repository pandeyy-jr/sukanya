import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Chapters from '@/components/Chapters';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Toolbox from '@/components/Toolbox';
import SelectedWork from '@/components/SelectedWork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <About />
      <Chapters />
      <Experience />
      <Education />
      <Toolbox />
      <SelectedWork />
      <Contact />
      <Footer />
    </main>
  );
}
