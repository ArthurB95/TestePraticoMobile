import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Inclusion from './Inclusion';

describe('Inclusion', () => {
  test('should perform addition calculation when "Soma" button is pressed', () => {
    const { getByText } = render(<Inclusion />);
    const somaButton = getByText('Soma');
    const resultText = getByText('Result:');

    fireEvent.press(somaButton);

    expect(resultText.props.children).toBe('Result: 13');
  });

  test('should perform subtraction calculation when "Subtracao" button is pressed', () => {
    const { getByText } = render(<Inclusion />);
    const subtracaoButton = getByText('Subtracao');
    const resultText = getByText('Result:');

    fireEvent.press(subtracaoButton);

    expect(resultText.props.children).toBe('Result: -5');
  });

  test('should perform multiplication calculation when "Multiplicacao" button is pressed', () => {
    const { getByText } = render(<Inclusion />);
    const multiplicacaoButton = getByText('Multiplicacao');
    const resultText = getByText('Result:');

    fireEvent.press(multiplicacaoButton);

    expect(resultText.props.children).toBe('Result: 36');
  });

  test('should perform division calculation when "Divisao" button is pressed', () => {
    const { getByText } = render(<Inclusion />);
    const divisaoButton = getByText('Divisao');
    const resultText = getByText('Result:');

    fireEvent.press(divisaoButton);

    expect(resultText.props.children).toBe('Result: 0.4444444444444444');
  });
});
