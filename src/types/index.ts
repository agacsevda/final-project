import { ProductVariant } from "@/components/layout/DetailHook";

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