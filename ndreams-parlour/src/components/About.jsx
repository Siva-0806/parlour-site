import '../styles/About.css';

const features = [
  { title: 'Master-certified stylists', desc: 'Our team holds international certifications with 10+ years of luxury salon experience.' },
  { title: 'Premium international brands', desc: 'We use only the finest beauty formulations — MAC, Huda Beauty, Kerastase, and certified organic lines.' },
  { title: 'Hygiene-first philosophy', desc: 'Every tool sterilized, every surface pristine. Your safety and comfort are our highest priority.' },
  { title: 'Personalized beauty consultations', desc: 'Every client receives a customized skin and style assessment before any service begins.' },
];

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  }
}

export default function About() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="about-grid section-max">
        <div className="about-visual reveal-left">
          <div className="about-blob" />
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div className="about-glow-ring" />
            <div className="about-frame">
              <div className="about-frame-inner">
                <img src="/parlourimages/ndreams.png" alt="N DREAM'S PARLOUR" className="about-ndreams-img" />
                <div className="about-ornament" />
                <div className="about-frame-tagline">Beauty Parlour<br />Madurai, Tamil Nadu</div>
                <div style={{ fontSize: '2.5rem', opacity: .2, marginTop: '.5rem' }}>✦</div>
              </div>
            </div>
            <div className="about-accent-box">
              <span className="aab-num">3+ ★</span>
              <span className="aab-text">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="about-text reveal-right" style={{ transitionDelay: '.2s' }}>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-heading">Born from a<br /><em>Passion for Beauty</em></h2>
          <span className="ornament" style={{ margin: '1rem 0' }} />
          <p className="section-lead">N DREAM'S PARLOUR was founded in 2023 on one belief — every woman deserves to feel extraordinary. We blend artistry with expertise, creating transformations that go far beyond the mirror. Our space is your sanctuary.</p>
          <div className="features-list">
            {features.map(f => (
              <div key={f.title} className="feat">
                <div className="feat-dot" />
                <div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-glow" style={{ marginTop: '2rem' }} onClick={() => smoothScroll('booking')}>✦ Book a Consultation</button>
        </div>
      </div>
    </section>
  );
}
