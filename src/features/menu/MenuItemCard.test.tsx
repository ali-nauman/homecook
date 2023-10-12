import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { MenuItemCard } from './MenuItemCard';
import { MenuItem } from './types';

describe('MenuItemCard', () => {
  const item: MenuItem = {
    availableOnDay: 0,
    id: 1,
    image: '',
    name: 'Foo',
    price: 100,
    serving: 2,
  };

  test('should show a menu item', () => {
    render(<MenuItemCard item={item} onClick={() => {}} />);

    const heading = screen.getByTestId('title');
    expect(heading).toBeDefined();
    expect(heading.textContent).toEqual(`${item.name} - Rs. ${item.price}`);

    const contentInfo = screen.getByTestId('subtitle');
    expect(contentInfo).toBeDefined();
    expect(contentInfo.textContent).toEqual(`(Serves ${item.serving})`);
  });

  test('should change serving size on clicking range slider', () => {
    render(<MenuItemCard item={item} onClick={() => {}} />);

    const selectedServing = screen.getByTestId('selected-serving');
    expect(selectedServing.textContent).toBe(`Order for ${item.serving}`);

    const rangeControl: HTMLInputElement = screen.getByTestId(
      'serving-size-control'
    );
    fireEvent.input(rangeControl, { target: { value: '4' } });

    expect(rangeControl.value).toBe('4');
    expect(selectedServing.textContent).toBe(`Order for 4`);
  });

  test('should call onClick handler when clicked', () => {
    const fn = vi.fn();
    render(<MenuItemCard item={item} onClick={fn} />);

    fireEvent.click(screen.getByText('Order'));
    expect(fn).toHaveBeenCalledOnce();
  });
});
