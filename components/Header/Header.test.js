import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  test('should log "FUI CLICADO" when button is pressed', () => {
    console.log = jest.fn(); // Mock da função console.log

    const { getByText } = render(<Header />);
    const button = getByText('Botão');

    fireEvent.press(button);

    expect(console.log).toHaveBeenCalledWith('FUI CLICADO');
  });
});
