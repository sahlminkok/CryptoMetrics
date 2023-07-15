import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

test('renders Navbar component correctly', () => {
  const { container } = render(<Navbar />);

  // Assert that the logo text is rendered
  const logoElement = container.querySelector('.logo h1');
  expect(logoElement.textContent).toBe('CryptoMetrics');

  // Assert that the microphone icon is rendered
  const micElement = container.querySelector('.mic');
  expect(micElement).toBeInTheDocument();

  // Assert that the settings icon is rendered
  const settingsElement = container.querySelector('.sett');
  expect(settingsElement).toBeInTheDocument();

  // Assert that the navigation links are rendered
  const links = container.querySelectorAll('nav a');
  expect(links.length).toBe(2);
});
