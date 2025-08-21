"use client";

import {useEffect, useState} from "react";

export function MatrixRain() {
  const [drops, setDrops] = useState<
    Array<{id: number; left: number; delay: number; char: string}>
  >([]);
  const [particles, setParticles] = useState<
    Array<{id: number; left: number; delay: number}>
  >([]);

  useEffect(() => {
    const characters =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const newDrops = [];

    for (let i = 0; i < 25; i++) {
      newDrops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        char: characters[Math.floor(Math.random() * characters.length)],
      });
    }

    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i + 100,
        left: Math.random() * 100,
        delay: Math.random() * 10,
      });
    }

    setDrops(newDrops);
    setParticles(newParticles);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {drops.map((drop) => (
          <div
            key={drop.id}
            className="matrix-rain"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
            }}>
            {drop.char}
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particles"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
