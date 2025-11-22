"use client"
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useState } from "react";

export function AnimeText() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useLayoutEffect(() => {
    if (isReady) {
      gsap.from(".letter", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [isReady]);

  const text = "Front-End Developer";

  return (
    <h1 id="animatedText" className="mt-7 z-50">
      {text.split("").map((char, index) => (
        <span key={index} className="letter text-green-400 text-4xl md:text-5xl">
          {char}
        </span>
      ))}
    </h1>
  );
}
