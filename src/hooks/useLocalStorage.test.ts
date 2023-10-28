import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  test('should store a value in localStorage', () => {
    const fakeUser = { id: 1, name: 'user' };
    const { result } = renderHook(() => useLocalStorage('user', fakeUser));
    const [user] = result.current;

    expect(user).toEqual(fakeUser);
  });

  test('should update a value in localStorage', () => {
    const fakeUser = { id: 1, name: 'user' };
    const { result } = renderHook(() => useLocalStorage('user', fakeUser));
    const [, setUser] = result.current;

    const fakeUser2 = { id: 2, name: 'user-updated' };
    act(() => {
      setUser(fakeUser2);
    });
    const [updatedUser] = result.current;

    expect(updatedUser).toEqual(fakeUser2);
  });
});
