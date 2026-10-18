"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const MATH_GLYPHS = ["∑", "∫", "λ", "√", "π", "∆", "µ", "θ", "0", "1", "{", "}", "<", ">", "╱", "≈", "±", "∇", "∈", "⊕", "α", "β", "γ", "∞"];

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  delay?: number;
  enableScramble?: boolean;
}

function ScrambleChar({ 
  char, 
  index, 
  isInView, 
  delay = 0,
  enableScramble = true
}: { 
  char: string; 
  index: number; 
  isInView: boolean; 
  delay: number;
  enableScramble: boolean;
}) {
  const isPlain = !enableScramble || char.trim() === "";
  const [displayChar, setDisplayChar] = useState(char);
  const [isDecoded, setIsDecoded] = useState(isPlain);

  useEffect(() => {
    if (!isInView || isPlain) {
      return;
    }

    // Non-sequential scattered delay across arbitrary character positions
    const scatteredOffset = ((index * 41 + 17) % 21) * 16;
    const totalDelay = delay * 1000 + scatteredOffset;
    let intervalId: NodeJS.Timeout;
    let step = 0;
    const maxSteps = 3 + (index % 4);

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (step >= maxSteps) {
          setDisplayChar(char);
          setIsDecoded(true);
          clearInterval(intervalId);
        } else {
          const randomGlyph = MATH_GLYPHS[Math.floor(Math.random() * MATH_GLYPHS.length)];
          setDisplayChar(randomGlyph);
          step++;
        }
      }, 30);
    }, totalDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, char, index, delay, enableScramble]);

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 12, 
      filter: "blur(6px)",
      scale: 1.05
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.span
      variants={charVariants}
      className={`inline-block transition-colors duration-150 ${
        !isDecoded && enableScramble ? "text-[#0e76ff] font-mono font-bold" : ""
      }`}
    >
      {displayChar}
    </motion.span>
  );
}

export default function TextReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
  enableScramble = true
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const wordData = useMemo(() => {
    const splitWords = text.split(" ");
    return splitWords.map((word, i) => {
      const startIndex = splitWords.slice(0, i).reduce((acc, w) => acc + w.length + 1, 0);
      return { word, startIndex };
    });
  }, [text]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };

  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLHeadingElement>}
      className={`text-reveal ${className}`}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {wordData.map(({ word, startIndex }, wordIndex) => {
          const chars = word.split("");

          return (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
              {chars.map((char, charIndex) => {
                const charIdx = startIndex + charIndex;
                return (
                  <ScrambleChar
                    key={charIndex}
                    char={char}
                    index={charIdx}
                    isInView={isInView}
                    delay={delay}
                    enableScramble={enableScramble}
                  />
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}
