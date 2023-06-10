import React from 'react';
import { render } from '@testing-library/react-native';
import Location from './Location';

describe('Location component', () => {
  it('renders the Location', () => {
    const { getByText } = render(<Location />);
    const element = getByText('Location');
    expect(element).toBeDefined();
  });
});
