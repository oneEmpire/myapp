"use client";

import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, SORT_OPTIONS } from "@/lib/constants";
import { SortOption } from "@/types";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";

interface ShopFiltersProps {
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  hideCategories?: boolean;
}

export function ShopFilters({
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  priceRange,
  onPriceRangeChange,
  hideCategories = false,
}: ShopFiltersProps) {
  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Sort By</h3>
        <Select value={sortOption} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!hideCategories && onCategoryChange && (
        <div>
          <h3 className="mb-4 text-lg font-semibold">Categories</h3>
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  onCategoryChange(
                    selectedCategory === category.id ? null : category.id
                  )
                }
                className={`w-full rounded-lg px-4 py-2 text-left transition ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={onPriceRangeChange}
          className="my-6"
        />
        <div className="flex items-center justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden w-full mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <FilterIcon className="mr-2 h-4 w-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <FiltersContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block w-64">
        <FiltersContent />
      </div>
    </>
  );
}