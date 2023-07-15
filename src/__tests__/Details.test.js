import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../components/Details';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  cryptos: {
    filteredCryptos: [
      {
        id: '1', // Assuming this matches the ID parameter used in the test
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        supply: 21000000,
        maxSupply: 21000000,
        marketCapUsd: 123456789,
        volumeUsd24Hr: 987654321,
        priceUsd: 40000,
        changePercent24Hr: 1.5,
      },
    ],
  },
});

test('renders Details component correctly', () => {
  // Render the component with the mock store and router
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  // Assert that the rendered component matches the snapshot
  expect(container).toMatchSnapshot();
});
