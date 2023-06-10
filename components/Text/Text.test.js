import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Textt';

describe('Text component', () => {
  it('renders the Text', () => {
    const { getByText } = render(<Text />);
    const element = getByText('Text');
    expect(element).toBeDefined();
  });
});
