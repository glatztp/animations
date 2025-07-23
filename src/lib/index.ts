// Animation Hub - Professional React Animation Library
// Main library exports

import AnimatedContentComponent from "./AnimatedContent";

// Export as named export for better compatibility
export const AnimatedContent = AnimatedContentComponent;

// Also provide default export
export { AnimatedContentComponent as default };

// Re-export types for convenience
export type {
  AnimationTypes,
  AnimatedContentProps,
  StaggerOptions,
  ScrollTriggerOptions,
} from "./types";

// Library metadata
export const ANIMATION_HUB_VERSION = "1.0.4";
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
