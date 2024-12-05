"use client";

import { CartItem } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface CartSheetProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function CartSheet({ items, onUpdateQuantity }: CartSheetProps) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {items.length > 0 && (
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] py-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <div className="relative h-20 w-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="mt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="mt-4 w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}