import { Perfume } from "@/types";
import { ProductCard } from "./ui/product-card";

interface ProductGridProps {
  products: Perfume[];
  onAddToCart: (product: Perfume) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}