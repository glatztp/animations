// Animation Hub - Professional React Animation Library
// Main library exports

export { default as AnimatedContent } from "./AnimatedContent";

// Re-export types for convenience
export type {
  AnimationTypes,
  AnimatedContentProps,
  StaggerOptions,
  ScrollTriggerOptions,
} from "./types";

// Library metadata
export const ANIMATION_HUB_VERSION = "1.0.0";
export const SUPPORTED_ANIMATIONS = [
  "fadeIn",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleIn",
  "rotateIn",
  "bounceIn",
  "flipIn",
  "zoomIn",
  "morphIn",
  "stagger",
] as const;
