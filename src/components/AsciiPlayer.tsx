"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    __ASCII_FRAMES__?: string[];
  }
}

export default function AsciiPlayer(): JSX.Element {
  const preRef = useRef<HTMLPreElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let interval = 0;
    let running = true;
    let i = -1;
    let dir: "inc" | "dec" = "inc";
    const fps = 14.5;

    const pre = preRef.current;
    const span = spanRef.current;
    if (!pre || !span) return;
    if (!window.__ASCII_FRAMES__ || window.__ASCII_FRAMES__.length === 0) {
      if (!framesReady) return;
    }

    function setPreCharSize() {
      if (!window.__ASCII_FRAMES__ || window.__ASCII_FRAMES__.length === 0)
        return;
      const firstFrame = window.__ASCII_FRAMES__[0];
      const lines = firstFrame.split("\n");
      const sample = lines[1] || lines[0] || "";

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      let fontSize = 300;
      const fontFace = "monospace";
      const fit = () => {
        ctx.font = `${fontSize}px ${fontFace}`;
        return ctx.measureText(sample).width <= pre.clientWidth;
      };
      while (fontSize > 1 && !fit()) fontSize--;
      const charRatio = 0.66;
      const charWidth = fontSize * charRatio;
      const charHeight = charRatio * charWidth;
      pre.style.fontSize = `${charWidth}px`;
      pre.style.lineHeight = `${charHeight}px`;
    }

    function startAnimating() {
      const fpsInterval = 1000 / fps;
      let then = Date.now();
      function animate() {
        if (!running) return;
        rafId = requestAnimationFrame(animate);
        const now = Date.now();
        const elapsed = now - then;
        if (elapsed > fpsInterval) {
          then = now - (elapsed % fpsInterval);
          step();
        }
      }
      animate();
    }

    function step() {
      const frames = window.__ASCII_FRAMES__;
      if (!frames || frames.length === 0) return;
      const max = frames.length;
      if (dir === "inc") {
        if (i === max - 1) {
          dir = "dec";
          i--;
        } else {
          i++;
        }
      } else if (dir === "dec") {
        if (i === 0) {
          dir = "inc";
          i++;
        } else {
          i--;
        }
      }
      span.innerText = frames[i];
    }

    function onResize() {
      setPreCharSize();
    }

    setPreCharSize();
    startAnimating();
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (interval) window.clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, [framesReady]);

  return (
    <>
      <Script src="/animation/frames.js" strategy="afterInteractive" />
      <Script
        src="/animation/expose-frames.js"
        strategy="afterInteractive"
        onLoad={() => setFramesReady(true)}
      />
      <pre
        id="trace"
        ref={preRef}
        className="w-full max-w-[600px] font-mono border border-dashed  m-0 overflow-hidden"
      >
        <span id="trace-chars" ref={spanRef} />
      </pre>
    </>
  );
}
