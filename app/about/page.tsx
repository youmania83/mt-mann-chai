import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Heritage | Mt. Mann Chai",
  description:
    "The story of Mt. Mann Chai — a small house of premium Indian tea, born of the mountains and shaped by patience.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F0F0F] text-[#F5F1E9]">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#082A20] via-[#0F0F0F] to-[#0F0F0F]" />
          <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-[#0B3D2E]/40 blur-[140px]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-8">Our Heritage</div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#F5F1E9] leading-[1.05] tracking-[-0.02em]">
              A small house,
              <br />
              <span className="italic gold-text">unhurried by design.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-[#F5F1E9]/60 text-lg font-light leading-relaxed">
              We started Mt. Mann Chai because we missed the cup our grandmothers made —
              dense, considered, and never in a hurry. So we went back to the mountains
              and asked the leaf to remember.
            </p>
          </div>
        </section>

        {/* Editorial */}
        <section className="px-6 lg:px-10 py-20">
          <div className="max-w-4xl mx-auto space-y-20">
            <article>
              <div className="eyebrow mb-4">I — Origin</div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E9] mb-6">
                Where we begin.
              </h2>
              <p className="text-[#F5F1E9]/65 text-lg font-light leading-[1.9]">
                Our gardens lie at altitudes between nine hundred and fourteen hundred metres,
                where the mist arrives before the light. Cool nights and shy summers slow the
                leaf, lending it a complexity that lower elevations can never confess.
                We work only with growers who know each section of their estate by name.
              </p>
            </article>

            <div className="gold-line" />

            <article>
              <div className="eyebrow mb-4">II — Craft</div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E9] mb-6">
                Composed, not blended.
              </h2>
              <p className="text-[#F5F1E9]/65 text-lg font-light leading-[1.9]">
                Most teas are blended for cost. Ours are composed for character.
                Our master taster sits with the season&apos;s leaves for weeks before approving
                a release — building each blend like a piece of music: theme, counterpoint,
                a long, considered finish. Nothing leaves the house until the cup is honest.
              </p>
            </article>

            <div className="gold-line" />

            <article>
              <div className="eyebrow mb-4">III — Philosophy</div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F1E9] mb-6">
                A quiet luxury.
              </h2>
              <p className="text-[#F5F1E9]/65 text-lg font-light leading-[1.9]">
                Luxury, to us, is not loud. It is the patience to wait for the right harvest,
                the discipline to keep the catalogue small, and the conviction that the kettle
                deserves three minutes of your attention. Our tin is dense, the lid heavy,
                the leaf inside — restless and alive.
              </p>
            </article>
          </div>
        </section>

        {/* Founder */}
        <section className="px-6 lg:px-10 py-24">
          <div className="max-w-5xl mx-auto glass rounded-3xl p-10 md:p-16 text-center">
            <div className="gold-divider mx-auto mb-8">A Note from the Founder</div>
            <p className="font-serif italic text-2xl md:text-3xl text-[#F5F1E9] leading-snug">
              &ldquo;We are not in the business of caffeine. We are in the
              business of the small, daily ceremony — the cup that asks you to slow down,
              and the leaf that earns the wait.&rdquo;
            </p>
            <div className="mt-10 gold-line max-w-[60px] mx-auto" />
            <div className="mt-6 text-[#F5F1E9] text-sm">Yogesh Kumar Wadhwa</div>
            <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-[#C8A96A]/80">
              Founder & House Taster
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
