import React, { useState } from "react";
import AnimatedContent from "../components/AnimatedContent";
import {
  Sparkle,
  Rocket,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Star,
  Palette,
  Balloon,
  ArrowsClockwise,
  MagnifyingGlass,
  MaskHappy,
  List,
  Package,
  FileCode,
  Play,
  Target,
  Wrench,
  Download,
  Terminal,
  Copy,
  Check,
} from "phosphor-react";

const AnimationDemoPage: React.FC = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const animations = [
    {
      name: "Fade In Elegante",
      description: "Aparição suave e profissional",
      animation: "fadeIn" as const,
      icon: Sparkle,
      gradient: "bg-gradient-to-r from-corporate-700 to-corporate-600",
      props: { duration: 1.2 },
      code: `<AnimatedContent animation="fadeIn" duration={1.2}>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Fade In com Imagem",
          type: "image",
          content:
            "https://images.unsplash.com/photo-1614029348513-86c5b38b2e2f?w=400&h=300&fit=crop",
          props: { duration: 2.0 },
        },
        {
          name: "Fade In Minimalista",
          type: "icon",
          content: Star,
          props: { duration: 0.8 },
        },
        {
          name: "Fade In Card Premium",
          type: "card",
          content: {
            title: "Premium Feature",
            subtitle: "Funcionalidade exclusiva",
          },
          props: { duration: 1.5 },
        },
      ],
    },
    {
      name: "Slide Up Moderno",
      description: "Movimento fluido de baixo para cima",
      animation: "slideUp" as const,
      icon: Rocket,
      gradient: "bg-gradient-to-r from-accent-600 to-accent-700",
      props: { distance: 80, duration: 0.8 },
      code: `<AnimatedContent 
  animation="slideUp" 
  distance={80} 
  duration={0.8}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Slide Up com Avatar",
          type: "image",
          content:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          props: { distance: 120, duration: 1.2 },
        },
        {
          name: "Slide Up Dashboard",
          type: "dashboard",
          content: { metrics: ["150K Users", "99.9% Uptime", "24/7 Support"] },
          props: { distance: 60, duration: 1.0 },
        },
        {
          name: "Slide Up Botão CTA",
          type: "button",
          content: "Começar Agora",
          props: { distance: 40, duration: 0.6 },
        },
      ],
    },
    {
      name: "Slide Down Suave",
      description: "Deslizamento de cima para baixo",
      animation: "slideDown" as const,
      icon: ArrowDown,
      gradient: "bg-gradient-to-r from-corporate-600 to-accent-600",
      props: { distance: 60, duration: 1.0 },
      code: `<AnimatedContent 
  animation="slideDown" 
  distance={60} 
  duration={1.0}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Slide Down Notificação",
          type: "notification",
          content: {
            title: "Nova mensagem!",
            message: "Você tem 3 mensagens não lidas",
          },
          props: { distance: 80, duration: 1.2 },
        },
        {
          name: "Slide Down Menu",
          type: "menu",
          content: ["Home", "Sobre", "Serviços", "Contato"],
          props: { distance: 50, duration: 0.8 },
        },
        {
          name: "Slide Down Banner",
          type: "banner",
          content: "🎉 Promoção especial: 50% OFF em todos os produtos!",
          props: { distance: 70, duration: 1.5 },
        },
      ],
    },
    {
      name: "Slide Left Premium",
      description: "Entrada lateral da direita",
      animation: "slideLeft" as const,
      icon: ArrowLeft,
      gradient: "bg-gradient-to-r from-orange-500 to-red-600",
      props: { distance: 120, duration: 1.2 },
      code: `<AnimatedContent 
  animation="slideLeft" 
  distance={120}
  duration={1.2}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Slide Left Galeria",
          type: "gallery",
          content: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=150&fit=crop",
            "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=200&h=150&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop",
          ],
          props: { distance: 150, duration: 1.0 },
        },
        {
          name: "Slide Left Testimonial",
          type: "testimonial",
          content: {
            quote: "Incrível ferramenta! Revolucionou nosso workflow.",
            author: "João Silva",
            role: "CEO, TechCorp",
          },
          props: { distance: 100, duration: 1.5 },
        },
        {
          name: "Slide Left Stats",
          type: "stats",
          content: { number: "99%", label: "Satisfação" },
          props: { distance: 80, duration: 0.9 },
        },
      ],
    },
    {
      name: "Slide Right Elegante",
      description: "Entrada lateral da esquerda",
      animation: "slideRight" as const,
      icon: ArrowRight,
      gradient: "bg-gradient-to-r from-green-500 to-teal-600",
      props: { distance: 100, duration: 1.0 },
      code: `<AnimatedContent 
  animation="slideRight" 
  distance={100}
  duration={1.0}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Slide Right Produto",
          type: "product",
          content: {
            image:
              "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
            title: "MacBook Pro",
            price: "R$ 12.999",
          },
          props: { distance: 120, duration: 1.3 },
        },
        {
          name: "Slide Right Profile",
          type: "profile",
          content: {
            avatar:
              "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
            name: "Ana Santos",
            role: "Designer UX/UI",
          },
          props: { distance: 90, duration: 1.1 },
        },
        {
          name: "Slide Right Feature",
          type: "feature",
          content: {
            icon: Target,
            title: "Precisão Extrema",
            description: "Resultados com 99.9% de precisão",
          },
          props: { distance: 110, duration: 1.4 },
        },
      ],
    },
    {
      name: "Scale In Dinâmico",
      description: "Crescimento suave com destaque",
      animation: "scaleIn" as const,
      icon: Star,
      gradient: "bg-gradient-to-r from-emerald-500 to-green-600",
      props: { scale: 0.5, duration: 1.0 },
      code: `<AnimatedContent 
  animation="scaleIn" 
  scale={0.5}
  duration={1.0}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Scale In Logo",
          type: "logo",
          content:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop",
          props: { scale: 0.3, duration: 1.5 },
        },
        {
          name: "Scale In Badge",
          type: "badge",
          content: { text: "NOVO", color: "bg-red-500" },
          props: { scale: 0.2, duration: 0.8 },
        },
        {
          name: "Scale In Modal",
          type: "modal",
          content: {
            title: "Confirmação",
            message: "Deseja continuar com esta ação?",
            buttons: ["Cancelar", "Confirmar"],
          },
          props: { scale: 0.4, duration: 1.2 },
        },
      ],
    },
    {
      name: "Rotate In Criativo",
      description: "Rotação suave com fade",
      animation: "rotateIn" as const,
      icon: Palette,
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-700",
      props: { rotation: 45, duration: 1.5 },
      code: `<AnimatedContent 
  animation="rotateIn" 
  rotation={45}
  duration={1.5}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Rotate In Ícone",
          type: "rotating-icon",
          content: ArrowsClockwise,
          props: { rotation: 180, duration: 2.0 },
        },
        {
          name: "Rotate In Card 3D",
          type: "card-3d",
          content: {
            front: "Frente do Card",
            back: "Verso do Card",
          },
          props: { rotation: 90, duration: 1.8 },
        },
      ],
    },
    {
      name: "Bounce In Divertido",
      description: "Entrada com efeito bounce",
      animation: "bounceIn" as const,
      icon: Balloon,
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
      props: { duration: 1.5 },
      code: `<AnimatedContent 
  animation="bounceIn" 
  duration={1.5}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Bounce In Emoji",
          type: "emoji",
          content: "🎉",
          props: { duration: 2.0 },
        },
        {
          name: "Bounce In Balão",
          type: "balloon",
          content: "Parabéns!",
          props: { duration: 1.8 },
        },
      ],
    },
    {
      name: "Flip In 3D",
      description: "Flip tridimensional elegante",
      animation: "flipIn" as const,
      icon: ArrowsClockwise,
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-600",
      props: { duration: 1.0 },
      code: `<AnimatedContent 
  animation="flipIn" 
  duration={1.0}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Flip In Card",
          type: "flip-card",
          content: {
            front:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=250&h=300&fit=crop",
            back: "Informações do Card",
          },
          props: { duration: 1.5 },
        },
      ],
    },
    {
      name: "Zoom In Dramático",
      description: "Zoom de entrada impactante",
      animation: "zoomIn" as const,
      icon: MagnifyingGlass,
      gradient: "bg-gradient-to-r from-pink-500 to-rose-600",
      props: { duration: 1.2 },
      code: `<AnimatedContent 
  animation="zoomIn" 
  duration={1.2}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Zoom In Hero",
          type: "hero",
          content: {
            title: "Bem-vindo",
            subtitle: "À nossa plataforma",
          },
          props: { duration: 2.0 },
        },
      ],
    },
    {
      name: "Morph In Artístico",
      description: "Transformação complexa",
      animation: "morphIn" as const,
      icon: MaskHappy,
      gradient: "bg-gradient-to-r from-violet-600 to-purple-700",
      props: { duration: 2.0 },
      code: `<AnimatedContent 
  animation="morphIn" 
  duration={2.0}
>
  <div>Conteúdo</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Morph In Artwork",
          type: "artwork",
          content:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
          props: { duration: 3.0 },
        },
      ],
    },
    {
      name: "Stagger Sequencial",
      description: "Animação em cascata para filhos",
      animation: "stagger" as const,
      icon: List,
      gradient: "bg-gradient-to-r from-teal-500 to-cyan-600",
      props: { stagger: 0.2, distance: 60 },
      code: `<AnimatedContent 
  animation="stagger" 
  stagger={0.2}
  distance={60}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedContent>`,
      variations: [
        {
          name: "Stagger Cards Grid",
          type: "grid",
          content: Array.from({ length: 6 }, (_, i) => ({
            title: `Card ${i + 1}`,
            image: `https://images.unsplash.com/photo-${
              1500000000 + i * 1000000
            }?w=200&h=150&fit=crop`,
          })),
          props: { stagger: 0.15, distance: 40 },
        },
        {
          name: "Stagger Lista",
          type: "list",
          content: ["React", "TypeScript", "GSAP", "Tailwind", "Vite"],
          props: { stagger: 0.1, distance: 30 },
        },
      ],
    },
  ];

  const reloadAnimations = () => {
    setReloadKey((prev) => prev + 1);
  };

  // Função para gerar código equivalente em Framer Motion
  const generateFramerMotionCode = (
    animation: string,
    props: Record<string, unknown>
  ): string => {
    const {
      duration = 1,
      distance = 50,
      scale = 0.5,
      rotation = 45,
      stagger = 0.2,
    } = props;

    switch (animation) {
      case "fadeIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "slideUp":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: ${distance} }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "slideDown":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: -${distance} }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "slideLeft":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, x: ${distance} }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "slideRight":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, x: -${distance} }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "scaleIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, scale: ${scale} }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "rotateIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, rotate: ${rotation} }}
  animate={{ opacity: 1, rotate: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "bounceIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ 
    duration: ${duration},
    type: "spring",
    bounce: 0.5
  }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "flipIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, rotateY: 90 }}
  animate={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "zoomIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, scale: 0.3 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ 
    duration: ${duration},
    type: "spring",
    stiffness: 200
  }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "morphIn":
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ 
    opacity: 0, 
    scale: 0.8,
    borderRadius: "50%"
  }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    borderRadius: "8px"
  }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;

      case "stagger":
        return `import { motion } from 'framer-motion';

<div>
  {[1, 2, 3].map((item, index) => (
    <motion.div
      key={item}
      initial={{ opacity: 0, y: ${distance} }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * ${stagger}
      }}
    >
      <div>Item {item}</div>
    </motion.div>
  ))}
</div>`;

      default:
        return `import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: ${duration} }}
>
  <div>Conteúdo</div>
</motion.div>`;
    }
  };

  const AnimationDemo: React.FC<{
    name: string;
    description: string;
    animation:
      | "fadeIn"
      | "slideUp"
      | "slideDown"
      | "slideLeft"
      | "slideRight"
      | "scaleIn"
      | "rotateIn"
      | "bounceIn"
      | "flipIn"
      | "zoomIn"
      | "morphIn"
      | "stagger";
    code: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    gradient: string;
    props: Record<string, unknown>;
    variations?: Array<{
      name: string;
      type: string;
      content: unknown;
      props: Record<string, unknown>;
    }>;
  }> = ({
    name,
    description,
    animation,
    code,
    icon: IconComponent,
    gradient,
    props,
    variations = [],
  }) => {
    const [copied, setCopied] = useState(false);
    const [copiedFramer, setCopiedFramer] = useState(false);
    const [demoKey, setDemoKey] = useState(0);
    const [selectedVariation, setSelectedVariation] = useState<number>(-1);
    const [activeCodeTab, setActiveCodeTab] = useState<
      "our-lib" | "framer-motion"
    >("our-lib");

    const copyToClipboard = (
      codeType: "our-lib" | "framer-motion" = "our-lib"
    ) => {
      const codeToClipboard =
        codeType === "our-lib"
          ? code
          : generateFramerMotionCode(animation, props);
      navigator.clipboard.writeText(codeToClipboard);

      if (codeType === "our-lib") {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setCopiedFramer(true);
        setTimeout(() => setCopiedFramer(false), 2000);
      }
    };

    const reloadDemo = () => {
      setDemoKey((prev) => prev + 1);
    };

    const renderVariationContent = (variation: {
      type: string;
      content: unknown;
    }) => {
      const { type, content } = variation;

      switch (type) {
        case "image": {
          return (
            <div className="flex items-center justify-center">
              <img
                src={content as string}
                alt="Demo"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          );
        }

        case "icon": {
          const IconComp = content as React.ComponentType<{
            size?: number;
            className?: string;
          }>;
          return (
            <div className="flex items-center justify-center">
              <div className="p-8 bg-white/10 rounded-xl">
                <IconComp size={48} className="text-white" />
              </div>
            </div>
          );
        }

        case "card": {
          const cardContent = content as { title: string; subtitle: string };
          return (
            <div
              className={`${gradient} text-white p-6 rounded-lg text-center shadow-2xl border border-white/20 max-w-sm mx-auto`}
            >
              <div className="text-xl font-bold mb-2">{cardContent.title}</div>
              <div className="text-sm opacity-90">{cardContent.subtitle}</div>
            </div>
          );
        }

        case "dashboard": {
          const dashContent = content as { metrics: string[] };
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-sm mx-auto">
              <h3 className="text-white text-lg font-bold mb-4">Dashboard</h3>
              <div className="space-y-3">
                {dashContent.metrics.map((metric: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-300">
                      {metric.split(" ")[1]}
                    </span>
                    <span className="text-white font-semibold">
                      {metric.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        case "button":
          return (
            <div className="flex items-center justify-center">
              <button
                className={`${gradient} text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all`}
              >
                {content as string}
              </button>
            </div>
          );

        case "notification": {
          const notContent = content as { title: string; message: string };
          return (
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto border-l-4 border-blue-400">
              <div className="font-semibold">{notContent.title}</div>
              <div className="text-sm opacity-90">{notContent.message}</div>
            </div>
          );
        }

        case "menu": {
          const menuContent = content as string[];
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-xs mx-auto">
              {menuContent.map((item: string, i: number) => (
                <div
                  key={i}
                  className="text-white py-2 px-4 hover:bg-white/10 rounded transition-all cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          );
        }

        case "banner":
          return (
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg text-center shadow-lg">
              {content as string}
            </div>
          );

        case "gallery": {
          const galleryContent = content as string[];
          return (
            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
              {galleryContent.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i}`}
                  className="rounded-lg shadow-md w-full h-20 object-cover"
                />
              ))}
            </div>
          );
        }

        case "testimonial": {
          const testContent = content as {
            quote: string;
            author: string;
            role: string;
          };
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto">
              <div className="text-white italic mb-4">
                "{testContent.quote}"
              </div>
              <div className="text-gray-300 text-sm">
                <div className="font-semibold">{testContent.author}</div>
                <div>{testContent.role}</div>
              </div>
            </div>
          );
        }

        case "stats": {
          const statsContent = content as { number: string; label: string };
          return (
            <div className="text-center">
              <div
                className={`${gradient} text-white p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center mx-auto shadow-lg`}
              >
                <div className="text-3xl font-bold">{statsContent.number}</div>
                <div className="text-sm">{statsContent.label}</div>
              </div>
            </div>
          );
        }

        case "product": {
          const prodContent = content as {
            image: string;
            title: string;
            price: string;
          };
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-xs mx-auto">
              <img
                src={prodContent.image}
                alt={prodContent.title}
                className="rounded-lg mb-3 w-full h-32 object-cover"
              />
              <div className="text-white font-semibold">
                {prodContent.title}
              </div>
              <div className="text-green-400 font-bold">
                {prodContent.price}
              </div>
            </div>
          );
        }

        case "profile": {
          const profContent = content as {
            avatar: string;
            name: string;
            role: string;
          };
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-xs mx-auto text-center">
              <img
                src={profContent.avatar}
                alt={profContent.name}
                className="rounded-full w-20 h-20 mx-auto mb-3 object-cover"
              />
              <div className="text-white font-semibold">{profContent.name}</div>
              <div className="text-gray-400 text-sm">{profContent.role}</div>
            </div>
          );
        }

        case "feature": {
          const featContent = content as {
            icon: React.ComponentType<{ size?: number; className?: string }>;
            title: string;
            description: string;
          };
          const FeatureIcon = featContent.icon;
          return (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-sm mx-auto text-center">
              <div className="mb-4">
                <FeatureIcon size={32} className="text-blue-400 mx-auto" />
              </div>
              <div className="text-white font-semibold mb-2">
                {featContent.title}
              </div>
              <div className="text-gray-400 text-sm">
                {featContent.description}
              </div>
            </div>
          );
        }

        case "grid": {
          const gridContent = content as Array<{
            title: string;
            image: string;
          }>;
          return (
            <div className="grid grid-cols-3 gap-3">
              {gridContent.map((item, i: number) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded mb-2 w-full h-20 object-cover"
                  />
                  <div className="text-white text-xs font-semibold">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        case "list": {
          const listContent = content as string[];
          return (
            <div className="space-y-2">
              {listContent.map((item: string, i: number) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-white text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          );
        }

        default:
          return (
            <div
              className={`${gradient} text-white p-6 rounded-lg text-center shadow-2xl border border-white/20`}
            >
              <div className="text-xl font-bold mb-2">{name}</div>
              <div className="text-sm opacity-90">Exemplo de conteúdo</div>
            </div>
          );
      }
    };

    return (
      <AnimatedContent
        key={reloadKey}
        animation="slideUp"
        className="mb-8 sm:mb-12"
      >
        <div className="glass-card border border-corporate-700/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-accent-500/20 transition-all duration-500 hover-scale">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="p-2 sm:p-3 bg-gradient-accent rounded-lg sm:rounded-xl shadow-glow-sm flex-shrink-0">
                  <IconComponent size={24} className="text-white sm:hidden" />
                  <IconComponent
                    size={32}
                    className="text-white hidden sm:block"
                  />
                </div>
                <div className="min-w-0 flex-1 sm:flex-initial">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {name}
                  </h3>
                  <p className="text-corporate-400 text-sm sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={reloadDemo}
                  className="btn-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-2 hover-lift text-sm flex-1 sm:flex-initial justify-center"
                >
                  <ArrowsClockwise size={14} className="sm:hidden" />
                  <ArrowsClockwise size={16} className="hidden sm:block" />
                  <span className="hidden sm:inline">Reload</span>
                </button>
              </div>
            </div>

            {/* Variações */}
            {variations.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Variações:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedVariation(-1)}
                    className={`px-3 py-1 rounded-lg text-sm transition-all hover-lift ${
                      selectedVariation === -1
                        ? "bg-gradient-accent text-white shadow-glow-sm"
                        : "bg-corporate-800/50 text-corporate-300 hover:bg-corporate-700/50"
                    }`}
                  >
                    Padrão
                  </button>
                  {variations.map((variation, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariation(i)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all hover-lift ${
                        selectedVariation === i
                          ? "bg-gradient-accent text-white shadow-glow-sm"
                          : "bg-corporate-800/50 text-corporate-300 hover:bg-corporate-700/50"
                      }`}
                    >
                      {variation.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              {/* Preview */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  <Play size={18} className="sm:hidden" />
                  <Play size={20} className="hidden sm:block" />
                  Preview:
                </h4>
                <div className="bg-dark-900/50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 min-h-[180px] sm:min-h-[200px] flex items-center justify-center border border-corporate-700/20">
                  {selectedVariation >= 0 ? (
                    <AnimatedContent
                      key={`${demoKey}-${animation}-var-${selectedVariation}`}
                      animation={animation}
                      {...variations[selectedVariation].props}
                      className={
                        animation === "stagger" ? "space-y-3 sm:space-y-4" : ""
                      }
                    >
                      {renderVariationContent(variations[selectedVariation])}
                    </AnimatedContent>
                  ) : animation === "stagger" ? (
                    <AnimatedContent
                      key={`${demoKey}-${animation}`}
                      animation={animation}
                      {...props}
                      className="space-y-3 sm:space-y-4 w-full max-w-sm"
                    >
                      <div
                        className={`${gradient} text-white p-3 sm:p-4 rounded-lg text-center shadow-lg border border-white/10 text-sm sm:text-base`}
                      >
                        Item 1
                      </div>
                      <div
                        className={`${gradient} text-white p-3 sm:p-4 rounded-lg text-center shadow-lg border border-white/10 text-sm sm:text-base`}
                      >
                        Item 2
                      </div>
                      <div
                        className={`${gradient} text-white p-3 sm:p-4 rounded-lg text-center shadow-lg border border-white/10 text-sm sm:text-base`}
                      >
                        Item 3
                      </div>
                    </AnimatedContent>
                  ) : (
                    <AnimatedContent
                      key={`${demoKey}-${animation}`}
                      animation={animation}
                      {...props}
                    >
                      <div
                        className={`${gradient} text-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border border-white/20 max-w-sm mx-auto`}
                      >
                        <div className="text-lg sm:text-xl font-bold mb-2">
                          {name}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">
                          Exemplo de conteúdo
                        </div>
                      </div>
                    </AnimatedContent>
                  )}
                </div>
              </div>

              {/* Code */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    <FileCode size={18} className="sm:hidden" />
                    <FileCode size={20} className="hidden sm:block" />
                    Código:
                  </h4>

                  {/* Tabs para alternar entre bibliotecas */}
                  <div className="flex bg-corporate-800/50 rounded-lg p-1">
                    <button
                      onClick={() => setActiveCodeTab("our-lib")}
                      className={`px-3 py-1 rounded text-xs sm:text-sm transition-all ${
                        activeCodeTab === "our-lib"
                          ? "bg-gradient-accent text-white shadow-glow-sm"
                          : "text-corporate-300 hover:text-white"
                      }`}
                    >
                      Nossa Lib
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("framer-motion")}
                      className={`px-3 py-1 rounded text-xs sm:text-sm transition-all ${
                        activeCodeTab === "framer-motion"
                          ? "bg-gradient-accent text-white shadow-glow-sm"
                          : "text-corporate-300 hover:text-white"
                      }`}
                    >
                      Framer Motion
                    </button>
                  </div>
                </div>

                <div className="bg-dark-900/80 rounded-lg sm:rounded-xl border border-corporate-700/30 overflow-hidden">
                  {/* Header com botão de copiar */}
                  <div className="flex items-center justify-between p-3 border-b border-corporate-700/30 bg-corporate-900/30">
                    <div className="flex items-center gap-2">
                      {activeCodeTab === "our-lib" ? (
                        <>
                          <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                          <span className="text-corporate-300 text-xs sm:text-sm font-medium">
                            @gltz-packages/animation-hub
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-corporate-300 text-xs sm:text-sm font-medium">
                            framer-motion
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => copyToClipboard(activeCodeTab)}
                      className={`px-2 py-1 rounded text-xs transition-all flex items-center gap-1 ${
                        (activeCodeTab === "our-lib" && copied) ||
                        (activeCodeTab === "framer-motion" && copiedFramer)
                          ? "text-green-400"
                          : "text-corporate-400 hover:text-white"
                      }`}
                    >
                      {(activeCodeTab === "our-lib" && copied) ||
                      (activeCodeTab === "framer-motion" && copiedFramer) ? (
                        <>
                          <Check size={12} />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Conteúdo do código */}
                  <div className="p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-accent-300 text-xs sm:text-sm font-mono leading-relaxed">
                      <code>
                        {activeCodeTab === "our-lib"
                          ? code
                          : generateFramerMotionCode(animation, props)}
                      </code>
                    </pre>
                  </div>

                  {/* Footer com informações adicionais */}
                  <div className="px-3 pb-3">
                    {activeCodeTab === "our-lib" ? (
                      <div className="text-xs text-corporate-400 bg-corporate-900/20 rounded p-2">
                        💡 <strong>Nossa biblioteca:</strong> Otimizada,
                        TypeScript nativo, 12+ animações profissionais
                      </div>
                    ) : (
                      <div className="text-xs text-corporate-400 bg-purple-900/20 rounded p-2">
                        💡 <strong>Framer Motion:</strong> Popular biblioteca de
                        animações para React
                        <br />
                        📦 Instalação:{" "}
                        <code className="text-purple-300">
                          npm install framer-motion
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    );
  };

  return (
    <div className="min-h-screen bg-dark-950 pattern-overlay">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-corporate-700/20">
        <div className="container-responsive py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Rocket size={16} className="text-white sm:hidden" />
                <Rocket size={20} className="text-white hidden sm:block" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">
                  AnimationHub
                </h1>
                <p className="text-xs text-corporate-400 hidden sm:block">
                  Professional Animations
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="#demos"
                className="text-corporate-300 hover:text-white transition-colors text-sm sm:text-base hidden md:block"
              >
                Demonstrações
              </a>
              <a
                href="#install"
                className="text-corporate-300 hover:text-white transition-colors text-sm sm:text-base hidden md:block"
              >
                Instalação
              </a>
              <button className="btn-primary px-3 py-1.5 sm:px-6 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">
                Começar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-corporate-900/40 via-dark-900/60 to-accent-950/40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-soft"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <AnimatedContent
            key={`${reloadKey}-hero`}
            animation="fadeIn"
            duration={1.2}
          >
            <div className="space-y-8">
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Animações
                  <span className="block text-4xl md:text-5xl text-corporate-300 font-light">
                    de Alto Impacto
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-corporate-300 max-w-3xl mx-auto leading-relaxed">
                  Biblioteca profissional de animações fluidas e responsivas
                  para aplicações corporativas modernas
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-corporate-400">Animações</div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-white">
                    TypeScript
                  </div>
                  <div className="text-corporate-400">Suporte Completo</div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-corporate-400">Responsivo</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
                  <span className="flex items-center gap-3">
                    <Play size={20} />
                    Ver Demonstrações
                  </span>
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold hover-lift">
                  <span className="flex items-center gap-3">
                    <Download size={20} />
                    Baixar Componentes
                  </span>
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-corporate-900/20 backdrop-blur-sm">
        <div className="container-responsive max-w-6xl mx-auto">
          <AnimatedContent
            animation="slideUp"
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Por que escolher nossa biblioteca?
            </h2>
            <p className="text-lg sm:text-xl text-corporate-300 max-w-3xl mx-auto">
              Desenvolvida especificamente para ambientes corporativos que
              demandam performance e profissionalismo
            </p>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedContent animation="stagger" stagger={0.2}>
              <div className="glass-card p-6 sm:p-8 rounded-xl hover-lift smooth-transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Target size={24} className="text-white sm:hidden" />
                  <Target size={32} className="text-white hidden sm:block" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Precisão Técnica
                </h3>
                <p className="text-corporate-300 text-sm sm:text-base">
                  Animações desenvolvidas com GSAP para máxima performance e
                  controle granular
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-xl hover-lift smooth-transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Wrench size={24} className="text-white sm:hidden" />
                  <Wrench size={32} className="text-white hidden sm:block" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Altamente Customizável
                </h3>
                <p className="text-corporate-300 text-sm sm:text-base">
                  Parâmetros flexíveis que se adaptam às necessidades
                  específicas do seu projeto
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-xl hover-lift smooth-transition">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Terminal size={24} className="text-white sm:hidden" />
                  <Terminal size={32} className="text-white hidden sm:block" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  TypeScript Nativo
                </h3>
                <p className="text-corporate-300 text-sm sm:text-base">
                  Intellisense completo e tipagem forte para desenvolvimento
                  mais seguro
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Animation Demos Section */}
      <section id="demos" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container-responsive max-w-7xl mx-auto">
          <AnimatedContent
            animation="slideUp"
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Demonstrações Interativas
            </h2>
            <p className="text-lg sm:text-xl text-corporate-300 max-w-3xl mx-auto mb-6 sm:mb-8">
              Explore nossa coleção completa de animações corporativas
              profissionais
            </p>
            <div className="flex justify-center">
              <button
                onClick={reloadAnimations}
                className="btn-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 hover-lift text-sm sm:text-base"
              >
                <ArrowsClockwise size={18} className="sm:hidden" />
                <ArrowsClockwise size={20} className="hidden sm:block" />
                <span className="hidden sm:inline">Recarregar Todas as </span>
                Animações
              </button>
            </div>
          </AnimatedContent>

          <div className="space-y-8">
            {animations.map((animation, index) => (
              <AnimationDemo
                key={`${reloadKey}-${index}`}
                name={animation.name}
                description={animation.description}
                animation={animation.animation}
                code={animation.code}
                icon={animation.icon}
                gradient={animation.gradient}
                props={animation.props}
                variations={animation.variations}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NPM Installation Section */}
      <section
        id="install"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-corporate-900/30 backdrop-blur-sm"
      >
        <div className="container-responsive max-w-6xl mx-auto">
          <AnimatedContent
            animation="slideUp"
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="flex items-center justify-center gap-3 flex-wrap">
                <Package
                  size={36}
                  className="text-accent-400 hidden sm:block"
                />
                <Package size={28} className="text-accent-400 sm:hidden" />
                Instalação via NPM
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-corporate-300 max-w-3xl mx-auto">
              Instale nossa biblioteca em segundos e comece a usar animações
              profissionais
            </p>
          </AnimatedContent>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Instalação */}
            <AnimatedContent animation="slideLeft" className="space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Terminal size={24} className="text-accent-400" />
                  1. Instalar Pacote
                </h3>

                <div className="space-y-4">
                  <div className="bg-dark-900/80 rounded-lg p-4 border border-corporate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-corporate-400 text-sm">npm</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "npm install @animationhub/react-gsap"
                          )
                        }
                        className="text-corporate-400 hover:text-white transition-colors p-1"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <code className="text-accent-300 font-mono text-sm sm:text-base">
                      npm install @animationhub/react-gsap
                    </code>
                  </div>

                  <div className="bg-dark-900/80 rounded-lg p-4 border border-corporate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-corporate-400 text-sm">yarn</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "yarn add @animationhub/react-gsap"
                          )
                        }
                        className="text-corporate-400 hover:text-white transition-colors p-1"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <code className="text-accent-300 font-mono text-sm sm:text-base">
                      yarn add @animationhub/react-gsap
                    </code>
                  </div>

                  <div className="bg-dark-900/80 rounded-lg p-4 border border-corporate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-corporate-400 text-sm">pnpm</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "pnpm add @animationhub/react-gsap"
                          )
                        }
                        className="text-corporate-400 hover:text-white transition-colors p-1"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <code className="text-accent-300 font-mono text-sm sm:text-base">
                      pnpm add @animationhub/react-gsap
                    </code>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Uso Rápido */}
            <AnimatedContent animation="slideRight" className="space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Play size={24} className="text-accent-400" />
                  2. Uso Imediato
                </h3>

                <div className="bg-dark-900/80 rounded-lg p-4 border border-corporate-700/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-corporate-400 text-sm">App.tsx</span>
                    <button
                      onClick={() =>
                        navigator.clipboard
                          .writeText(`import { AnimatedContent } from '@animationhub/react-gsap';

function App() {
  return (
    <AnimatedContent animation="fadeIn">
      <h1>Olá Mundo!</h1>
    </AnimatedContent>
  );
}`)
                      }
                      className="text-corporate-400 hover:text-white transition-colors p-1"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <pre className="text-accent-300 font-mono text-xs sm:text-sm overflow-x-auto">
                    {`import { AnimatedContent } from '@animationhub/react-gsap';

function App() {
  return (
    <AnimatedContent animation="fadeIn">
      <h1>Olá Mundo!</h1>
    </AnimatedContent>
  );
}`}
                  </pre>
                </div>

                <div className="mt-4 p-4 bg-accent-950/30 border border-accent-700/30 rounded-lg">
                  <p className="text-accent-300 text-sm flex items-start gap-2">
                    <span className="text-accent-400 font-bold">✨</span>
                    Pronto! Sua aplicação agora tem animações profissionais.
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Features do Pacote NPM */}
          <AnimatedContent
            animation="stagger"
            stagger={0.15}
            className="mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  Zero Config
                </h4>
                <p className="text-corporate-400 text-xs sm:text-sm">
                  Funciona imediatamente sem configuração
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Wrench size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  TypeScript
                </h4>
                <p className="text-corporate-400 text-xs sm:text-sm">
                  Tipagem completa incluída
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Rocket size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  Otimizado
                </h4>
                <p className="text-corporate-400 text-xs sm:text-sm">
                  Bundle pequeno e performance máxima
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Terminal size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  Tree Shaking
                </h4>
                <p className="text-corporate-400 text-xs sm:text-sm">
                  Importe apenas o que usar
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedContent
            key={`${reloadKey}-features-title`}
            animation="fadeIn"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Rocket size={40} className="text-yellow-400" />
              Como Usar
            </h2>
          </AnimatedContent>

          <AnimatedContent
            key={`${reloadKey}-features`}
            animation="stagger"
            stagger={0.15}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <Package size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  1. Instalar
                </h3>
                <div className="bg-black/50 rounded p-3 mb-3 border border-gray-700">
                  <code className="text-green-400 text-sm">
                    npm install gsap
                  </code>
                </div>
                <p className="text-gray-400 text-sm">
                  Instale o GSAP no seu projeto
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <FileCode size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Copiar</h3>
                <p className="text-gray-400">
                  Copie o componente AnimatedContent.tsx para seu projeto
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <Rocket size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Usar</h3>
                <div className="bg-black/50 rounded p-3 mb-3 border border-gray-700">
                  <code className="text-green-400 text-xs">
                    {'<AnimatedContent animation="fadeIn">'}
                  </code>
                </div>
                <p className="text-gray-400 text-sm">Use como um div comum</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <Target size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fácil de Usar
                </h3>
                <p className="text-gray-400">
                  Funciona como um div comum com props extras para animação
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <Palette size={32} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Customizável
                </h3>
                <p className="text-gray-400">
                  Props from/to para controle total das animações
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="mb-4">
                  <Wrench size={32} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  TypeScript
                </h3>
                <p className="text-gray-400">
                  Tipagem completa para desenvolvimento seguro
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent
            key={`${reloadKey}-quickstart`}
            animation="slideUp"
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Terminal size={40} className="text-green-400" />
              Exemplos de Uso
            </h2>
          </AnimatedContent>

          <AnimatedContent
            key={`${reloadKey}-code-example`}
            animation="fadeIn"
            delay={0.5}
          >
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`// Uso básico
<AnimatedContent animation="fadeIn">
  <div>Seu conteúdo aqui</div>
</AnimatedContent>

// Com configurações
<AnimatedContent 
  animation="slideUp"
  distance={100}
  duration={1.2}
  delay={0.5}
>
  <div>Conteúdo animado</div>
</AnimatedContent>

// Sem scroll (imediato)
<AnimatedContent 
  animation="scaleIn"
  enableScroll={false}
  delay={2}
>
  <div>Anima após 2s</div>
</AnimatedContent>

// Totalmente customizado
<AnimatedContent
  from={{ opacity: 0, scale: 2, rotation: 180 }}
  to={{ opacity: 1, scale: 1, rotation: 0 }}
  duration={2}
  ease="elastic.out(1, 0.3)"
>
  <div>Controle total</div>
</AnimatedContent>`}
              </pre>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedContent
            key={`${reloadKey}-install-title`}
            animation="slideUp"
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Download size={40} className="text-blue-400" />
              Guia de Instalação
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Configure o AnimatedContent em seu projeto em poucos passos
            </p>
          </AnimatedContent>

          <AnimatedContent
            key={`${reloadKey}-install-steps`}
            animation="stagger"
            stagger={0.2}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Passo 1: Instalar GSAP */}
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Package size={32} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      1. Instalar GSAP
                    </h3>
                    <p className="text-blue-300">
                      Adicione o GSAP ao seu projeto
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Terminal</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText("npm install gsap")
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <code className="text-green-400">npm install gsap</code>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">ou com Yarn</span>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText("yarn add gsap")
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <code className="text-green-400">yarn add gsap</code>
                  </div>
                </div>
              </div>

              {/* Passo 2: Baixar Componente */}
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Download size={32} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      2. Baixar Componente
                    </h3>
                    <p className="text-purple-300">
                      Copie o AnimatedContent.tsx
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Copie o arquivo{" "}
                    <code className="bg-black/50 px-2 py-1 rounded text-purple-400">
                      AnimatedContent.tsx
                    </code>{" "}
                    para sua pasta de componentes
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                    <code className="text-purple-400 text-sm">
                      src/components/AnimatedContent.tsx
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Estrutura do Projeto */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileCode size={28} className="text-green-400" />
                Estrutura Recomendada do Projeto
              </h3>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
                <pre className="text-green-400 text-sm">
                  {`src/
├── components/
│   └── AnimatedContent.tsx    # Componente principal
├── pages/
│   └── HomePage.tsx          # Suas páginas
└── App.tsx                   # App principal`}
                </pre>
              </div>
            </div>

            {/* Exemplo Completo */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Play size={28} className="text-green-400" />
                Exemplo Completo de Uso
              </h3>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-700 overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">App.tsx</span>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(`import React from 'react';
import AnimatedContent from './components/AnimatedContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <AnimatedContent animation="fadeIn" duration={1.5}>
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">
            Bem-vindo ao Meu Site
          </h1>
          <p className="text-gray-400">
            Site com animações incríveis
          </p>
        </section>
      </AnimatedContent>

      {/* Cards Section */}
      <AnimatedContent animation="stagger" stagger={0.2} distance={50}>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 1</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 2</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 3</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
        </div>
      </AnimatedContent>

    </div>
  );
}

export default App;`)
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                <pre className="text-green-400 text-sm">
                  {`import React from 'react';
import AnimatedContent from './components/AnimatedContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <AnimatedContent animation="fadeIn" duration={1.5}>
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">
            Bem-vindo ao Meu Site
          </h1>
          <p className="text-gray-400">
            Site com animações incríveis
          </p>
        </section>
      </AnimatedContent>

      {/* Cards Section */}
      <AnimatedContent animation="stagger" stagger={0.2} distance={50}>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 1</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 2</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-white text-xl mb-2">Card 3</h3>
            <p className="text-gray-400">Conteúdo do card</p>
          </div>
        </div>
      </AnimatedContent>

    </div>
  );
}

export default App;`}
                </pre>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-corporate-950/80 backdrop-blur-sm border-t border-corporate-700/20">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedContent key={`${reloadKey}-footer`} animation="fadeIn">
            <div className="space-y-6">
              <div className="flex justify-center items-center gap-4 text-corporate-400">
                <span>Desenvolvido com</span>
                <span className="text-accent-400 text-xl">⚡</span>
                <span>tecnologias modernas</span>
              </div>
              <div className="flex justify-center items-center gap-6 text-sm">
                <span className="glass-card px-4 py-2 rounded-full text-white border border-corporate-700/20">
                  GSAP
                </span>
                <span className="glass-card px-4 py-2 rounded-full text-white border border-corporate-700/20">
                  React
                </span>
                <span className="glass-card px-4 py-2 rounded-full text-white border border-corporate-700/20">
                  TypeScript
                </span>
                <span className="glass-card px-4 py-2 rounded-full text-white border border-corporate-700/20">
                  Tailwind
                </span>
              </div>
              <div className="text-corporate-500 text-sm">
                © 2025 AnimationHub - Soluções corporativas em animação
              </div>
            </div>
          </AnimatedContent>
        </div>
      </footer>
    </div>
  );
};

export default AnimationDemoPage;
