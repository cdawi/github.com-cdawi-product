import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Product } from './Product';
import { ProductItem } from './model';

test('renders Product component', () => {
  const model: ProductItem = {
    title: 'Title',
    price: '50$',
    images: [{ src: '', alt: '' }, { src: '', alt: '' }],
    variants: [],

  };
  const { getByText } = render(<Product model={model} />);
  const productTitle = getByText(model.title);
  const productPrice = getByText(model.price);
  const productBtn = getByText(/SELECT COLOR/i);

  expect(productTitle).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(productBtn).toBeInTheDocument();
});


test('click on Product component select color should move it to active state', () => {
  const model: ProductItem = {
    title: 'Title',
    price: '50$',
    images: [{ src: '', alt: '' }, { src: '', alt: '' }],
    variants: [],

  };
  const { getByText, container } = render(<Product model={model} />);

  const productBtn = getByText(/SELECT COLOR/i);

  expect(container.firstChild).not.toHaveClass('product__container--active')

  fireEvent.click(productBtn);

  expect(container.firstChild).toHaveClass('product__container--active')
});
