import React, { createContext, useState } from 'react';

import { foodItems } from '../Data/FoodItems';

const getMenu = () => {
  return foodItems.filter(
    (item) => item.availableOnDay === new Date().getDay()
  );
};

export const HomeCookContext = createContext({
  order: [],
  setOrder: () => {},
  menu: [],
});

export const HomeCookProvider = ({ children }) => {
  const [menu] = useState(getMenu());
  const [order, setOrder] = useState([]);

  const updateOrder = (newOrder) => {
    setOrder(newOrder);
  };

  return (
    <HomeCookContext.Provider value={{ order, setOrder: updateOrder, menu }}>
      {children}
    </HomeCookContext.Provider>
  );
};
