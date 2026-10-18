"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";

interface RandomSplitTextProps {
  text: string;
  className?: string;
  baseOpacity?: number;
  staggerDuration?: number;
  charDuration?: number;
  initialDelay?: number;
  triggerOnView?: boolean;
  scrollYProgress?: MotionValue<number>;
  triggerThreshold?: number;
}

export default function RandomSplitText({
  text,
  className = "",
  baseOpacity = 0.15,
  staggerDuration = 0.045,
  charDuration = 0.35,
  initialDelay = 0.1,
  triggerOnView = false,
  scrollYProgress,
  triggerThreshold = 0.06,
}: RandomSplitTextProps) {
  const characters = useMemo(() => text.split(""), [text]);
  const [isTriggered, setIsTriggered] = useState(!scrollYProgress && !triggerOnView);

  useEffect(() => {
    if (!scrollYProgress) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= triggerThreshold) {
        setIsTriggered(true);
      } else if (latest < 0.02) {
        setIsTriggered(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, triggerThreshold]);

  // Generate a deterministic randomized order per string render
  const randomizedIndices = useMemo(() => {
    let seed = 0;
    for (let i = 0; i < text.length; i++) {
      seed = (seed * 31 + text.charCodeAt(i)) >>> 0;
    }
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };

    const indices = characters.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const orderMap = new Array(characters.length);
    indices.forEach((originalIdx, rank) => {
      orderMap[originalIdx] = rank;
    });
    return orderMap;
  }, [characters, text]);

  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, idx) => {
        const randomRank = randomizedIndices[idx];
        const delay = initialDelay + randomRank * staggerDuration;

        const animationTarget = { opacity: 1, filter: "blur(0px)", y: 0 };
        const initialTarget = { opacity: baseOpacity, filter: "blur(4px)", y: 2 };

        return (
          <motion.span
            key={idx}
            initial={initialTarget}
            animate={
              scrollYProgress
                ? isTriggered ? animationTarget : initialTarget
                : triggerOnView ? undefined : animationTarget
            }
            whileInView={!scrollYProgress && triggerOnView ? animationTarget : undefined}
            viewport={!scrollYProgress && triggerOnView ? { once: false, margin: "-5% 0px -5% 0px" } : undefined}
            transition={{
              duration: charDuration,
              delay: isTriggered || (!scrollYProgress && !triggerOnView) ? delay : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block transform-gpu will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
}
