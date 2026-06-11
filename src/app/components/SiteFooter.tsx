import Link from "next/link";
import { services } from "@/app/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-[#16313b] py-10 text-white">
      <div className="site-shell grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.2fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold">Valo Design</p>
          <p className="mt-3 max-w-xs leading-7 text-white/72">
            Residential architecture and interiors for new homes, renovations,
            planning, detailed design, and energy compliance.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-[#f2c36b]">
            Services
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm font-medium text-white/76 transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-[#f2c36b]">
            Contact
          </p>
          <Link
            href="/contact"
            className="mt-4 block break-words text-sm font-medium text-white/76 transition hover:text-white"
          >
            info@valodesign.co.uk
          </Link>
          <a
            href="tel:07854800191"
            className="mt-2 block text-sm font-medium text-white/76 transition hover:text-white"
          >
            07854800191
          </a>
        </div>
      </div>
    </footer>
  );
}
