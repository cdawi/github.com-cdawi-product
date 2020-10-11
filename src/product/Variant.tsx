import React from 'react';
import styled from 'styled-components';
import { ProductVariant } from './model';

const Container = styled.button<StyledButtonProps>`   
    height: 26px;
    display: flex;
    flex-direction: row;

    svg {
        width: 26px;
        height: 26px;
        border: ${props => props.isSelected ? '1px solid var(--black)' : '1px solid var(--grey)'};
        border-radius: 50%;
    }
  
    cursor: pointer;
`;

export interface StyledButtonProps {
    isSelected: boolean;
}

export interface VariantProps {
    variant: ProductVariant;
    isSelected: boolean;
    onClick: () => void;
}

export const Variant = (props: VariantProps) => {
    const { variant, isSelected, onClick } = props;
    return <Container isSelected={isSelected} onClick={onClick} role="radio" aria-checked={isSelected} className="variant" type="button">
        <svg>
            <circle viewBox="0 0 26 26" cx="13" cy="13" r="12" fill={variant.swatch} stroke="white" store-width="3"/>
        </svg>
        <label className="variant__label">{variant.title}</label>
    </Container>;
};