import type { ReactNode, CSSProperties } from "react";

// Tipos para propriedades de animação GSAP
export interface AnimationProps {
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotation?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  [key: string]: unknown;
}

// Tipos de animação suportados
export type AnimationTypes =
  | "fadeIn" // Fade suave
  | "slideUp" // Desliza de baixo
  | "slideDown" // Desliza de cima
  | "slideLeft" // Desliza da direita
  | "slideRight" // Desliza da esquerda
  | "scaleIn" // Cresce suavemente
  | "rotateIn" // Rotação + fade
  | "bounceIn" // Entrada com bounce
  | "flipIn" // Flip 3D
  | "zoomIn" // Zoom dramático
  | "morphIn" // Transformação complexa
  | "stagger"; // Sequencial para filhos

// Opções para animação stagger
export interface StaggerOptions {
  stagger?: number;
  staggerFrom?: "start" | "center" | "end" | "random";
}

// Opções para scroll trigger
export interface ScrollTriggerOptions {
  enableScroll?: boolean;
  threshold?: number;
  once?: boolean;
  scrub?: boolean;
}

// Props principais do componente AnimatedContent
export interface AnimatedContentProps
  extends StaggerOptions,
    ScrollTriggerOptions {
  children: ReactNode;

  // Tipo de animação
  animation?: AnimationTypes;

  // Controles de movimento
  distance?: number; // Distância do movimento (px)
  scale?: number; // Escala inicial (0-1)
  rotation?: number; // Rotação inicial (graus)

  // Controles de timing
  duration?: number; // Duração da animação (s)
  delay?: number; // Atraso antes de iniciar (s)
  ease?: string; // Curva de animação

  // Props padrão de div
  className?: string;
  id?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;

  // Animação customizada (sobrescreve animation)
  from?: AnimationProps;
  to?: AnimationProps;
}
