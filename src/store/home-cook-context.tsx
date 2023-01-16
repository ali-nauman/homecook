import { createContext, ReactNode, useState } from 'react';

import { useLocalStorage } from 'src/hooks';
import { MenuItem, OrderItem } from 'src/models';

import foodItems from '../data.json';

const getMenu = () => {
  return foodItems.filter(item => item.availableOnDay === new Date().getDay());
};

interface HomeCookContextType {
  order: OrderItem[];
  setOrder: (order: OrderItem[]) => void;
  menu: MenuItem[];
}

export const HomeCookContext = createContext<HomeCookContextType>(
  {} as HomeCookContextType
);

export const HomeCookProvider = ({ children }: { children: ReactNode }) => {
  const [menu] = useState(getMenu());
  const [order, setOrder] = useLocalStorage<OrderItem[]>('order', []);

  const updateOrder = (newOrder: OrderItem[]) => {
    setOrder(newOrder);
  };

  return (
    <HomeCookContext.Provider value={{ order, setOrder: updateOrder, menu }}>
      {children}
    </HomeCookContext.Provider>
  );
};
