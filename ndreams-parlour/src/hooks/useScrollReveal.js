import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach((el) => {
        if (!el.classList.contains('vis')) obs.observe(el);
      });
    };

    observe();
    const t = setTimeout(observe, 300);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);
}
