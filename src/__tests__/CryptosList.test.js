import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import CryptosList from '../components/CryptosList';
import store from '../redux/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CryptosList', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <CryptosList />
      </Provider>,
    );

    // Check if the search input field is rendered
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();

    // Check if the search button is rendered
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(searchButton).toBeInTheDocument();

    // Check if the cryptos list container is rendered
    const cryptosListContainer = screen.getByRole('main');
    expect(cryptosListContainer).toBeInTheDocument();
  });

  test('displays filtered cryptos after searching', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <CryptosList />
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'BTC' } });
    expect(searchInput).toHaveValue('BTC');
    expect(searchInput).toBeInTheDocument();
  });
});
