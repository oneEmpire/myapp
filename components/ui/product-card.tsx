import Image from "next/image";
import { Perfume } from "@/types";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Perfume;
  onAddToCart: (product: Perfume) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">{product.name}</h3>
          <span className="text-sm font-medium text-gray-900">
            ${product.price}
          </span>
        </div>
        <p className="mb-2 text-sm text-gray-600">{product.brand}</p>
        <p className="mb-4 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{product.size}</span>
          <Button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}