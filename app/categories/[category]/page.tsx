import { perfumes } from "@/lib/data";
import { CATEGORIES } from "@/lib/constants";
import { CategoryClient } from "@/components/category/category-client";

// This function is required for static site generation with `output: export`
export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const categoryName = CATEGORIES.find(c => c.id === category)?.name || category;
  const filteredProducts = perfumes.filter(product => product.category === category);

  return <CategoryClient products={filteredProducts} categoryName={categoryName} />;
}