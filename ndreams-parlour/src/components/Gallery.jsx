import '../styles/Gallery.css';

const items = [
  { img: 'Bridal Dreams.jpeg', contain: true, label: 'Bridal Dreams', sub: 'Signature Bridal Makeup', cls: 'g1' },
  { img: 'Luxury Hair Styling.jpeg', contain: false, label: 'Golden Waves', sub: 'Luxury Hair Styling', cls: 'g2' },
  { img: 'Skin treatment.jpeg', contain: false, label: 'Radiant Glow', sub: 'Glass Skin Facial', cls: 'g3' },
  { img: 'PT.jpeg', contain: false, label: 'Permanent Treatments', sub: 'Lasting Beauty Solutions', cls: 'g4' },
  { img: 'AST.jpeg', contain: true, label: 'Advanced Skin Treatments', sub: 'BB Glow & Peels', cls: 'g5' },
  { img: 'BROW art.jpeg', contain: true, label: 'Brow Architecture', sub: 'Precision Threading', cls: 'g6' },
];

export default function Gallery() {
  return (
    <section id="showcase" className="showcase-section section-pad">
      <div className="gallery-header reveal">
        <span className="eyebrow">Our Work</span>
        <h2 className="section-heading">Beauty <em>Transformed</em></h2>
        <span className="ornament" />
        <p className="section-lead center">Every client who walks out is a masterpiece. Explore our signature looks and transformations.</p>
      </div>
      <div className="gallery-masonry section-max">
        {items.map((item, i) => (
          <div key={item.label} className="gal-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div
              className={`gal-bg ${item.cls}${item.contain ? ' contain' : ''}`}
              style={{ backgroundImage: `url('/parlourimages/${item.img}')` }}
            />
            <div className="gal-overlay">
              <div className="gal-label">{item.label}</div>
              <div className="gal-sublabel">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
