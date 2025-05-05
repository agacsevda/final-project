import { useState, useEffect } from "react";

export interface Product {
    id: string;
    name: string;
    slug: string;
    short_explanation: string;
    explanation: {
        usage: string;
        features: string;
        description: string;
        nutritional_content: {
            ingredients: {
                aroma: null;
                value: string;
            }[];
            nutrition_facts: {
                ingredients: [];
                portion_sizes: [];
            };
            amino_acid_facts: null;
        };
    };
    main_category_id: string;
    sub_category_id: string;
    tags: string[];
    variants: ProductVariant[];
    comment_count: number;
    average_star: number;
}

export interface ProductVariant {
    id: string;
    size: ProductVariantSize;
    aroma: string;
    price: {
        profit: null;
        total_price: number;
        discounted_price: null | number;
        price_per_servings: number;
        discount_percentage: null | number;
    };
    photo_src: string;
    is_available: boolean;
}

export interface ProductVariantSize {
    pieces: number;
    total_services: number;
    gram?: number;
}


export function useProductVariants(productVariants: ProductVariant[]) {
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
        () => productVariants[0]
    );

    const productVariantsByAroma = productVariants.reduce(
        (previousValue, currentValue) => {
            if (previousValue[currentValue.aroma]) {
                previousValue[currentValue.aroma].push(currentValue);
            } else {
                previousValue[currentValue.aroma] = [currentValue];
            }
            return previousValue;
        },
        {} as Record<string, ProductVariant[]>
    );

    const productSizes = productVariants.reduce(
        (previousValue, currentValue) => {
            if (
                !previousValue.find((size) =>
                    isSameSize(size, currentValue.size)
                )
            ) {
                previousValue.push(currentValue.size);
            }
            return previousValue;
        },
        [] as ProductVariantSize[]
    );

    const productAromas = Object.keys(productVariantsByAroma);

    function getAromaSizes(aroma: string) {
        return productVariantsByAroma[aroma]?.map((variant) => variant.size) || [];
    }

    function isSizeAvailable(size: ProductVariantSize) {
        if (!selectedVariant || !selectedVariant.aroma) {
            return false;
        }
        
        const aromaSizes = getAromaSizes(selectedVariant.aroma);
        
        return !aromaSizes.find((aromaSize) => isSameSize(aromaSize, size));
    }

    function isSelectedAroma(aroma: string) {
        return selectedVariant.aroma === aroma;
    }

    function selectAroma(aroma: string) {
        const aromaWithSameSize = productVariantsByAroma[aroma].find(
            (variant) => isSameSize(variant.size, selectedVariant.size)
        );
        if (aromaWithSameSize) {
            setSelectedVariant(aromaWithSameSize);
        } else {
            setSelectedVariant(productVariantsByAroma[aroma][0]);
        }
    }

    function selectSize(size: ProductVariantSize) {
        const foundVariant = productVariants.find(
            (variant) =>
                isSameSize(variant.size, size) &&
                variant.aroma === selectedVariant.aroma
        );
        if (foundVariant) {
            setSelectedVariant(foundVariant);
        }
    }

    function isSelectedSize(size: ProductVariantSize) {
        return isSameSize(selectedVariant.size, size);
    }

    function isSameSize(sizeA: ProductVariantSize, sizeB: ProductVariantSize) {
        return (
            sizeA.pieces === sizeB.pieces &&
            sizeA.total_services === sizeB.total_services &&
            sizeA.gram === sizeB.gram
        );
    }

    useEffect(() => {
        setSelectedVariant(productVariants[0] || null);
    }, [productVariants]);

    return {
        selectedVariant,
        productAromas,
        setSelectedVariant,
        productSizes,
        isSelectedAroma,
        selectAroma,
        selectSize,
        isSelectedSize,
        isSizeAvailable,
    };
}
