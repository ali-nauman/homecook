import { createContext, ReactNode, useCallback, useState } from 'react';

import { OrderItem } from '@features/order/types';
import { MenuItem } from '@features/menu/types';
import { useLocalStorage } from '@hooks/useLocalStorage';

import foodItems from '../data.json';

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

  const updateOrder = useCallback(
    (newOrder: OrderItem[]) => setOrder(newOrder),
    [setOrder]
  );

  return (
    <HomeCookContext.Provider value={{ order, setOrder: updateOrder, menu }}>
      {children}
    </HomeCookContext.Provider>
  );
};
