import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { QuickBuy } from './QuickBuy';
import { ProductVariant } from './model';

test('renders QuickBuy component', () => {
  const variants: ProductVariant[] = [
    {
      swatch: '#fff',
      title: 'White'
    },
    {
      swatch: '#000',
      title: 'Black'
    }
  ];
  const { getByText } = render(<QuickBuy isActive={true} onSubmit={() => {}} variants={variants}/>);
  const whiteVariantLabel = getByText('White');
  const blackVariantLabel = getByText('Black');

  expect(whiteVariantLabel).toBeInTheDocument();
  expect(blackVariantLabel).toBeInTheDocument();
});

test('click on Variant should make it active', () => {
  const variants: ProductVariant[] = [
    {
      swatch: '#fff',
      title: 'White'
    },
    {
      swatch: '#000',
      title: 'Black'
    }
  ];
  const { getByText, getByTestId } = render(<QuickBuy isActive={true} onSubmit={() => {}} variants={variants}/>);
  const whiteVariantLabel = getByText('White');
  const quickBuySelectedVariant = getByTestId('quickBuySelectedVariant');


  expect(quickBuySelectedVariant).toHaveTextContent('')

  fireEvent.click(whiteVariantLabel);

  expect(quickBuySelectedVariant).toHaveTextContent('White')
});
