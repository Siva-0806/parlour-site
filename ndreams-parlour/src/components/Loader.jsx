import { useEffect, useState } from 'react';
import '../styles/Loader.css';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 2000);
    const t2 = setTimeout(() => setGone(true), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-logo">N DREAM'S PARLOUR</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.8rem' }}>
        <div className="loader-bar"><div className="loader-bar-fill" /></div>
        <div className="loader-text">Loading luxury experience</div>
      </div>
    </div>
  );
}
