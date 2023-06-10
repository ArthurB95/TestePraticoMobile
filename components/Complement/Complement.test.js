import React from 'react';
import { render } from '@testing-library/react-native';
import Complement from './Complement';

describe('Complement', () => {
  test('should render a list of items correctly', () => {
    const { getAllByTestId } = render(<Complement />);
    const items = getAllByTestId('item');

    expect(items.length).toBe(10);
    expect(items[0].props.children).toBe('Devin');
    expect(items[1].props.children).toBe('Dan');
    expect(items[2].props.children).toBe('Dominic');
    // ... verifique os outros itens da lista
  });
});
