"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

export function AnimeText() {
    const text = "Front-End Developer";

  useEffect(() => {
    gsap.from(".letter", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
      yoyo:true,
      repeat:-1
    });
  }, []);

  return (
    <h1 id="animatedText" className="mt-7">
      {text.split("").map((char, index) => (
        <span key={index} className='letter text-green-400 text-4xl md:text-5xl' >
          {char}
        </span>
      ))}
    </h1>
  );
}