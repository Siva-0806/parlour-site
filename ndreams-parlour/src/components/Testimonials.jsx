import { useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const reviews = [
  { name: 'Priya Sharma', loc: 'Madurai', text: 'The bridal makeup was absolutely breathtaking. I received compliments all evening and felt like royalty on my special day!', stars: 5 },
  { name: 'Divya R.', loc: 'Chennai', text: 'Best threading experience ever. Clean, precise, and completely painless. My brows have never looked this perfect!', stars: 5 },
  { name: 'Ananya K.', loc: 'Madurai', text: 'Their glass skin facial treatment left my skin glowing for weeks. The products they use are absolutely premium.', stars: 5 },
  { name: 'Meena Lakshmi', loc: 'Coimbatore', text: 'The nail art they created for my wedding was a masterpiece. Intricate, long-lasting, and absolutely stunning!', stars: 5 },
  { name: 'Rekha Devi', loc: 'Madurai', text: 'The luxury spa day was everything I needed. Ambiance, service, and results are all world-class. Totally worth it!', stars: 5 },
  { name: 'Sowmya T.', loc: 'Trichy', text: 'Professional, warm, and incredibly talented team. N Dreams is truly a dream come true for beauty lovers!', stars: 5 },
  { name: 'Kavitha M.', loc: 'Madurai', text: 'My hair transformation was beyond stunning. The stylist understood exactly what I wanted and delivered perfection.', stars: 5 },
  { name: 'Latha P.', loc: 'Madurai', text: 'Every single visit feels like a royal treatment. Highly recommend for all beauty needs in Madurai!', stars: 5 },
  { name: 'Saranya B.', loc: 'Madurai', text: 'Booked the pre-bridal package — best decision ever! My skin was absolutely radiant on my wedding day.', stars: 5 },
  { name: 'Nithya S.', loc: 'Tirunelveli', text: 'Drove all the way from Tirunelveli and it was 100% worth it. The bridal package is unmatched in quality.', stars: 5 },
];

function ReviewCard({ r }) {
  const initials = r.name.split(' ').map(w => w[0]).join('');
  return (
    <div className="rev-card">
      <div className="rev-stars">{'★'.repeat(r.stars)}</div>
      <div className="rev-text">"{r.text}"</div>
      <div className="rev-author">
        <div className="rev-avatar">{initials}</div>
        <div>
          <div className="rev-name">{r.name}</div>
          <div className="rev-loc">{r.loc}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...reviews, ...reviews];
  const doubled2 = [...reviews].reverse().concat([...reviews].reverse());

  return (
    <section id="testimonials" className="testimonials-section section-pad">
      <div className="test-header reveal">
        <span className="eyebrow">Client Love</span>
        <h2 className="section-heading">Words That <em>Inspire Us</em></h2>
        <span className="ornament" />
        <p className="section-lead center">Real stories from real queens who walked out feeling completely transformed.</p>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {doubled.map((r, i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
        <div className="marquee-wrap" style={{ marginTop: '1.5rem' }}>
          <div className="marquee-track marquee-track2">
            {doubled2.map((r, i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
