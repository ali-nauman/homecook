import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/Home/Home';
import { OrderPage } from './components/Order/Order';
import { CheckoutPage } from './components/Checkout/Checkout';
import { Header } from './components/UI/Header';
import { HomeCookProvider } from './store/home-cook-context';

export const App = () => {
  return (
    <main className="container-fluid bg-dark">
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
    </main>
  );
};
