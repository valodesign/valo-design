import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { services } from "@/app/data/services";

const process = [
  "Listen to your ambitions, constraints, and budget.",
  "Study the site, existing fabric, light, movement, and views.",
  "Develop a calm concept with clear drawings and cost-aware choices.",
  "Guide planning, detailing, and construction with steady communication.",
];

const projectTypes = [
  "Contemporary one-off houses",
  "Heritage home extensions",
  "Whole-house refurbishments",
  "Kitchen, living, and garden connections",
  "Loft, side-return, and rear additions",
  "Interior schemes, finishes, and furniture coordination",
  "SAP, TM59, and psi calculation support",
];

const stats = [
  { value: "12+", label: "years shaping residential projects" },
  { value: "4", label: "clear stages from first sketch to site" },
  { value: "1:1", label: "studio-led service from brief to build" },
];

export default function Home() {
  return (
    <>
      <main className="option-static-header min-h-screen overflow-x-hidden bg-[#f6f5ef] text-[#16313b]">
        <section className="relative min-h-[82svh] overflow-hidden bg-[#16313b] text-white">
          <Image
            src="/residential-architecture-hero.png"
            alt="A renovated stone house with a contemporary extension at dusk"
            fill
            priority
            sizes="100vw"
            className="hero-media object-cover"
          />
          <div className="absolute inset-0 bg-[#0e2229]/60" />

          <SiteHeader variant="transparent" />

          <div className="site-shell relative z-10 flex min-h-[calc(82svh-6rem)] flex-col">
            <div
              id="top"
              className="flex flex-1 items-center pt-16 pb-12 sm:pt-20"
            >
              <div
                className="w-[18.5rem] max-w-full min-w-0 sm:w-full sm:max-w-2xl"
                data-animate="slide-right"
              >
                <p className="mb-5 block w-fit max-w-full break-words border border-white/32 bg-white/10 px-3 py-2 text-sm font-medium leading-6 text-white/86 backdrop-blur">
                  Residential architecture, interiors, and energy compliance
                  for new homes and considered renovations
                </p>
                <h1 className="text-5xl font-semibold leading-[1.02] text-white">
                  Valo Design
                </h1>
                <p className="mt-6 max-w-xl break-words text-lg leading-8 text-white/86">
                  Architectural, interior design, and energy compliance support
                  for people creating a new house, improving an existing one, or
                  bringing light, flow, finishes, performance, and quiet detail
                  to a home that already has a story.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="motion-button inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#f2c36b] px-5 text-center text-base font-semibold text-[#16313b] transition hover:bg-[#ffd27c] focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                  >
                    Book a design consultation
                  </Link>
                  <a
                    href="#services"
                    className="motion-button inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/38 px-5 text-center text-base font-semibold text-white transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                  >
                    Explore services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="site-shell grid grid-cols-1 gap-9 lg:grid-cols-[0.75fr_1.25fr]">
            <div
              className="min-w-0 max-w-[18.5rem] sm:max-w-none"
              data-animate="slide-right"
            >
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#16313b]">
                Design support for the decisions that make a house feel
                settled.
              </h2>
            </div>
            <div
              className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2"
              data-stagger
            >
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  data-animate="scale"
                  className="interactive-lift group min-w-0 rounded-lg border border-[#d8d6cc] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#c4c0b4] hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#16313b]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5a6870]">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[#8f3f2f] transition group-hover:text-[#16313b]">
                    View service
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div
            className="site-shell grid grid-cols-1 gap-5 sm:grid-cols-3"
            data-stagger
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-animate="slide-left"
                className="border-l-4 border-[#6f7f56] py-2 pl-5"
              >
                <p className="text-4xl font-semibold text-[#16313b]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5a6870]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="py-16">
          <div className="site-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              className="min-w-0 max-w-[18.5rem] sm:max-w-none"
              data-animate="slide-right"
            >
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#16313b]">
                Measured thinking before drawings become expensive decisions.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#5a6870]">
                Every project starts by making the brief sharper. From there,
                the design develops through simple visual choices, practical
                drawings, and a steady route toward construction.
              </p>
            </div>
            <ol className="grid min-w-0 gap-4" data-stagger>
              {process.map((step, index) => (
                <li
                  key={step}
                  data-animate="slide-left"
                  className="grid grid-cols-[3.5rem_1fr] items-start rounded-lg border border-[#d8d6cc] bg-[#fbfaf5] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#16313b] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-lg leading-7 text-[#264650]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="bg-[#16313b] py-16 text-white">
          <div className="site-shell">
            <div className="max-w-2xl" data-animate="slide-right">
              <p className="text-sm font-semibold uppercase text-[#f2c36b]">
                Project Types
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Homes with enough clarity to build and enough character to
                last.
              </h2>
            </div>
            <div
              className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              data-stagger
            >
              {projectTypes.map((type) => (
                <div
                  key={type}
                  data-animate="scale"
                  className="rounded-lg border border-white/14 bg-white/8 p-5 text-base font-medium text-white/90"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="site-shell grid grid-cols-1 gap-8 border-t border-[#d8d6cc] pt-12 lg:grid-cols-[1fr_0.75fr]">
            <div
              className="min-w-0 max-w-[18.5rem] sm:max-w-none"
              data-animate="slide-right"
            >
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#16313b]">
                Start with the house you have, the house you want, or the plot
                waiting for both.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#5a6870]">
                Share the address, a short brief, and where you are in the
                process. Valo Design will come back with the right next step
                for a new-build, renovation, planning, detailed design,
                interior, or energy compliance project.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#d8d6cc]"
              data-animate="scale"
            >
              <p className="text-sm font-semibold uppercase text-[#6f7f56]">
                Enquiries
              </p>
              <a
                href="mailto:info@valodesign.co.uk"
                className="motion-link mt-4 block break-words text-2xl font-semibold text-[#16313b] transition hover:text-[#8f3f2f]"
              >
                info@valodesign.co.uk
              </a>
              <a
                href="tel:07854800191"
                className="motion-link mt-3 block text-lg font-medium text-[#5a6870] transition hover:text-[#16313b]"
              >
                07854800191
              </a>
              <Link
                href="/contact"
                className="motion-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#16313b] px-5 text-base font-semibold text-white transition hover:bg-[#264650] focus:outline-none focus:ring-2 focus:ring-[#6f7f56]"
              >
                Open contact form
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
