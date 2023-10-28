import { useCallback, useContext } from 'react';

import { HomeCookContext } from '../../store/home-cook-context';
import { MenuItem } from '../menu/types';
import { OrderItem } from './types';

export function useOrder() {
  const { order, setOrder } = useContext(HomeCookContext);

  const addToOrder = useCallback(
    (item: MenuItem, servingSize: number) => {
      const newOrder = [...order];
      const desiredItem = newOrder.find(orderItem => orderItem.id === item.id);

      if (desiredItem) {
        setOrder(
          order.map(i =>
            i.id === item.id
              ? { ...i, quantity: servingSize / item.serving }
              : i
          )
        );
      } else {
        const newItem: OrderItem = {
          ...item,
          quantity: servingSize / item.serving,
        };
        setOrder([...order, newItem]);
      }

      setOrder(newOrder);
    },
    [order, setOrder]
  );

  return { order, addToOrder };
}
