export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  category: string;
  size: string;
  inStock: boolean;
}

export interface CartItem extends Perfume {
  quantity: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export interface Category {
  id: string;
  name: string;
}