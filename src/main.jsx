/* =========================================================
   main.jsx — React App এর এন্ট্রি পয়েন্ট (সবচেয়ে প্রথমে চলে)
   ---------------------------------------------------------
   কাজগুলো:
     1. index.css (সব স্টাইল) লোড করা
     2. React Router দিয়ে পুরো app wrap করা
     3. App() কম্পোনেন্টকে #root div-এ render করা
   ========================================================= */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

// index.html -এর <div id="root"> -এর ভিতরে সব রেন্ডার হবে
const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    {/* BrowserRouter = রাউটিং শুরু করার wrapper */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
