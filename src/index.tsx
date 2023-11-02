import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeCookProvider } from '@store/home-cook-context';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) throw new Error('Cannot find element with selector #root');

const root = createRoot(container);
root.render(
  <StrictMode>
    <HomeCookProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HomeCookProvider>
  </StrictMode>
);
