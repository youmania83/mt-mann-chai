import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/productsData";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "The Collection | Mt. Mann Chai",
  description:
    "Two blends, one philosophy. Premium CTC and House Blend — composed in small batches, sealed in charcoal tins.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F0F0F] text-[#F5F1E9]">
        {/* Page header */}
        <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#082A20] via-[#0F0F0F] to-[#0F0F0F]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0B3D2E]/40 blur-[140px]" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-8">The Collection</div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F5F1E9] leading-[1.05] tracking-[-0.02em]">
              Two blends.
              <br />
              <span className="italic gold-text">A lifetime of moments.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-[#F5F1E9]/60 text-lg leading-relaxed font-light">
              Each tin is composed by hand, in batches small enough to remember.
              Tasted, retasted, and only released when balance is unimpeachable.
            </p>
          </div>
        </section>

        {/* Premium CTC */}
        <section className="px-6 lg:px-10 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="eyebrow mb-4">01 — Bold</div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1E9]">
                  Premium <span className="italic gold-text">CTC</span>
                </h2>
              </div>
              <div className="hidden md:block max-w-sm text-[#F5F1E9]/55 text-sm leading-relaxed">
                A single, robust composition for the morning hour. Malty depth,
                copper liquor, an unmistakable wake.
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <ProductCard product={products[0]} index={0} />
              <ProductCard
                product={{
                  ...products[0],
                  name: "Premium CTC · Tin",
                  tagline: "Gift Edition",
                  description:
                    "The same bold composition, presented in our deep-charcoal heritage tin. For the desk, the shelf, the giving.",
                  notes: ["Gift", "Tin", "200g"],
                }}
                index={1}
              />
            </div>
          </div>
        </section>

        {/* House Blend */}
        <section className="px-6 lg:px-10 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="eyebrow mb-4">02 — Smooth</div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#F5F1E9]">
                  House <span className="italic gold-text">Blend</span>
                </h2>
              </div>
              <div className="hidden md:block max-w-sm text-[#F5F1E9]/55 text-sm leading-relaxed">
                A high-grown composition for the unhurried afternoon. Aromatic,
                gently rounded, complete with milk or without.
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <ProductCard product={products[1]} index={0} />
              <ProductCard
                product={{
                  ...products[1],
                  name: "House Blend · Tin",
                  tagline: "Heritage Tin",
                  description:
                    "Our House Blend in the same charcoal tin, designed to live on the kitchen counter for years.",
                  notes: ["Tin", "200g", "Aromatic"],
                }}
                index={1}
              />
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
