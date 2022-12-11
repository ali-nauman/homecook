import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './components/Menu/Menu';
import { Order } from './components/Order/Order';
import { Checkout } from './components/Checkout/Checkout';
import { Header } from './components/UI/Header';
import { HomeCookProvider } from './store/home-cook-context';

export const App = () => {
  return (
    <main className="container-fluid bg-dark min-vh-100">
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
