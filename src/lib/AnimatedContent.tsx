import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AnimatedContentProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  animation = "fadeIn",
  distance = 60,
  scale = 0.8,
  rotation = 0,
  duration = 0.8,
  delay = 0,
  ease = "power2.out",
  enableScroll = true,
  threshold = 0.2,
  once = true,
  scrub = false,
  stagger = 0.1,
  staggerFrom = "start",
  className = "",
  id,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  from,
  to,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Se há animação customizada, usar from/to
    if (from && to) {
      gsap.set(el, from);

      if (enableScroll) {
        gsap.to(el, {
          ...to,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
            scrub: scrub,
          },
        });
      } else {
        gsap.to(el, { ...to, duration, delay, ease });
      }

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
        gsap.killTweensOf(el);
      };
    }

    // Animações pré-definidas
    const getAnimationProps = () => {
      switch (animation) {
        case "fadeIn":
          return {
            from: { opacity: 0 },
            to: { opacity: 1 },
          };

        case "slideUp":
          return {
            from: { opacity: 0, y: distance },
            to: { opacity: 1, y: 0 },
          };

        case "slideDown":
          return {
            from: { opacity: 0, y: -distance },
            to: { opacity: 1, y: 0 },
          };

        case "slideLeft":
          return {
            from: { opacity: 0, x: distance },
            to: { opacity: 1, x: 0 },
          };

        case "slideRight":
          return {
            from: { opacity: 0, x: -distance },
            to: { opacity: 1, x: 0 },
          };

        case "scaleIn":
          return {
            from: { opacity: 0, scale },
            to: { opacity: 1, scale: 1 },
          };

        case "rotateIn":
          return {
            from: { opacity: 0, rotation: rotation || 45, scale: 0.9 },
            to: { opacity: 1, rotation: 0, scale: 1 },
          };

        case "bounceIn":
          return {
            from: { opacity: 0, scale: 0.3 },
            to: { opacity: 1, scale: 1 },
            ease: "bounce.out",
          };

        case "flipIn":
          return {
            from: { opacity: 0, rotationY: 90, scale: 0.8 },
            to: { opacity: 1, rotationY: 0, scale: 1 },
          };

        case "zoomIn":
          return {
            from: { opacity: 0, scale: 2 },
            to: { opacity: 1, scale: 1 },
          };

        case "morphIn":
          return {
            from: { opacity: 0, scale: 0.5, rotation: 180, y: distance },
            to: { opacity: 1, scale: 1, rotation: 0, y: 0 },
            ease: "back.out(1.7)",
          };

        default:
          return {
            from: { opacity: 0 },
            to: { opacity: 1 },
          };
      }
    };

    const animProps = getAnimationProps();
    const finalEase = animProps.ease || ease;

    // Configurar estado inicial
    gsap.set(el, animProps.from);

    if (animation === "stagger") {
      // Animação stagger para filhos
      const children = Array.from(el.children);
      gsap.set(children, { opacity: 0, y: distance });

      if (enableScroll) {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          ease: finalEase,
          stagger: {
            amount: stagger,
            from: staggerFrom,
          },
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        });
      } else {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: finalEase,
          stagger: {
            amount: stagger,
            from: staggerFrom,
          },
        });
      }
    } else {
      // Animação normal
      if (enableScroll) {
        gsap.to(el, {
          ...animProps.to,
          duration,
          delay,
          ease: finalEase,
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
            scrub: scrub,
          },
        });
      } else {
        gsap.to(el, {
          ...animProps.to,
          duration,
          delay,
          ease: finalEase,
        });
      }
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
      gsap.killTweensOf(el);
      gsap.killTweensOf(el.children);
    };
  }, [
    animation,
    distance,
    scale,
    rotation,
    duration,
    delay,
    ease,
    enableScroll,
    threshold,
    once,
    scrub,
    stagger,
    staggerFrom,
    from,
    to,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      id={id}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
