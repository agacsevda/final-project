import { ProductVariant } from "@/hook/DetailHook";

export interface ProductCardProps {
  id: number;
  title: string;
  href: string;
  description: string;
  bgcolor:string;

}

export interface ContainerCardProps {
  id: number;
  title: string;
  href: string;
  description: string;
  comment:string;
  price:number;
}

export interface AllProductCardProps {
  id: number;
  title: string;
  href: string;
  description: string;
  price: number;
  comment: string;
  rating: number;
  discountedPrice: number | null;
}

export interface ProductDetailsProps {
  id: number;
  title: string;
  href: string;
  description: string;
  price: number;
  comment: string;
  rating: number;
  variants: ProductVariant[];
}

export interface ProductDetailResponse {
  status: string;
  data: ProductDetail;
}

export interface ProductDetail {
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
        aroma: string;
        value: string;
      }[];
      nutrition_facts: {
        ingredients: {
          name: string;
          amounts: string[];
        }[];
        portion_sizes: string[];
      };
      amino_acid_facts: {
        ingredients: {
          name: string;
          amounts: string[];
        }[];
        portion_sizes: string[];
      };
    };
  };
  main_category_id: string;
  sub_category_id: string;
  tags: string[];
  variants: {
    id: string;
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    price: {
      profit: number | null;
      total_price: number;
      discounted_price: number | null;
      price_per_servings: number;
      discount_percentage: number | null;
    };
    photo_src: string;
    is_available: boolean;
  }[];
  comment_count: number;
  average_star: number;
}