import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductVariant } from './model';
import { Variant } from './Variant';

interface ContainerProps {
    isActive: boolean;
}

const Container = styled.form<ContainerProps>`   
    height: ${props => props.isActive ? '342px' : '0px'};
    width: 100%;

    background-color: var(--white);
    transition: all 1s ease-in-out;
   
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;

    opacity: ${props => props.isActive ? '1' : '0'};

    @media (min-width: 768px) {   
        height: 149px;
        width: 352px;
        bottom: 'initial';
        top: ${props => props.isActive ? '696px' : '800px'};

        align-self: center;

        border-radius: 3px;

        button.variants__btn {
            width: 308px;
        }

        label.variant__title--selected {
            display: block;
        }
        div.variants {   
            flex-wrap: nowrap;

            .variant {
                margin: 0px 5px;
                .variant__label {
                    display: none;               
                }
            }
        }
    }

    .variants {
        margin: 26px 10px 0px 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .variant {
            outline: none;
            background: none;
            border: none;
            padding: 0px;
            width: 50%;
            margin: 10px 0px;

            .variant__label {
                line-height: 26px;
                margin-left: 16px;
                font-size: var(--labelFontSize);
                text-transform: uppercase;
            }
        }
    }

    .variant__title--selected {
        display: none;
        height: 18px;
        margin-top: 15px;
        font-size: 12px;
        letter-spacing: 0.46px;+
        line-height: 1.33;
    }

    .variants__btn {
        height: 30px;
        width: 325px;
        border-radius: 3px;
        margin-top: 12px;

        background-color: var(--black);             
        color: var(--white);      

        align-self: center;

        font-size: 13px;
        line-height: 1.46;
        letter-spacing: 1.08px;

        cursor: pointer;     
    }
`;

export interface QuickBuyProps extends ContainerProps {
    variants: ProductVariant[];
    onSubmit: (selectedVariant: ProductVariant) => void;
}

export const QuickBuy = (props: QuickBuyProps) => {
    const { variants, onSubmit, isActive } = props;
    const [ selectedIndex, setSelectedIndex ] = useState(-1);

    return <Container isActive={isActive}>
        <div className="variants">
            {variants.map((variant: ProductVariant, i: number) => 
                <Variant key={i} variant={variant} isSelected={i === selectedIndex} onClick={() => setSelectedIndex(i)} />)}
        </div>
        <label className="variant__title--selected" data-testid="quickBuySelectedVariant">{variants[selectedIndex]?.title || ''}</label>
        <button className="variants__btn" onClick={() => onSubmit(variants[selectedIndex])} type="button">ADD TO BAG</button>
    </Container>;
};