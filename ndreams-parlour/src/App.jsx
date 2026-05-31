import './styles/global.css';
import useScrollReveal from './hooks/useScrollReveal';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Booking />
      <Footer />
    </>
  );
}
