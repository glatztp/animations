// Animation Hub - TEST VERSION
// Versão simplificada para testar se a biblioteca funciona

import TestComponentDefault from "./TestComponent";

// Export principal para teste
export const AnimatedContent = TestComponentDefault;
export const TestComponent = TestComponentDefault;

// Também disponibilizar como default
export { TestComponentDefault as default };

// Versão de teste
export const ANIMATION_HUB_VERSION = "1.0.2-test";

// Para compatibilidade com a API original
export const SUPPORTED_ANIMATIONS = ["test"];

// Tipos básicos para compatibilidade
export interface AnimatedContentProps {
  children: React.ReactNode;
  animation?: string;
  [key: string]: unknown;
}
