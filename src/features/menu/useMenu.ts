import { useContext } from 'react';

import { HomeCookContext } from 'src/store/home-cook-context';
import { OrderItem } from '../order/types';
import { MenuItem } from './types';

export function useMenu(day: number) {
  const { order, setOrder, menu } = useContext(HomeCookContext);

  const filteredMenu = menu.filter(item => item.availableOnDay === day);

  const addToOrder = (item: MenuItem, servingSize: number) => {
    const newOrder = [...order];
    const desiredItem = newOrder.find(orderItem => orderItem.id === item.id);

    if (desiredItem) {
      desiredItem.quantity = servingSize / item.serving;
    } else {
      const orderItem: OrderItem = {
        ...item,
        quantity: servingSize / item.serving,
      };
      newOrder.push(orderItem);
    }

    setOrder(newOrder);
  };

  return { filteredMenu, order, addToOrder };
}
