import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
if (!container) throw new Error('Cannot find element with selector #root');

const root = createRoot(container);
root.render(<App />);
