import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor: React.FC = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const curRRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const curR = curRRef.current;
    if (!cur || !curR) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      
      // Instantly position the center dot
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;

      if (!isVisible) {
        cur.style.opacity = "1";
        curR.style.opacity = "1";
        isVisible = true;
      }
    };

    let animationFrameId: number;
    const loop = () => {
      // Linear interpolation for lagging ring
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      
      curR.style.left = `${rx}px`;
      curR.style.top = `${ry}px`;
      
      animationFrameId = requestAnimationFrame(loop);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(loop);

    // Track mouse enter/leave window
    const onMouseLeaveWindow = () => {
      cur.style.opacity = "0";
      curR.style.opacity = "0";
      isVisible = false;
    };

    const onMouseEnterWindow = () => {
      cur.style.opacity = "1";
      curR.style.opacity = "1";
      isVisible = true;
    };

    // Hover delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        target.closest("a, button, .work-card, .project-card, .footer-social-link-item, [role='button']")
      ) {
        document.body.classList.add("hovering");
      } else {
        document.body.classList.remove("hovering");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("hovering");
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} className="custom-cursor" />
      <div id="cur-r" ref={curRRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
