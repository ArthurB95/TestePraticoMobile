import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import Navegacao from './Navegacao';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Navegacao', () => {
  it('should navigate to "Sections" screen when pressed', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });

    const { getByText } = render(<Navegacao />);

    fireEvent.press(getByText('Navegacao'));

    expect(navigate).toHaveBeenCalledWith('Sections');
  });
});
