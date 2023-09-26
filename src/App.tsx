import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'src/components';
import { HomeCookProvider } from 'src/store';
import { Checkout } from './features/checkout/Checkout';
import { Menu } from './features/menu/Menu';
import { Order } from './features/order/Order';

export const App = () => {
  return (
    <main className="bg-dark text-white min-vh-100">
      <HomeCookProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="/" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </HomeCookProvider>
    </main>
  );
};
