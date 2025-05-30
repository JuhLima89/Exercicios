import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente diretamente no index.js
function App() {
  return (
    <div>
      <h1>Meu app React funcionando!</h1>
    </div>
  );
}

// Renderiza no DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
