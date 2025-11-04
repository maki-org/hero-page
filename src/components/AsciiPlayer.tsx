"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    __ASCII_FRAMES__?: string[];
  }
}

export default function AsciiPlayer(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    let rafId = 0;
    let running = true;
    let i = -1;
    let dir: "inc" | "dec" = "inc";
    const fps = 7; // Match your original FPS

    const container = containerRef.current;
    const pre = preRef.current;
    const span = spanRef.current;

    if (!pre || !span || !container) return;
    if (!window.__ASCII_FRAMES__ || window.__ASCII_FRAMES__.length === 0) {
      if (!framesReady) return;
    }

    function setPreCharSize() {
      if (!window.__ASCII_FRAMES__ || window.__ASCII_FRAMES__.length === 0)
        return;

      const firstFrame = window.__ASCII_FRAMES__[0];
      const lines = firstFrame.split("\n");

      // Get the actual container dimensions
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Create canvas for text measurement
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const fontFace = "monospace";

      // Find the longest line (excluding special marked lines)
      let longestLine = lines[0];
      let maxWidth = 0;
      lines.forEach((line) => {
        if (!line.includes("exempt-from-text-fit-calculation")) {
          const width = ctx.measureText(line).width;
          if (width > maxWidth) {
            maxWidth = width;
            longestLine = line;
          }
        }
      });

      // Calculate font size to fit width
      let fontSize = 300;
      const charRatio = 0.66;

      const fit = () => {
        ctx.font = `${fontSize}px ${fontFace}`;
        return ctx.measureText(longestLine).width * charRatio <= containerWidth;
      };

      while (fontSize > 1 && !fit()) {
        fontSize -= 0.5;
      }

      // Apply character ratio adjustment
      const charWidth = fontSize * charRatio;
      const charHeight = charRatio * charWidth;

      // Check vertical fit
      const totalHeight = lines.length * charHeight;
      if (totalHeight > containerHeight) {
        const verticalScale = containerHeight / totalHeight;
        fontSize = fontSize * verticalScale;
      }

      // Apply the calculated font size
      pre.style.fontSize = `${fontSize * charRatio}px`;
      pre.style.lineHeight = `${fontSize * charRatio * charRatio}px`;
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

    // Initial setup
    setPreCharSize();
    startAnimating();
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [framesReady]);

  return (
    <>
      <Script
        src="/animation/frames.js"
        strategy="afterInteractive"
        onLoad={() => setFramesReady(true)}
      />
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <pre
          id="trace"
          ref={preRef}
          style={{
            margin: 0,
            padding: 0,
            fontFamily: "monospace",
            whiteSpace: "pre",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <span id="trace-chars" ref={spanRef} />
        </pre>
      </div>
    </>
  );
}
