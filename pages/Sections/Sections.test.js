import React from 'react';
import { render } from '@testing-library/react-native';
import Sections from './Sections';

describe('Option component', () => {
  it('renders the home', () => {
    const { getByText } = render(<Sections />);
    const element = getByText('Sections');
    expect(element).toBeDefined();
  });
});
