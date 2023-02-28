import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

test('renders Region', () => {
  render(<App />);
  const regionElement = screen.getByText(/Región Metropolitana de Santiago/i);
  expect(regionElement).toBeInTheDocument();
});

test('renders Comuna', () => {
  render(<App />);
  const regionElement = screen.getByText(/Región Metropolitana de Santiago/i);
  fireEvent.change(regionElement, { target: { value: 13101 } })
  const comunaElement = screen.getByText(/Santiago/i);
  expect(comunaElement).toBeInTheDocument();
  // screen.debug (comunaElement);
});
