import React from 'react';
import { render } from '@testing-library/react-native';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders the Title', () => {
    const { getByText } = render(<Nav />);
    const element = getByText('Nav');
    expect(element).toBeDefined();
  });
});
