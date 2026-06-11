import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { services } from "@/app/data/services";

export const metadata: Metadata = {
  title:
    "Contact Valo Design | Residential Architecture, Interiors and Energy Compliance",
  description:
    "Contact Valo Design about a new house, renovation, planning, detailed design, interior design, or energy compliance project.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen overflow-x-hidden bg-[#f6f5ef] text-[#16313b]">
        <section className="site-shell grid grid-cols-1 gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          <div className="min-w-0" data-animate="slide-right">
            <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl break-words text-3xl font-semibold leading-tight text-[#16313b] sm:text-5xl">
              Tell us about your home, plot, or interior brief.
            </h1>
            <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-[#5a6870]">
              Share a few details about the project, where it is, and which
              stage you are at. Valo Design will respond with the right next
              step for the enquiry.
            </p>
            <div
              className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2"
              data-stagger
            >
              <div
                className="border-l-4 border-[#6f7f56] py-2 pl-5"
                data-animate="slide-left"
              >
                <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                  Email
                </p>
                <a
                  href="mailto:info@valodesign.co.uk"
                  className="motion-link mt-2 block break-words text-lg font-semibold text-[#16313b] transition hover:text-[#8f3f2f]"
                >
                  info@valodesign.co.uk
                </a>
              </div>
              <div
                className="border-l-4 border-[#6f7f56] py-2 pl-5"
                data-animate="slide-left"
              >
                <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                  Phone
                </p>
                <a
                  href="tel:07854800191"
                  className="motion-link mt-2 block text-lg font-semibold text-[#16313b] transition hover:text-[#8f3f2f]"
                >
                  07854800191
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>

        <section className="bg-white py-14">
          <div className="site-shell">
            <div className="max-w-2xl" data-animate="slide-right">
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#16313b]">
                Choose the service that best matches the conversation.
              </h2>
            </div>
            <div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-stagger
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  data-animate="scale"
                  className="interactive-lift rounded-lg border border-[#d8d6cc] bg-[#fbfaf5] p-5 transition hover:border-[#c4c0b4] hover:bg-white"
                >
                  <h3 className="text-lg font-semibold text-[#16313b]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5a6870]">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
