import React, { useEffect, useRef } from 'react';

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const counters = document.querySelectorAll('.stat-num[data-target]');
        counters.forEach(el => {
          const target = +el.getAttribute('data-target');
          let count = 0;
          const increment = Math.ceil(target / 40);
          
          const updateCount = () => {
            count = Math.min(count + increment, target);
            el.innerHTML = `${count}<span>+</span>`;
            if (count < target) {
              requestAnimationFrame(updateCount);
            }
          };
          updateCount();
        });
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={statsRef}>
      <div className="stats-inner">
        <div className="stat-cell reveal">
          <div className="stat-num" data-target="3">0<span>+</span></div>
          <div className="stat-label">года практической<br />работы</div>
        </div>
        <div className="stat-cell reveal d1">
          <div className="stat-num" data-target="50">0<span>+</span></div>
          <div className="stat-label">проектов в сфере<br />криминалистики и безопасности</div>
        </div>
        <div className="stat-cell reveal d2">
          <div className="stat-num" data-target="100">0<span>+</span></div>
          <div className="stat-label">внедрённых<br />технических решений</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
