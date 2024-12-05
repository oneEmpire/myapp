"use client";

import { useState } from "react";
import { CartItem, Perfume } from "@/types";
import { perfumes } from "@/lib/data";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  const featuredPerfumes = perfumes.filter((_, index) => index < 8);
  const newArrivals = perfumes.filter((_, index) => index >= 8);

  return (
    <>
      <SiteHeader
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <main>
        <HeroSection />
        <FeaturedSection
          title="Featured Fragrances"
          products={featuredPerfumes}
          onAddToCart={handleAddToCart}
        />
        <FeaturedSection
          title="New Arrivals"
          products={newArrivals}
          onAddToCart={handleAddToCart}
        />
      </main>
    </>
  );
}