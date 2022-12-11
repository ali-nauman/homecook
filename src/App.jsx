import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { OrderPage } from './components/OrderPage';
import { CheckoutPage } from './components/CheckoutPage';
import { Header } from './components/Header';
import { HomeCookProvider } from './store/home-cook-context';

export const App = () => {
  return (
    <HomeCookProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </HomeCookProvider>
  );
};
