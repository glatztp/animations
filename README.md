# Animation Hub 🎨⚡

[![npm version](https://badge.fury.io/js/%40glatztp%2Fanimation-hub.svg)](https://badge.fury.io/js/%40glatztp%2Fanimation-hub)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

Biblioteca profissional de animações corporativas para React com GSAP e TypeScript. Desenvolvida especificamente para ambientes corporativos que demandam performance, acessibilidade e profissionalismo.

## ✨ Características

- 🎯 **12+ Animações Profissionais** - Coleção completa de animações corporativas
- 📱 **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🚀 **Performance Otimizada** - Construído com GSAP para máxima performance
- � **TypeScript Nativo** - Tipagem completa e IntelliSense
- ♿ **Acessível** - Respeita preferências de movimento reduzido
- 🎨 **Altamente Customizável** - Controle total sobre todas as propriedades
- 📦 **Zero Configuração** - Funciona imediatamente após instalação
- 🌙 **Design Corporativo** - Estilos profissionais incluídos

## 🚀 Instalação

```bash
# npm
npm install @glatztp/animation-hub

# yarn
yarn add @glatztp/animation-hub

# pnpm
pnpm add @glatztp/animation-hub
```

### Dependências

```bash
npm install react react-dom gsap
```

## 📖 Uso Básico

```tsx
import { AnimatedContent } from '@glatztp/animation-hub';
import '@glatztp/animation-hub/styles';

// Animação simples
<AnimatedContent animation="fadeIn">
  <div>Meu conteúdo</div>
</AnimatedContent>

// Configurada
<AnimatedContent
  animation="slideUp"
  distance={100}
  duration={1.2}
  delay={0.5}
>
  <div>Conteúdo animado</div>
</AnimatedContent>
```

## 🎪 Animações Disponíveis

| Animação     | Descrição              | Props Úteis              |
| ------------ | ---------------------- | ------------------------ |
| `fadeIn`     | Fade suave             | `duration`, `delay`      |
| `slideUp`    | Desliza de baixo       | `distance`, `duration`   |
| `slideDown`  | Desliza de cima        | `distance`, `duration`   |
| `slideLeft`  | Desliza da direita     | `distance`, `duration`   |
| `slideRight` | Desliza da esquerda    | `distance`, `duration`   |
| `scaleIn`    | Cresce suavemente      | `scale`, `duration`      |
| `rotateIn`   | Rotação + fade         | `rotation`, `duration`   |
| `bounceIn`   | Entrada com bounce     | `duration`, `ease`       |
| `flipIn`     | Flip 3D                | `duration`               |
| `zoomIn`     | Zoom dramático         | `duration`               |
| `morphIn`    | Transformação complexa | `duration`, `ease`       |
| `stagger`    | Sequencial para filhos | `stagger`, `staggerFrom` |

## ⚙️ Props Principais

### Animação

- `animation` - Tipo de animação
- `distance` - Distância do movimento (px)
- `scale` - Escala inicial (0-1)
- `rotation` - Rotação inicial (graus)

### Timing

- `duration` - Duração (segundos)
- `delay` - Atraso (segundos)
- `ease` - Curva de animação

### Scroll

- `enableScroll` - Usa scroll trigger (padrão: true)
- `threshold` - % visibilidade para disparar (padrão: 0.2)
- `once` - Anima apenas uma vez (padrão: true)
- `scrub` - Sincroniza com scroll (padrão: false)

### Stagger

- `stagger` - Intervalo entre filhos (padrão: 0.1)
- `staggerFrom` - Origem ('start' | 'center' | 'end' | 'random')

### Customização Total

- `from` - Estado inicial customizado
- `to` - Estado final customizado

### Props de Div

- `className`, `id`, `style` - Estilização
- `onClick`, `onMouseEnter`, `onMouseLeave` - Eventos

## 💡 Exemplos Avançados

### Sem Scroll (Imediata)

```tsx
<AnimatedContent animation="scaleIn" enableScroll={false} delay={2}>
  <div>Anima após 2s automaticamente</div>
</AnimatedContent>
```

### Stagger (Filhos)

```tsx
<AnimatedContent animation="stagger" stagger={0.2} staggerFrom="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedContent>
```

### Animação Customizada

```tsx
<AnimatedContent
  from={{
    opacity: 0,
    scale: 2,
    rotation: 180,
  }}
  to={{
    opacity: 1,
    scale: 1,
    rotation: 0,
  }}
  duration={2}
  ease="elastic.out(1, 0.3)"
>
  <div>Controle total</div>
</AnimatedContent>
```

### Com Scrub (Segue Scroll)

```tsx
<AnimatedContent animation="slideLeft" scrub={true} distance={200}>
  <div>Move conforme o scroll</div>
</AnimatedContent>
```

## 🔄 Recarregar Animações

O projeto inclui um sistema de reload das animações:

```tsx
const [reloadKey, setReloadKey] = useState(0);

const reloadAnimations = () => {
  setReloadKey((prev) => prev + 1);
};

<AnimatedContent key={reloadKey} animation="fadeIn">
  <div>Animação que pode ser recarregada</div>
</AnimatedContent>;
```

## 🎨 Curvas de Animação

```tsx
ease = "power1.out"; // Suave
ease = "power2.out"; // Médio
ease = "power3.out"; // Forte
ease = "back.out(1.7)"; // Volta
ease = "elastic.out(1, 0.3)"; // Elástico
ease = "bounce.out"; // Quique
```

## 🏗️ Como Funciona

1. **Único Componente** - Apenas AnimatedContent.tsx para todas as animações
2. **Flexível** - Funciona como um div normal com props extras
3. **Scroll Trigger** - Anima quando elemento entra na tela
4. **Customizável** - Props `from`/`to` para controle total
5. **Performance** - Cleanup automático de animações
6. **TypeScript** - Tipagem completa sem erros

## 🚀 Início Rápido

1. Instale o GSAP: `npm install gsap`
2. Copie `AnimatedContent.tsx` para seu projeto
3. Importe e use como um div normal
4. Execute `npm run dev` para ver o demo com reload

## 🎯 Melhorias Implementadas

- ✅ Removidas todas as referências ao BSPay
- ✅ Adicionado sistema de reload das animações
- ✅ Corrigidos todos os erros de TypeScript
- ✅ Melhoradas as props com tipos adequados
- ✅ Estrutura limpa com apenas 1 componente
- ✅ Interface moderna com exemplos práticos
- ✅ Botões de reload em múltiplos locais
- ✅ Demonstração visual de cada animação
- ✅ Código copiável para cada exemplo

**Pronto para usar!** 🎉

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````

"# animations"
