import { useContext } from 'react';

import { HomeCookContext } from '@store/home-cook-context';

export function useMenu(day: number) {
  const { menu } = useContext(HomeCookContext);

  const filteredMenu = menu.filter(item => item.availableOnDay === day);

  return { menu: filteredMenu };
}
