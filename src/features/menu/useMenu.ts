import { useContext } from 'react';

import { HomeCookContext } from 'src/store';
import { OrderItem } from '../order/types';

export function useMenu(day: number) {
  const { order, setOrder, menu } = useContext(HomeCookContext);

  const filteredMenu = menu.filter(item => item.availableOnDay === day);

  const addToOrder = (item: OrderItem, servingSize: number) => {
    const newOrder = [...order];
    const desiredItem = newOrder.find(orderItem => orderItem.id === item.id);

    if (desiredItem) {
      desiredItem.quantity = servingSize / item.serving;
    } else {
      item.quantity = servingSize / item.serving;
      newOrder.push(item);
    }

    setOrder(newOrder);
  };

  return { filteredMenu, order, addToOrder };
}
