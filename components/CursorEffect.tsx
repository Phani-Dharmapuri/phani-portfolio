"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  prevX?: number;
  prevY?: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface CursorParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
  size: number;
}

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cursorParticlesRef = useRef<CursorParticle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, moving: false });
  const speedRef = useRef(0.5);
  const hueRef = useRef(0);
  const lastMouseMoveRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const starCount = 800; // Lots of stars for a rich starfield

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 2000,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler - affects travel speed and creates cursor particles
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, moving: true };
      lastMouseMoveRef.current = Date.now();

      // Mouse position affects speed (slight parallax effect)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;

      // Speed increases slightly when mouse moves
      speedRef.current =
        1.5 + Math.abs(offsetX) * 0.5 + Math.abs(offsetY) * 0.5;

      // Add cursor particles (liquid effect)
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;

        cursorParticlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: velocityX,
          vy: velocityY,
          life: 1.0,
          hue: hueRef.current + Math.random() * 60 - 30,
          size: Math.random() * 40 + 30, // 30-70px particles
        });
      }

      // Cycle hue for rainbow effect
      hueRef.current = (hueRef.current + 5) % 360;

      // Limit particles
      if (cursorParticlesRef.current.length > 100) {
        cursorParticlesRef.current = cursorParticlesRef.current.slice(-100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.01;

      // Clear canvas with dark blue-black night sky
      ctx.fillStyle = "rgba(0, 0, 8, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Move star towards viewer (traveling effect)
        star.z -= speedRef.current;

        // Reset star if it goes behind the camera
        if (star.z <= 0) {
          star.z = 2000;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        // 3D to 2D projection
        const scale = 1000 / star.z;
        const x2d = star.x * scale + centerX;
        const y2d = star.y * scale + centerY;

        // Calculate star size based on depth (closer = bigger)
        const size = star.size * scale;

        // Skip if star is off screen
        if (
          x2d < -50 ||
          x2d > canvas.width + 50 ||
          y2d < -50 ||
          y2d > canvas.height + 50
        ) {
          return;
        }

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const brightness = star.brightness * (0.7 + twinkle * 0.3);

        // Opacity based on depth (closer = brighter)
        const opacity = Math.min(1, (2000 - star.z) / 2000) * brightness;

        // Draw star with glow
        const gradient = ctx.createRadialGradient(
          x2d,
          y2d,
          0,
          x2d,
          y2d,
          size * 3
        );

        // Natural star colors (mostly white/blue with slight variation)
        const starColor = `rgba(${200 + Math.random() * 55}, ${
          200 + Math.random() * 55
        }, 255, ${opacity})`;
        const starGlow = `rgba(180, 200, 255, ${opacity * 0.3})`;

        gradient.addColorStop(0, starColor);
        gradient.addColorStop(0.3, starGlow);
        gradient.addColorStop(1, "rgba(180, 200, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Motion trail for stars moving fast (hyperspace effect)
        if (speedRef.current > 1 && star.z < 1000) {
          if (star.prevX !== undefined && star.prevY !== undefined) {
            ctx.strokeStyle = `rgba(180, 200, 255, ${opacity * 0.3})`;
            ctx.lineWidth = size;
            ctx.beginPath();
            ctx.moveTo(star.prevX, star.prevY);
            ctx.lineTo(x2d, y2d);
            ctx.stroke();
          }
        }

        // Store previous position for trails
        star.prevX = x2d;
        star.prevY = y2d;
      });

      // Check if mouse is still moving
      const now = Date.now();
      const timeSinceLastMove = now - lastMouseMoveRef.current;
      if (timeSinceLastMove > 100) {
        mouseRef.current.moving = false;
      }

      // Update and draw cursor particles (liquid effect)
      cursorParticlesRef.current = cursorParticlesRef.current.filter((particle) => {
        // Update physics with slight drift
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98; // Gentle friction
        particle.vy *= 0.98;
        
        // Add slight upward drift for abstract movement
        particle.vy -= 0.02;

        // Decay life faster when not moving
        const decayRate = mouseRef.current.moving ? 0.018 : 0.05;
        particle.life -= decayRate;

        if (particle.life <= 0) return false;

        // Draw abstract gradient blob
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        );

        const opacity = particle.life * 0.3; // Subtle opacity

        // Multi-color gradient for abstract liquid effect
        gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 65%, ${opacity})`);
        gradient.addColorStop(
          0.4,
          `hsla(${(particle.hue + 40) % 360}, 85%, 60%, ${opacity * 0.6})`
        );
        gradient.addColorStop(
          0.7,
          `hsla(${(particle.hue + 80) % 360}, 80%, 55%, ${opacity * 0.3})`
        );
        gradient.addColorStop(1, `hsla(${(particle.hue + 120) % 360}, 75%, 50%, 0)`);

        ctx.fillStyle = gradient;
        
        // Use globalCompositeOperation for better blending
        ctx.globalCompositeOperation = "lighter";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";

        return true;
      });

      // Gradually slow down speed when mouse isn't moving
      speedRef.current = Math.max(0.5, speedRef.current * 0.98);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 1
      }}
    />
  );
}
