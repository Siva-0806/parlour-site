import '../styles/Instagram.css';

const igPosts = [
  { img: 'glow up.jpeg', contain: true, label: 'Glow Up ✨' },
  { img: 'Hair goals.jpeg', contain: false, label: 'Hair Goals 💇' },
  { img: 'skin  care.jpeg', contain: false, label: 'Skin Care 🌿' },
  { img: 'Bridal Dreams.jpeg', contain: true, label: 'Bridal Dreams 👰' },
  { img: 'BROW art.jpeg', contain: true, label: 'Brow Art 👁' },
  { img: 'Brow art 2.jpeg', contain: true, label: 'Brow Art 👁' },
  { img: 'advanced.jpg', contain: true, label: 'Transformation 🔥' },
  { img: 'AST.jpeg', contain: true, label: 'Advanced Skin ✦' },
];

export default function Instagram() {
  return (
    <section id="instagram" className="instagram-section section-pad">
      <div className="ig-header reveal">
        <span className="eyebrow">Instagram</span>
        <h2 className="section-heading">Follow Our <em>Journey</em></h2>
        <span className="ornament" />
        <a href="https://www.instagram.com/n_dreams_beautyparlour" target="_blank" rel="noreferrer" className="ig-handle-link">
          📸 @n_dreams_beautyparlour
        </a>
      </div>
      <div className="ig-grid">
        {igPosts.map((p, i) => (
          <div key={i} className="ig-cell reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
            <div
              className="ig-inner"
              style={{
                backgroundImage: `url('/parlourimages/${p.img}')`,
                backgroundSize: p.contain ? 'contain' : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0a0a0a',
              }}
            />
            <div className="ig-hover">
              <div className="ig-hover-icon">📸</div>
              <div className="ig-hover-stat">{p.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ig-cta reveal" style={{ transitionDelay: '.3s' }}>
        <a href="https://www.instagram.com/n_dreams_beautyparlour" target="_blank" rel="noreferrer" className="btn-glow" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Follow on Instagram ↗
        </a>
      </div>
    </section>
  );
}
