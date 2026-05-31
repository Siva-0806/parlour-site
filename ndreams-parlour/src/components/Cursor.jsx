import { useEffect, useRef } from 'react';
import '../styles/Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.left = mx.current + 'px';
      cursor.style.top = my.current + 'px';
    };

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      ring.style.left = rx.current + 'px';
      ring.style.top = ry.current + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'var(--gold)';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(212,168,71,.6)';
    };
    const onLeave = () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = 'var(--orange)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(255,122,0,.5)';
    };

    const targets = document.querySelectorAll('button,a,.svc-card,.gal-item,.ig-cell,.rev-card');
    targets.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      targets.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} className="cursor" />
      <div id="cursor-ring" ref={ringRef} className="cursor-ring" />
    </>
  );
}
