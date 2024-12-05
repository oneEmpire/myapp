"use client";

import { Search, User } from "lucide-react";
import { CartSheet } from "@/components/cart-sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import { Navbar } from "./navbar";

interface SiteHeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function SiteHeader({ cartItems, onUpdateQuantity }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Navbar />
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="h-4 w-4" />
            </Button>
            <CartSheet items={cartItems} onUpdateQuantity={onUpdateQuantity} />
          </div>
        </div>
      </div>
    </header>
  );
}