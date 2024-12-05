import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[600px] bg-[url('https://images.unsplash.com/photo-1615368144592-5d7f9d9a0b91?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative h-full flex items-center px-4">
        <div className="max-w-2xl text-white">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            New Collection Available
          </span>
          <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
            Discover Your Perfect Scent Journey
          </h1>
          <p className="mb-8 text-base md:text-lg leading-relaxed opacity-90">
            Explore our curated collection of luxury fragrances from the world's
            most prestigious perfume houses. Find your signature scent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-semibold w-full sm:w-auto">
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold w-full sm:w-auto backdrop-blur-sm">
              <Link href="/categories/niche">Explore Niche</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}