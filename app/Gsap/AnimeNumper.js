"use client";
import { useEffect, useState } from "react";

export function AnimeNumper() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prev) => {
        const newDrop = {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          delay: 0,
          value: Math.random() < 0.5 ? 0 : 1,
        };
        const updated = [...prev, newDrop].slice(-20);
        return updated;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute top-0 text-green-500 text-4xl pointer-events-none animate-fall"
          style={{
            left: drop.left,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {drop.value}
        </span>
      ))}
    </>
  );
}