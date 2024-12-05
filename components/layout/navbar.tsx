import Link from "next/link";
import { Crown, Menu } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-1 items-center justify-between lg:justify-start lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Crown className="h-6 w-6" />
        <span className="text-xl font-bold">OneEmpire</span>
      </Link>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                href="/shop"
                className="text-lg font-medium transition hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Shop All
              </Link>
              {CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="text-lg font-medium transition hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:space-x-6">
        <Link href="/shop" className="text-sm font-medium transition hover:text-primary">
          Shop All
        </Link>
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="text-sm font-medium transition hover:text-primary"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}