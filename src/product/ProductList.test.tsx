import React from 'react';
import { render } from '@testing-library/react';
import { ProductList } from './ProductList';

test('renders Product List', () => {
  const { getByText } = render(<ProductList />);
  const selectColorButton = getByText(/SELECT COLOR/i);
  expect(selectColorButton).toBeInTheDocument();
});
