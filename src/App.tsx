import { Route, Routes } from 'react-router-dom';

import { Header } from 'src/components/Header';
import { Checkout } from './features/checkout/Checkout';
import { Menu } from './features/menu/Menu';
import { Order } from './features/order/Order';

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-dark text-white min-vh-100">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </main>
    </>
  );
};
