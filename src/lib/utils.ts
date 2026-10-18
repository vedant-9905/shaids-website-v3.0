import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function for merging Tailwind classes safely.
 * This is widely used by UI libraries (Aceternity, MagicUI, Shadcn)
 * to handle conditional classnames alongside Tailwind's class conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
