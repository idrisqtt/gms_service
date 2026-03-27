import React from 'react';

const Process = () => {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// ANALYSIS_PIPELINE</span>
          <h2 className="section-title">Процесс работы</h2>
          <div className="section-line"></div>
        </div>
        <div className="data-flow"></div>
        <div className="pipeline reveal">
          <div className="pipeline-step">
            <div className="step-num">STEP_01</div>
            <div className="step-tag">INPUT</div>
            <div className="step-title">Сбор данных</div>
            <p className="step-desc">Криминалистически корректное изъятие носителей. Документирование цепочки хранения улик.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num">STEP_02</div>
            <div className="step-tag">ANALYSIS</div>
            <div className="step-title">Анализ</div>
            <p className="step-desc">Глубокий анализ извлечённых данных. Восстановление удалённых файлов. Выявление скрытых артефактов.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num">STEP_03</div>
            <div className="step-tag">DETECTION</div>
            <div className="step-title">Обнаружение</div>
            <p className="step-desc">Идентификация угроз, инцидентов и улик. Корреляция событий. Построение временных линий.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num">STEP_04</div>
            <div className="step-tag">REPORT</div>
            <div className="step-title">Отчётность</div>
            <p className="step-desc">Формирование юридически значимых заключений. Экспертные отчёты для суда и следствия.</p>
          </div>
        </div>
        <div className="data-flow" style={{ transform: 'scaleX(-1)' }}></div>
      </div>
    </section>
  );
};

export default Process;
