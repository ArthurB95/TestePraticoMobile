import React from 'react';
import { render } from '@testing-library/react-native';
import Title from './Title';

describe('Title component', () => {
  it('renders the Title', () => {
    const { getByText } = render(<Title />);
    const element = getByText('Home');
    expect(element).toBeDefined();
  });
});
