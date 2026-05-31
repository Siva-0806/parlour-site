import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#showcase', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#booking', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ['hero','services','about','showcase','testimonials','instagram','booking'];
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    }
  };

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    setMenuOpen(false);
    setTimeout(() => smoothScroll(id), menuOpen ? 300 : 0);
  };

  return (
    <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">N DREAM'S PARLOUR</div>
      <ul className="nav-menu">
        {navLinks.map(l => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''} onClick={e => handleNav(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button className="nav-book" onClick={() => smoothScroll('booking')}>Book Now</button>
      <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} style={{ display: menuOpen ? 'flex' : 'none' }}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a>
        ))}
        <button className="mobile-book" onClick={() => { smoothScroll('booking'); setMenuOpen(false); }}>✦ Book Appointment</button>
      </div>
    </nav>
  );
}
