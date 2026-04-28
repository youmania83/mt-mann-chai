import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Mt. Mann Chai",
  description:
    "A quiet line to the house — for orders, gifting, and wholesale enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0F0F0F] text-[#F5F1E9]">
        <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#082A20] via-[#0F0F0F] to-[#0F0F0F]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#0B3D2E]/40 blur-[140px]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-8">A Quiet Line</div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#F5F1E9] leading-[1.05] tracking-[-0.02em]">
              Write to <span className="italic gold-text">the house.</span>
            </h1>
            <p className="mt-8 max-w-xl mx-auto text-[#F5F1E9]/60 text-lg font-light leading-relaxed">
              For orders, custom gifting, or simply to say which cup is yours.
              We answer every note within a working day.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-10 pb-32">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-12">
              <ContactForm />
            </div>

            {/* Aside */}
            <aside className="lg:col-span-2 space-y-10">
              <div>
                <div className="eyebrow mb-3">Concierge</div>
                <a
                  href="https://wa.me/919999999999"
                  className="font-serif text-3xl text-[#F5F1E9] hover:text-[#C8A96A] transition-colors"
                >
                  +91 99999 99999
                </a>
                <p className="mt-3 text-[#F5F1E9]/55 text-sm">
                  Available on WhatsApp · Mon–Sat, 10:00–18:00 IST
                </p>
                <a
                  href="https://wa.me/919999999999"
                  className="btn-ghost mt-6 inline-flex"
                >
                  Open WhatsApp
                </a>
              </div>

              <div className="gold-line" />

              <div>
                <div className="eyebrow mb-3">Studio</div>
                <p className="text-[#F5F1E9]/70 text-sm leading-relaxed">
                  002, Plot No 47, Part-2,<br />
                  Shivani Enclave, Sector 15 Dwarka,<br />
                  New Delhi 110078, India
                </p>
              </div>

              <div className="gold-line" />

              <div>
                <div className="eyebrow mb-3">Email</div>
                <a
                  href="mailto:hello@mtmannchai.com"
                  className="text-[#F5F1E9] hover:text-[#C8A96A] transition-colors"
                >
                  hello@mtmannchai.com
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
