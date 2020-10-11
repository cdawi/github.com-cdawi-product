export interface ProductVariant { 
    title: string;
    swatch: string;
}

export interface ProductImage { 
    src: string;
    alt: string;
}

export interface ProductItem {
    price: string;
    title: string;
    variants: ProductVariant[];
    images: ProductImage[];
}
