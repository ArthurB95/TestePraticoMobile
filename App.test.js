import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('App component', () => {
  it('renders the app', () => {
    const { getByText } = render(<App />);
    const element = getByText('Open up App.js to start working on your app!');
    expect(element).toBeDefined();
  });
});
