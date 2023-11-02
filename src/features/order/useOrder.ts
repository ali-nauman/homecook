import { useCallback, useContext } from 'react';

import { HomeCookContext } from '@store/home-cook-context';
import { MenuItem } from '@features/menu/types';
import { OrderItem } from '@features/order/types';

export function useOrder() {
  const { order, setOrder } = useContext(HomeCookContext);

  const addToOrder = useCallback(
    (item: MenuItem, servingSize: number) => {
      const desiredItem = order.find(orderItem => orderItem.id === item.id);

      if (desiredItem) {
        setOrder(
          order.map(orderItem =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: servingSize / item.serving }
              : orderItem
          )
        );
      } else {
        const newItem: OrderItem = {
          ...item,
          quantity: servingSize / item.serving,
        };
        setOrder([...order, newItem]);
      }
    },
    [order, setOrder]
  );

  return { order, addToOrder };
}
