import { createContext, ReactNode, useCallback, useState } from 'react';

import foodItems from '../data.json';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
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
