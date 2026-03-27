import React, { useEffect, useRef } from 'react';

const HeroBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], lines = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // PARTICLES
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // DATA LINES
    for (let i = 0; i < 12; i++) {
      lines.push({
        x: Math.random() * W,
        y: Math.random() * H,
        length: Math.random() * 120 + 40,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.15 + 0.05,
        progress: Math.random()
      });
    }

    let animationFrameId;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // BG gradient
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, H * 0.8);
      g.addColorStop(0, 'rgba(0,50,100,0.08)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // CONNECTIONS
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // PARTICLES
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      // DATA LINES
      lines.forEach(l => {
        l.progress += l.speed * 0.005;
        if (l.progress > 1) {
          l.progress = 0;
          l.x = Math.random() * W;
          l.y = Math.random() * H;
          l.angle = Math.random() * Math.PI * 2;
        }
        const tail = 0.3;
        const headP = l.progress;
        const tailP = Math.max(0, l.progress - tail);
        const hx = l.x + Math.cos(l.angle) * l.length * headP;
        const hy = l.y + Math.sin(l.angle) * l.length * headP;
        const tx = l.x + Math.cos(l.angle) * l.length * tailP;
        const ty = l.y + Math.sin(l.angle) * l.length * tailP;
        
        const lg = ctx.createLinearGradient(tx, ty, hx, hy);
        lg.addColorStop(0, 'transparent');
        lg.addColorStop(1, `rgba(0,212,255,${l.opacity * 3})`);
        
        ctx.beginPath();
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.2;
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef} />;
};

export default HeroBg;
