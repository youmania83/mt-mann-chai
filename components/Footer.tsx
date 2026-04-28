import Link from "next/link";

const sections = [
  {
    title: "Collection",
    links: [
      { label: "Premium CTC", href: "/products" },
      { label: "House Blend", href: "/products" },
      { label: "Corporate Gifting", href: "/contact" },
    ],
  },
  {
    title: "House",
    links: [
      { label: "Heritage", href: "/about" },
      { label: "The Ritual", href: "/about" },
      { label: "Press", href: "/about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Concierge", href: "/contact" },
      { label: "WhatsApp", href: "/contact" },
      { label: "Wholesale", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] border-t border-[#C8A96A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 flex items-center justify-center">
                <span className="font-serif text-[#C8A96A]">M</span>
              </div>
              <div className="leading-none">
                <div className="font-serif text-[#F5F1E9] text-base tracking-[0.25em] uppercase">
                  Mt. Mann
                </div>
                <div className="mt-1 font-serif text-[10px] tracking-[0.5em] text-[#C8A96A]/80 uppercase">
                  Chai
                </div>
              </div>
            </Link>
            <p className="mt-8 text-[#F5F1E9]/55 text-sm leading-relaxed max-w-md font-light">
              A small house of premium Indian tea — composed slowly, packed in
              charcoal tins, and delivered for the unhurried hour.
            </p>
            <div className="mt-10 gold-line max-w-[120px]" />
            <p className="mt-6 text-[#F5F1E9]/45 text-xs leading-relaxed max-w-md">
              002, Plot No 47, Part-2, Shivani Enclave,<br />
              Sector 15 Dwarka, New Delhi 110078
            </p>
          </div>

          {/* Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96A] mb-6">
                  {s.title}
                </div>
                <ul className="space-y-3">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[#F5F1E9]/70 text-sm hover:text-[#C8A96A] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#F5F1E9]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F1E9]/40 text-xs tracking-wider">
            © {new Date().getFullYear()} Mt. Mann Chai. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[#F5F1E9]/40 text-xs hover:text-[#C8A96A] transition-colors">Privacy</Link>
            <Link href="#" className="text-[#F5F1E9]/40 text-xs hover:text-[#C8A96A] transition-colors">Terms</Link>
            <Link href="#" className="text-[#F5F1E9]/40 text-xs hover:text-[#C8A96A] transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
