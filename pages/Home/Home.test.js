import React from 'react';
import { render } from '@testing-library/react-native';
import Home from './Home';

describe('Home component', () => {
  it('renders the home', () => {
    const { getByText } = render(<Home />);
    const element = getByText('Home');
    expect(element).toBeDefined();
  });
});
