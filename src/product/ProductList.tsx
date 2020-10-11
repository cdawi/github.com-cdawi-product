import React from 'react';
import styled from 'styled-components';
import { product } from './fixture';
import { ProductItem } from './model';
import { Product } from './Product';

const Container = styled.section`
    --black: black;
    --white: white;
    --grey: lightgrey;
`;

export const ProductList = () => {
    const model: ProductItem = product;

    return <Container>
        <Product model={model} />
    </Container>;
};