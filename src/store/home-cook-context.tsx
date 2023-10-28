import { createContext, ReactNode, useState } from 'react';

import { useLocalStorage } from 'src/hooks/useLocalStorage';

import foodItems from '../data.json';
import { MenuItem } from 'src/features/menu/types';
import { OrderItem } from 'src/features/order/types';

interface HomeCookContextType {
  order: OrderItem[];
  setOrder: (order: OrderItem[]) => void;
  menu: MenuItem[];
}

export const HomeCookContext = createContext<HomeCookContextType>({
  order: [],
  menu: [],
  setOrder() {},
});

export const HomeCookProvider = ({ children }: { children: ReactNode }) => {
  const [menu] = useState([...foodItems]);
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
