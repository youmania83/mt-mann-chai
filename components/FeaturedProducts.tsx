"use client";
import PremiumSection from "./PremiumSection";
import ProductCard from "./ProductCard";
import { products } from "./productsData";

export default function FeaturedProducts() {
  return (
    <PremiumSection
      id="products"
      eyebrow="The Collection"
      title={
        <>
          Two blends.
          <br />
          <span className="italic gold-text">One philosophy.</span>
        </>
      }
      subtitle="Each tin is composed in small batches — pressure-tested for character, balance, and longevity in the cup."
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} index={i} />
        ))}
      </div>
    </PremiumSection>
  );
}
