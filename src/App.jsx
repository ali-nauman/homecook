import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { OrderPage } from './components/OrderPage';
import { CheckoutPage } from './components/CheckoutPage';
import { Header } from './components/Header';
import { foodItems } from './Data/FoodItems';

const getMenu = () => {
  return foodItems.filter(
    (item) => item.availableOnDay === new Date().getDay()
  );
};

export const App = () => {
  const [order, setOrder] = useState([]);
  const [menu, setMenu] = useState(() => getMenu());

  const addToOrder = (item, servingSize) => {
    setOrder((currentOrder) => {
      const newOrder = [...currentOrder];
      const desiredItem = currentOrder.find(
        (orderItem) => orderItem.id === item.id
      );

      if (desiredItem) {
        desiredItem.quantity = servingSize / item.serving;
      } else {
        item.quantity = servingSize / item.serving;
        newOrder.push(item);
      }

      return newOrder;
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/order"
          element={<OrderPage orderItems={order}></OrderPage>}
        />
        <Route
          path="/"
          element={
            <HomePage
              menu={menu}
              onClick={(item, quantity) => addToOrder(item, quantity)}
            ></HomePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
