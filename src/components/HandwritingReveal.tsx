// HandwritingReveal.tsx
import { useEffect, useRef } from "react";
import logoSvg from "../assets/images/portfolio.svg?raw";

interface HandwritingRevealProps {
  svgRaw?: string;
  strokeDurationMs?: number;   // time to reveal each path
  staggerMs?: number;          // delay between paths starting
}

export function HandwritingReveal({
  svgRaw = logoSvg,
  strokeDurationMs = 500,
  staggerMs = 350,
}: HandwritingRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = svgRaw;
    const svg = container.querySelector("svg");
    if (!svg) return;

    const timers: number[] = [];
    const animationFrameIds: number[] = [];

    const startAnimation = () => {
      const paths = Array.from(svg.querySelectorAll("path"));
      const defs = svg.querySelector("defs") ?? svg.insertBefore(
        document.createElementNS("http://www.w3.org/2000/svg", "defs"),
        svg.firstChild
      );

      paths.forEach((path, i) => {
        const bbox = path.getBBox();
        const clipId = `reveal-clip-${i}`;

        const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clipPath.setAttribute("id", clipId);
        clipPath.setAttribute("clipPathUnits", "userSpaceOnUse");

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", String(bbox.x));
        rect.setAttribute("y", String(bbox.y - 4));
        rect.setAttribute("height", String(bbox.height + 8));
        rect.setAttribute("width", "0");

        clipPath.appendChild(rect);
        defs.appendChild(clipPath);
        path.setAttribute("clip-path", `url(#${clipId})`);

        let rafId: number;
        const delayTimeout = setTimeout(() => {
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / strokeDurationMs, 1);
            const eased = progress * (2 - progress);
            rect.setAttribute("width", String(bbox.width * eased));
            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
              animationFrameIds.push(rafId);
            }
          };
          rafId = requestAnimationFrame(tick);
          animationFrameIds.push(rafId);
        }, i * staggerMs);
        timers.push(Number(delayTimeout));
      });
    };

    const timer = setTimeout(startAnimation, 50);

    return () => {
      clearTimeout(timer);
      timers.forEach(t => clearTimeout(t));
      animationFrameIds.forEach(id => cancelAnimationFrame(id));
    };
  }, [svgRaw, strokeDurationMs, staggerMs]);

  return <div ref={containerRef} style={{ display: "inline-block", verticalAlign: "middle" }} />;
}