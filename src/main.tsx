import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const safeFallback = () => {
  rootElement.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#05060b;color:#fff;font-family:Arial,sans-serif;padding:24px;text-align:center;">
      <div>
        <h1 style="font-size:2rem;margin-bottom:12px;">AIX8C</h1>
        <p style="opacity:.85;margin-bottom:16px;">Estamos iniciando sua experiência. Se a tela permanecer escura, recarregue.</p>
        <button onclick="window.location.reload()" style="padding:10px 16px;border-radius:999px;border:none;background:linear-gradient(90deg,#f59e0b,#fbbf24);font-weight:700;cursor:pointer;">Recarregar</button>
      </div>
    </div>
  `;
};

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  window.setTimeout(() => {
    if (rootElement.childElementCount === 0) safeFallback();
  }, 3500);
} catch (error) {
  console.error('Fatal boot error:', error);
  safeFallback();
}
