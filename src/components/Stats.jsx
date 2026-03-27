import React from 'react';

const Stats = () => {
  return (
    <div className="stats-bar">
      <div className="stat-item reveal">
        <div className="stat-num">10K+</div>
        <div className="stat-label">Устройств извлечено</div>
      </div>
      <div className="stat-item reveal reveal-delay-1">
        <div className="stat-num">99.8%</div>
        <div className="stat-label">Точность анализа</div>
      </div>
      <div className="stat-item reveal reveal-delay-2">
        <div className="stat-num">500+</div>
        <div className="stat-label">Специалистов обучено</div>
      </div>
      <div className="stat-item reveal reveal-delay-3">
        <div className="stat-num">15+</div>
        <div className="stat-label">Лет на рынке</div>
      </div>
    </div>
  );
};

export default Stats;
