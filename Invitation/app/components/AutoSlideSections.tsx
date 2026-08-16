"use client";

import { useEffect, useRef } from "react";

export default function AutoSlideSections({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const userScrolling = useRef(false);

  useEffect(() => {
    const sections = containerRef.current?.children;
    if (!sections || sections.length === 0) return;

    let index = 0;

    // Section бүрийн хугацаа (milliseconds)
    const durations = [
      5000,  // section 1
      10000, // section 2
      10000, // section 3
      1000,  // section 4
      5000,  // section 5
      5000,  // section 5
    ];

    const slide = () => {
      if (userScrolling.current) return;

      const delay = durations[index] ?? 5000;

      timerRef.current = setTimeout(() => {
        if (userScrolling.current) return;

        index++;

        if (index >= sections.length) {
          index = 0;
        }

        const isLast = index === sections.length - 1;

        sections[index].scrollIntoView({
          behavior: "smooth",
          block: isLast ? "end" : "start",
        });

        slide(); // дараагийн хугацааг эхлүүлэх
      }, delay);
    };

    const stopAutoSlide = () => {
      userScrolling.current = true;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    window.addEventListener("wheel", stopAutoSlide);
    window.addEventListener("touchmove", stopAutoSlide);

    slide();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      window.removeEventListener("wheel", stopAutoSlide);
      window.removeEventListener("touchmove", stopAutoSlide);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory overflow-hidden"
    >
      {children}
    </div>
  );
}