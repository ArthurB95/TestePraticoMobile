import React from 'react';
import { render } from '@testing-library/react-native';
import Options from './Options';

describe('Option component', () => {
  it('renders the home', () => {
    const { getByText } = render(<Options />);
    const element = getByText('Option');
    expect(element).toBeDefined();
  });
});
