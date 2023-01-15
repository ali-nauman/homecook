import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

import { useLocalStorage } from 'src/hooks';

import foodItems from '../data.json';

const getMenu = () => {
  return foodItems.filter(item => item.availableOnDay === new Date().getDay());
};

export const HomeCookContext = createContext({
  order: [],
  setOrder: () => {},
  menu: [],
});

export const HomeCookProvider = ({ children }) => {
  const [menu] = useState(getMenu());
  const [order, setOrder] = useLocalStorage('order', []);

  const updateOrder = newOrder => {
    setOrder(newOrder);
  };

  return (
    <HomeCookContext.Provider value={{ order, setOrder: updateOrder, menu }}>
      {children}
    </HomeCookContext.Provider>
  );
};

HomeCookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
