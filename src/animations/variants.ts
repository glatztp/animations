import type { Variants } from 'framer-motion';

// Animações de Entrada (Fade)
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Animações de Slide
export const slideInLeftVariants: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { x: -100, opacity: 0 }
};

export const slideInRightVariants: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { x: 100, opacity: 0 }
};

export const slideInUpVariants: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { y: 100, opacity: 0 }
};

export const slideInDownVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { y: -100, opacity: 0 }
};

// Animações de Escala
export const scaleInVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100 
    }
  },
  exit: { scale: 0, opacity: 0 }
};

export const scaleOutVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: { 
    scale: 1.1, 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { scale: 0, opacity: 0 }
};

export const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Animações de Rotação
export const rotateInVariants: Variants = {
  initial: { rotate: -180, opacity: 0 },
  animate: { 
    rotate: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { rotate: 180, opacity: 0 }
};

export const spinVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Animações de Bounce
export const bounceInVariants: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.6
    }
  },
  exit: { y: -100, opacity: 0 }
};

export const bounceVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Animações de Stagger para listas
export const staggerContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItemVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Animações de Hover
export const hoverVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95
  }
};

// Animações de Loading
export const loadingSpinVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const loadingDotsVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Animações Avançadas
export const flipVariants: Variants = {
  initial: { rotateY: 0 },
  animate: {
    rotateY: 180,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: { rotateY: 0 }
};

export const slideAndFadeVariants: Variants = {
  initial: { x: -50, opacity: 0, scale: 0.9 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { x: 50, opacity: 0, scale: 0.9 }
};

export const elasticVariants: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  exit: { scale: 0 }
};

export const shakeVariants: Variants = {
  initial: { x: 0 },
  animate: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  }
};

export const wobbleVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.8 }
  }
};
