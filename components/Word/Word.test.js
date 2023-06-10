import React from 'react';
import { render } from '@testing-library/react-native';
import Word from './Word';

describe('Word component', () => {
  it('renders the Word', () => {
    const { getByText } = render(<Word />);
    const element = getByText('Word');
    expect(element).toBeDefined();
  });
});
