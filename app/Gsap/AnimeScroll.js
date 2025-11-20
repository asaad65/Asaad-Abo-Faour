"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function AnimeScroll(props) {
  const {
    direction = "left",         // اتجاه الحركة
    distance = 200,             // مقدار الحركة
    duration = 1,               // مدة الأنيميشن
    opacity = 1,                // الشفافية النهائية
    delay = 0,                  // تأخير قبل بدء الأنيميشن
    easing = "power2.out",      // نوع الحركة
    repeat = 0,                 // عدد مرات التكرار
    yoyo = false,               // هل يعود للخلف بعد الانتهاء
    once = true,                // هل يحدث الأنيميشن مرة واحدة فقط
    targetId = "About",         // الـ id للعنصر المستهدف
  } = props;

  useEffect(() => {
    const element = document.querySelector(`#${targetId}`);
    if (!element) return;

    const axis = direction === "left" || direction === "right" ? "x" : "y";
    const value = direction === "left" || direction === "top" ? -distance : distance;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            { opacity: 0, [axis]: value },
            {
              opacity,
              [axis]: 0,
              duration,
              delay,
              ease: easing,
              repeat,
              yoyo,
            }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
  }, [
    direction,
    distance,
    duration,
    opacity,
    delay,
    easing,
    repeat,
    yoyo,
    once,
    targetId,
  ]);

  return null;
}