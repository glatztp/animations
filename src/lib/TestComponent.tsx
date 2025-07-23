import React from "react";

// Componente de teste simples para verificar se a biblioteca funciona
const TestComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "2px solid #007acc",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
      }}
    >
      <p style={{ margin: "0 0 8px 0", fontWeight: "bold", color: "#007acc" }}>
        🎉 Biblioteca @gltz-packages/animation-hub funcionando!
      </p>
      {children}
    </div>
  );
};

export default TestComponent;
