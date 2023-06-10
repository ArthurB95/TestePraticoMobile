import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
  test('should call handleButton function on press', () => {
    const handleButton = jest.fn();
    const { getByText } = render(<Button onPress={handleButton} />);
    const button = getByText('Option');
    fireEvent.press(button);
    expect(handleButton).toHaveBeenCalled();
  });
});
