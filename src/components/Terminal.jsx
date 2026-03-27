import React, { useEffect, useState } from 'react';

const Terminal = () => {
  const [cmd1, setCmd1] = useState("");
  const [cmd2, setCmd2] = useState("");
  const [cmd3, setCmd3] = useState("");
  const [visibility, setVisibility] = useState({
    out1: false,
    out1b: false,
    cmd2Wrap: false,
    out2: false,
    out2b: false,
    cmd3Wrap: false,
    out3: false,
    out3b: false,
    out3c: false,
    cursorLine: false,
  });

  const typeText = (text, setFn, speed, cb) => {
    let i = 0;
    const t = setInterval(() => {
      setFn(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(t);
        if (cb) setTimeout(cb, 300);
      }
    }, speed);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      typeText('forensic-tool --connect-device --mode physical', setCmd1, 35, () => {
        setVisibility(v => ({ ...v, out1: true }));
        setTimeout(() => setVisibility(v => ({ ...v, out1b: true })), 400);
        setTimeout(() => {
          setVisibility(v => ({ ...v, cmd2Wrap: true }));
          typeText('extract --all --output /evidence/case-2024-114/', setCmd2, 35, () => {
            setVisibility(v => ({ ...v, out2: true }));
            setTimeout(() => setVisibility(v => ({ ...v, out2b: true })), 600);
            setTimeout(() => {
              setVisibility(v => ({ ...v, cmd3Wrap: true }));
              typeText('analyze --deep --recover-deleted --report pdf', setCmd3, 35, () => {
                setVisibility(v => ({ ...v, out3: true }));
                setTimeout(() => setVisibility(v => ({ ...v, out3b: true })), 400);
                setTimeout(() => setVisibility(v => ({ ...v, out3c: true, cursorLine: true })), 800);
              });
            }, 1200);
          });
        }, 1400);
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-terminal">
      <div className="terminal-header">
        <div className="t-dot t-red" />
        <div className="t-dot t-yellow" />
        <div className="t-dot t-green" />
        <div className="terminal-title">forensic_engine — shell — 80×24</div>
      </div>
      <div className="terminal-body" id="terminal-body">
        <div className="t-line">
          <span className="t-prompt">$</span>
          <span className="t-cmd">{cmd1}</span>
          {!visibility.out1 && <span className="t-cursor" />}
        </div>
        {visibility.out1 && (
          <div className="t-line">
            <span className="t-output t-ok">✓ Device connected: SAMSUNG SM-G998B</span>
          </div>
        )}
        {visibility.out1b && (
          <div className="t-line">
            <span className="t-output t-ok">✓ Physical extraction mode: ENABLED</span>
          </div>
        )}
        {visibility.cmd2Wrap && (
          <div className="t-line">
            <span className="t-prompt">$</span>
            <span className="t-cmd">{cmd2}</span>
            {!visibility.out2 && <span className="t-cursor" />}
          </div>
        )}
        {visibility.out2 && (
          <div className="t-line">
            <span className="t-output">→ Extracting 128GB... [████████░░] 78%</span>
          </div>
        )}
        {visibility.out2b && (
          <div className="t-line">
            <span className="t-output t-ok">✓ 47,293 files indexed</span>
          </div>
        )}
        {visibility.cmd3Wrap && (
          <div className="t-line">
            <span className="t-prompt">$</span>
            <span className="t-cmd">{cmd3}</span>
            {!visibility.out3 && <span className="t-cursor" />}
          </div>
        )}
        {visibility.out3 && (
          <div className="t-line">
            <span className="t-output t-warn">⚠ Encrypted partition detected</span>
          </div>
        )}
        {visibility.out3b && (
          <div className="t-line">
            <span className="t-output t-alert">! ANOMALY: 3 deleted artifacts recovered</span>
          </div>
        )}
        {visibility.out3c && (
          <div className="t-line">
            <span className="t-output t-ok">✓ Evidence package: SIGNED & SEALED</span>
          </div>
        )}
        {visibility.cursorLine && (
          <div className="t-line">
            <span className="t-prompt">$</span>
            <span className="t-cursor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
