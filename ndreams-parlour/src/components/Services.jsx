import '../styles/Services.css';

const services = [
  { img: 'facial.png', title: 'Facial & Skin Care', desc: 'Restore and illuminate your skin with our premium facial treatments — including Derma Plan, Tan and Glow, Hydra Facial, and Fruit Facial, each crafted to rejuvenate and reveal your natural radiance.', price: '₹1,200' },
  { img: 'eyebrow.jpg', title: 'Eyebrow & Threading', desc: 'Precision threading, microblading consultations, and tinting that perfectly frame your beautiful face. Natural-looking, defined brows that last and complement your every feature.', price: '₹150' },
  { img: 'bridal.png', title: 'Bridal Makeup', desc: 'Flawless, long-lasting bridal looks curated for your special day. Full package includes pre-bridal skin prep, HD makeup, and hairstyling for a radiant appearance from dawn to reception.', price: '₹3,500' },
  { img: 'Hair.png', title: 'Hair Styling', desc: 'From silk blowouts and glossy treatments to intricate updos and bold cuts — our stylists craft personalized hair stories that turn heads at every occasion.', price: '₹800' },
  { img: 'permanent.png', title: 'Permanent Treatments', desc: 'Enhance your look with our lasting beauty solutions — Lip Colour Filling, Lip Colour Neutralization, Hair Extension, Eye Lashes, and Peeling for a refined, long-lasting transformation.', price: '₹2,500' },
  { img: 'advanced.jpg', title: 'Advanced Skin Treatments', desc: 'Reveal flawless skin with our expert advanced treatments — BB Glow, Chemical Peel, Yellow Peel, Glutathion Peel, and Permanent Makeup for a radiant, lasting glow.', price: '₹3,000' },
];

export default function Services() {
  return (
    <section id="services" className="services-section section-pad">
      <div className="section-max">
        <div className="section-center reveal">
          <span className="eyebrow">Our Expertise</span>
          <h2 className="section-heading">Luxury Services<br /><em>Crafted for You</em></h2>
          <span className="ornament" />
          <p className="section-lead center">Each service is a ritual — designed to elevate, restore, and celebrate your unique beauty with unmatched expertise.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className="svc-card reveal" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <div className="svc-arrow">→</div>
              <div className="svc-icon-wrap">
                <img src={`/parlourimages/${s.img}`} alt={s.title} />
              </div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-price">Starting from {s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
