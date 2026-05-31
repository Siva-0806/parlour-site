import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const stats = [
  { target: 2500, suffix: '+', label: 'Happy Clients' },
  { target: 3, suffix: '+', label: 'Years of Excellence' },
  { target: 12, suffix: '', label: 'Expert Stylists' },
  { target: 25, suffix: '+', label: 'Services Offered' },
];

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  }
}

export default function Hero() {
  const particlesRef = useRef(null);
  const statsRef = useRef(null);
  const countersStarted = useRef(false);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 5 + 2;
      const duration = Math.random() * 14 + 9;
      const delay = Math.random() * 14;
      const left = Math.random() * 100;
      const color = Math.random() > .5 ? 'rgba(255,122,0,.75)' : 'rgba(212,168,71,.6)';
      p.style.cssText = `width:${size}px;height:${size}px;left:${left}%;background:${color};animation-duration:${duration}s;animation-delay:${delay}s`;
      container.appendChild(p);
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersStarted.current) {
        countersStarted.current = true;
        document.querySelectorAll('.stat-num[data-target]').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = target / 70;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current) + suffix;
          }, 20);
        });
        obs.disconnect();
      }
    }, { threshold: .3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-canvas">
          <div className="hero-bg-grad" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="particles-canvas" ref={particlesRef} />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">Premium Beauty Experience</div>
          <h1 className="hero-title">
            <span className="line1">Where Beauty</span>
            <span className="line2">Meets Luxury</span>
          </h1>
          <p className="hero-sub">Transforming your vision into breathtaking reality — one touch at a time</p>
          <div className="hero-btns">
            <button className="btn-glow" onClick={() => smoothScroll('booking')}>✦ Book Appointment</button>
            <button className="btn-ghost" onClick={() => smoothScroll('services')}>Explore Services</button>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      <section id="stats-bar" className="stats-bar" ref={statsRef}>
        <div className="stats-inner">
          {stats.map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className="stat-divider" />}
              <div key={s.label} className="stat-item reveal">
                <div className="stat-num" data-target={s.target} data-suffix={s.suffix}>0</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
