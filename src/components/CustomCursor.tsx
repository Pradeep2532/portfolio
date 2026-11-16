"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports hover / not coarse pointer
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isCoarse || prefersReducedMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const render = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px)`;
      }
      animId = requestAnimationFrame(render);
    };

    const handleMouseEnter = () => {
      followerRef.current?.classList.add("cursor-hover");
    };
    const handleMouseLeave = () => {
      followerRef.current?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    render();

    // Attach hover listeners to interactives
    const attachHoverables = () => {
      const hoverables = document.querySelectorAll(
        "a, button, input, textarea, .tilt-card"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachHoverables();
    const interval = setInterval(attachHoverables, 2000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="cursor-spotlight" ref={spotlightRef} />
      <div id="cursor-follower" ref={followerRef} />
      <div id="cursor-dot" ref={dotRef} />
    </>
  );
}
