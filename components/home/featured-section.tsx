import { Perfume } from "@/types";
import { ProductCard } from "@/components/ui/product-card";

interface FeaturedSectionProps {
  title: string;
  products: Perfume[];
  onAddToCart: (product: Perfume) => void;
}

export function FeaturedSection({
  title,
  products,
  onAddToCart,
}: FeaturedSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-2xl md:text-3xl font-bold text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}