import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Checkout, Header, Menu, Order } from 'src/components';
import { HomeCookProvider } from 'src/store';

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
