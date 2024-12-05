"use client";

import { useState } from "react";
import { CartItem, Perfume, SortOption } from "@/types";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductGrid } from "@/components/product-grid";
import { ShopFilters } from "@/components/shop/shop-filters";

interface CategoryClientProps {
  products: Perfume[];
  categoryName: string;
}

export function CategoryClient({ products, categoryName }: CategoryClientProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("name-asc");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleAddToCart = (product: Perfume) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      quantity === 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <>
      <SiteHeader
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <main className="container py-8">
        <div className="flex gap-8">
          <ShopFilters
            sortOption={sortOption}
            onSortChange={setSortOption}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            hideCategories
          />
          <div className="flex-1">
            <h1 className="mb-8 text-3xl font-bold">{categoryName} Fragrances</h1>
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </main>
    </>
  );
}