import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { getService, services } from "@/app/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service not found | Valo Design",
    };
  }

  return {
    title: `${service.title} | Valo Design`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#f6f5ef] text-[#16313b]">
        <section className="relative overflow-hidden bg-[#16313b] text-white">
          <Image
            src="/residential-architecture-hero.png"
            alt="A renovated stone house with a contemporary extension at dusk"
            fill
            priority
            sizes="100vw"
            className="hero-media object-cover"
          />
          <div className="absolute inset-0 bg-[#0e2229]/68" />
          <SiteHeader variant="transparent" />
          <div className="site-shell relative z-10 flex min-h-[58svh] items-center py-16">
            <div
              className="w-[18.5rem] max-w-full min-w-0 sm:w-full sm:max-w-3xl"
              data-animate="slide-right"
            >
              <p className="text-sm font-semibold uppercase text-[#f2c36b]">
                Service
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl sm:leading-[1.03]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-white/84">
                {service.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="motion-button inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#f2c36b] px-5 text-center text-base font-semibold text-[#16313b] transition hover:bg-[#ffd27c] focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                >
                  Start an enquiry
                </Link>
                <Link
                  href="/#services"
                  className="motion-button inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/38 px-5 text-center text-base font-semibold text-white transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="site-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="min-w-0" data-animate="slide-right">
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Overview
              </p>
              <h2 className="mt-3 break-words text-3xl font-semibold leading-tight text-[#16313b]">
                {service.intro}
              </h2>
            </div>
            <div
              className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2"
              data-stagger
            >
              {service.highlights.map((highlight) => (
                <article
                  key={highlight}
                  data-animate="scale"
                  className="min-w-0 rounded-lg border border-[#d8d6cc] bg-white p-5 shadow-sm"
                >
                  <p className="break-words leading-7 text-[#5a6870]">
                    {highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="site-shell grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-animate="slide-right">
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                What we produce
              </p>
              <div className="mt-6 grid gap-3" data-stagger>
                {service.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    data-animate="slide-left"
                    className="min-w-0 break-words border-l-4 border-[#6f7f56] bg-[#fbfaf5] px-5 py-4 text-base font-medium leading-7 text-[#264650]"
                  >
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
            <div data-animate="slide-left">
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Best suited to
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-stagger>
                {service.idealFor.map((item) => (
                  <span
                    key={item}
                    data-animate="scale"
                    className="rounded-md border border-[#d8d6cc] bg-[#f6f5ef] px-4 py-3 text-sm font-semibold text-[#264650]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="site-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div data-animate="slide-right">
              <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#16313b]">
                A clear route from first conversation to useful information.
              </h2>
            </div>
            <ol className="grid gap-4" data-stagger>
              {service.process.map((step, index) => (
                <li
                  key={step}
                  data-animate="slide-left"
                  className="grid min-w-0 grid-cols-[3.5rem_1fr] rounded-lg border border-[#d8d6cc] bg-[#fbfaf5] p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#16313b] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="break-words pt-1 text-lg leading-7 text-[#264650]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#16313b] py-16 text-white">
          <div className="site-shell">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl" data-animate="slide-right">
                <p className="text-sm font-semibold uppercase text-[#f2c36b]">
                  Other services
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">
                  Connected support for the rest of the project.
                </h2>
              </div>
              <Link
                href="/contact"
                className="motion-button inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#f2c36b] px-5 text-base font-semibold text-[#16313b] transition hover:bg-[#ffd27c] focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
              >
                Contact the studio
              </Link>
            </div>
            <div
              className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              data-stagger
            >
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  data-animate="scale"
                  className="interactive-lift min-w-0 rounded-lg border border-white/14 bg-white/8 p-5 transition hover:bg-white/12"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {related.title}
                  </h3>
                  <p className="mt-3 break-words leading-7 text-white/72">
                    {related.shortDescription}
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
