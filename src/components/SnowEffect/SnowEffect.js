import React, { useEffect, useRef } from 'react';
import './SnowEffect.css';

const SnowEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Ultra-light snow density: 20 subtle snowflakes across the screen
    const numFlakes = 20;
    const flakeSymbols = ['❄', '❅', '❆', '✧'];
    const flakes = [];

    for (let i = 0; i < numFlakes; i++) {
      const type = Math.floor(Math.random() * 3); // 0: 6-arm crystal, 1: crystal symbol, 2: soft powder dot
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        type: type,
        size: type === 2 ? Math.random() * 2 + 1 : Math.random() * 5 + 4,
        speed: Math.random() * 0.35 + 0.15, // Very slow, gentle float
        swaySpeed: Math.random() * 0.012 + 0.004,
        swayRange: Math.random() * 0.8 + 0.2,
        swayAngle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.01,
        symbol: flakeSymbols[Math.floor(Math.random() * flakeSymbols.length)],
        opacity: Math.random() * 0.3 + 0.15, // Soft, subtle opacity
      });
    }

    const drawSnowflake = (flake) => {
      ctx.save();
      ctx.translate(flake.x, flake.y);
      ctx.rotate(flake.rotation);
      ctx.globalAlpha = flake.opacity;

      if (flake.type === 0) {
        // Detailed 6-arm crystal snowflake geometry
        const arms = 6;
        const r = flake.size;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = Math.max(0.8, flake.size * 0.1);
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 3;

        for (let a = 0; a < arms; a++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -r);
          // Side branch prongs
          ctx.moveTo(0, -r * 0.55);
          ctx.lineTo(r * 0.25, -r * 0.75);
          ctx.moveTo(0, -r * 0.55);
          ctx.lineTo(-r * 0.25, -r * 0.75);
          ctx.stroke();
          ctx.rotate((Math.PI * 2) / arms);
        }
      } else if (flake.type === 1) {
        // Crisp Snowflake Crystal Symbol (❄ ❅ ❆)
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(195, 230, 255, 0.5)';
        ctx.shadowBlur = 4;
        ctx.font = `${flake.size * 1.2}px Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(flake.symbol, 0, 0);
      } else {
        // Soft powder snow dot with radial glow
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, flake.size * 1.5);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${flake.opacity})`);
        gradient.addColorStop(0.5, `rgba(215, 235, 255, ${flake.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, flake.size * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numFlakes; i++) {
        const flake = flakes[i];

        // Update movement
        flake.swayAngle += flake.swaySpeed;
        flake.x += Math.sin(flake.swayAngle) * flake.swayRange * 0.25;
        flake.y += flake.speed;
        flake.rotation += flake.spinSpeed;

        // Reset if off screen
        if (flake.y > height + 20) {
          flake.y = -20;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 20) {
          flake.x = -20;
        } else if (flake.x < -20) {
          flake.x = width + 20;
        }

        drawSnowflake(flake);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="snow-effect-canvas" />;
};

export default SnowEffect;
