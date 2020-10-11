import React from 'react';
import { render } from '@testing-library/react';
import { Variant } from './Variant';
import { ProductVariant } from './model';

test('renders Variant', () => {
  const variant: ProductVariant = {
    swatch: '#fff',
    title: 'White'
  };
  const { getByText } = render(<Variant variant={variant} isSelected={false} onClick={() => { }} />);
  const variantTitle = getByText(variant.title);
  expect(variantTitle).toBeInTheDocument();
});
