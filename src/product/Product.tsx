import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductItem } from './model';
import { QuickBuy } from './QuickBuy';

const Article = styled.article`
    --productNameFontSize: 17px;
    --labelFontSize: 12px;
    text-transform: uppercase;

    @media (min-width: 768px) {       
        width: 467px;
        height: 765px;

        &:hover, &.product__container--active {
            .product__header:before {
                height: 628px;
            }

            .product__picture--primary {
                opacity: 0;
            }

            .product__picture--secondary {
                opacity: 1;
            }
        }

        &.product__container--active div.product__header button.product__btn {
            display: none;
        }

        &:hover:not(.product__container--active) header.product__header button.product__btn {
            display: block;
        }
        
        div.product__overlay {
            display: none;
        }

        header.product__header {
            position: relative;

            &:before {
                height: 676px;
            }
            button.product__btn {
                display: none;
                height: 30px;
                border-radius: 3px;
                border: none;

                font-size: 13px;
                background-color: var(--black);             
                color: var(--white);      
            }
            .product__name {
                font-size: var(--productNameFontSize);
                margin: 0px;
            }

            .product__price {
                margin-top: 13px;

                font-size: 14px;  
            }
        }
    }
    
    width: 188px;
    height: 369px;

    
    font-family: Helvetica;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    display: flex;
    flex-direction: column;

    .product__picture {
        position: absolute;
        transition: all 1s ease-in-out;
    }

    .product__picture--secondary {
        opacity: 0;
    }

    .product__header {
        flex: 1;
        width: 100%;
        align-self: center;
        display: flex;
        flex-direction: column;
        text-align: center;

        &:before {
            height: 246px;
            content: ''; 
        }

        .product__name {
            height: 20px;
            color: var(--black);

            margin-top: 22px;
            margin-bottom: 0px;
            font-size: var(--labelFontSize);
            font-weight: bold;
            letter-spacing: 1.26px;
        }

        .product__price {
            margin-top: 9px;
            height: 19px;
            color: var(--black);

            font-size: var(--labelFontSize);          
            line-height: 1.36;
            letter-spacing: -0.19px;
        }
           
        .product__btn {
            width: 162px;
            height: 40px;
            margin: 16px 8px 0px 8px;

            border-radius: 3px;
            border: solid 1px #d0d0d0;
            align-self: center;
            text-align: center;

            cursor: pointer;
            background: none;
            outline: none;

            color: var(--black);
            font-size: var(--labelFontSize);
            font-weight: normal;               
            line-height: 1.46;
            letter-spacing: 1.08px;         
        }
        
        .product__overlay {
            width: 375px;
            height: 667px;
            opacity: 0.2;
            background-color: var(--black);
            position: absolute;
        }        
    }
`;

export const Product = (props: { model: ProductItem }) => {
    const { model } = props;
    const [isQuickBuyActive, setQuickBuyActive] = useState(false);

    const [primaryPicture, secondaryPicture] = model.images;

    return <Article className={isQuickBuyActive ? 'product__container--active' : ''}>
        <picture className="product__picture product__picture--primary">
            <source media="(max-width: 767px)" srcSet={primaryPicture.src.replace(/\.jpg$/, '_188x246_crop_center.jpg')}/>
            <source media="min-width: 768px)" srcSet={primaryPicture.src.replace(/\.jpg$/, '_467x765_crop_center.jpg')}/>
            <img src={primaryPicture.src.replace(/\.jpg$/, '_467x765_crop_center.jpg')} alt={`${primaryPicture.alt}`}/>
        </picture>
        <picture className="product__picture product__picture--secondary">
            <source media="(max-width: 767px)" srcSet={secondaryPicture.src.replace(/\.jpg$/, '_188x246_crop_center.jpg')}/>
            <source media="min-width: 768px)" srcSet={secondaryPicture.src.replace(/\.jpg$/, '_467x765_crop_center.jpg')}/>
            <img src={secondaryPicture.src.replace(/\.jpg$/, '_467x765_crop_center.jpg')} alt={`${secondaryPicture.alt}`}/>
        </picture>
        <header className="product__header">           
            <h2 className="product__name">{model.title}</h2>
            <label className="product__price">{model.price}</label>
            <button className="product__btn" onClick={() => setQuickBuyActive(true)} aria-haspopup aria-label="open quick shop">SELECT COLOR</button>
            {isQuickBuyActive && <div className="product__overlay"></div>}
            <QuickBuy isActive={isQuickBuyActive} variants={model.variants} onSubmit={() => setQuickBuyActive(false)} />
        </header>
    </Article>;
};