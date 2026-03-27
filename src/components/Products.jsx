import React from 'react';

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// PRODUCT_REGISTRY</span>
          <h2 className="section-title">Программные комплексы</h2>
          <div className="section-line"></div>
        </div>
        <div className="products-grid">
          <div className="product-panel reveal">
            <div className="panel-header">
              <div className="panel-name">МК Эксперт Плюс</div>
              <div className="panel-status status-active">
                <span style={{ width: '5px', height: '5px', background: 'var(--accent-ok)', borderRadius: '50%', display: 'inline-block' }}></span>
                ACTIVE
              </div>
            </div>
            <div className="panel-body">
              <p className="panel-desc">Профессиональный мобильный комплекс для извлечения данных. Поддержка широкого спектра устройств.</p>
              <div className="sys-lines">
                <div className="sys-line"><span className="sys-key">BUILD</span><span className="sys-val">2024.11.3-FORENSIC</span></div>
                <div className="sys-line"><span className="sys-key">STATUS</span><span className="sys-val ok">OPERATIONAL</span></div>
                <div className="sys-line"><span className="sys-key">DEVICES</span><span className="sys-val">28,000+ supported</span></div>
                <div className="sys-line"><span className="sys-key">ENCRYPT</span><span className="sys-val ok">AES-256 · ACTIVE</span></div>
              </div>
              <div className="panel-spec">
                <div className="spec-title">Capabilities</div>
                <ul className="spec-list">
                  <li>Physical & logical extraction</li>
                  <li>Cloud data acquisition (iCloud, Google, Samsung)</li>
                  <li>Deleted data recovery engine</li>
                  <li>Court-admissible report generation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="product-panel reveal reveal-delay-1">
            <div className="panel-header">
              <div className="panel-name">МК Десктоп</div>
              <div className="panel-status status-running">
                <span style={{ width: '5px', height: '5px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-dot 1.5s infinite' }}></span>
                RUNNING
              </div>
            </div>
            <div className="panel-body">
              <p className="panel-desc">Стационарный комплекс для глубокого анализа компьютерных носителей и сложных цифровых сред.</p>
              <div className="sys-lines">
                <div className="sys-line"><span className="sys-key">BUILD</span><span className="sys-val">2024.10.7-DESKTOP</span></div>
                <div className="sys-line"><span className="sys-key">STATUS</span><span className="sys-val ok">RUNNING · PID 4821</span></div>
                <div className="sys-line"><span className="sys-key">STORAGE</span><span className="sys-val">HDD/SSD/NVMe/RAID</span></div>
                <div className="sys-line"><span className="sys-key">HASH</span><span className="sys-val ok">MD5 · SHA-1 · SHA-256</span></div>
              </div>
              <div className="panel-spec">
                <div className="spec-title">Capabilities</div>
                <ul className="spec-list">
                  <li>Disk imaging with write-blocking</li>
                  <li>File system analysis (NTFS, EXT4, APFS)</li>
                  <li>Email & browser artifact extraction</li>
                  <li>Timeline & link analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
