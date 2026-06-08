import Image from "next/image";

const services = [
  {
    title: "New houses",
    description:
      "Bespoke homes shaped around site, light, budget, and the way each household wants to live.",
  },
  {
    title: "Renovations",
    description:
      "Careful redesign of existing houses, from whole-home remodelling to sensitive extensions.",
  },
  {
    title: "Planning support",
    description:
      "Clear concept options, planning drawings, and design statements that help proposals move forward.",
  },
  {
    title: "Detailed design",
    description:
      "Technical drawing packages, material guidance, and coordination for confident construction.",
  },
];

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
  "Low-energy upgrades and material refreshes",
];

const stats = [
  { value: "12+", label: "years shaping residential projects" },
  { value: "4", label: "clear stages from first sketch to site" },
  { value: "1:1", label: "studio-led service from brief to build" },
];

export default function Home() {
  return (
    <main className="option-static-header min-h-screen overflow-x-hidden bg-[#f6f7f3] text-[#17211d]">
      <section className="relative min-h-[82svh] overflow-hidden bg-[#17211d] text-white">
        <Image
          src="/residential-architecture-hero.png"
          alt="A renovated stone house with a contemporary extension at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#101714]/60" />

        <div className="site-shell relative z-10 flex min-h-[82svh] flex-col py-6">
          <header className="flex items-center justify-between gap-5">
            <a
              href="#top"
              className="inline-flex shrink-0"
              aria-label="Valo Design home"
            >
              <Image
                src="/Images/1no text thick line white.png"
                alt="Valo Design"
                width={920}
                height={185}
                className="h-10 w-auto sm:h-12"
              />
            </a>
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 text-sm font-medium text-white/82 sm:flex"
            >
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#process">
                Process
              </a>
              <a className="transition hover:text-white" href="#work">
                Work
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div
            id="top"
            className="flex flex-1 items-center pt-16 pb-12 sm:pt-20"
          >
            <div className="w-[18.5rem] max-w-full min-w-0 sm:w-full sm:max-w-2xl">
              <p className="mb-5 block w-fit max-w-full break-words border border-white/32 bg-white/10 px-3 py-2 text-sm font-medium leading-6 text-white/86 backdrop-blur">
                Residential architecture for new homes and considered
                renovations
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] text-white">
                Valo Design
              </h1>
              <p className="mt-6 max-w-xl break-words text-lg leading-8 text-white/86">
                Architectural design for people creating a new house, improving
                an existing one, or bringing light, flow, and quiet detail to a
                home that already has a story.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#f2c36b] px-5 text-center text-base font-semibold text-[#17211d] transition hover:bg-[#ffd27c] focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                >
                  Book a design consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/38 px-5 text-center text-base font-semibold text-white transition hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="site-shell grid gap-9 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="min-w-0 max-w-[18.5rem] sm:max-w-none">
            <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#17211d]">
              Design support for the decisions that make a house feel settled.
            </h2>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="min-w-0 rounded-lg border border-[#d8ddd2] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#17211d]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#526057]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="site-shell grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-4 border-[#6f7f56] py-2 pl-5"
            >
              <p className="text-4xl font-semibold text-[#17211d]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#526057]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 max-w-[18.5rem] sm:max-w-none">
            <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#17211d]">
              Measured thinking before drawings become expensive decisions.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#526057]">
              Every project starts by making the brief sharper. From there, the
              design develops through simple visual choices, practical drawings,
              and a steady route toward construction.
            </p>
          </div>
          <ol className="grid min-w-0 gap-4">
            {process.map((step, index) => (
              <li
                key={step}
                className="grid grid-cols-[3.5rem_1fr] items-start rounded-lg border border-[#d8ddd2] bg-[#fbfcf8] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#17211d] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-lg leading-7 text-[#2f3d35]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="bg-[#17211d] py-16 text-white">
        <div className="site-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-[#f2c36b]">
              Project Types
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              Homes with enough clarity to build and enough character to last.
            </h2>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type) => (
              <div
                key={type}
                className="rounded-lg border border-white/14 bg-white/8 p-5 text-base font-medium text-white/90"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="site-shell grid gap-8 border-t border-[#d8ddd2] pt-12 lg:grid-cols-[1fr_0.75fr]">
          <div className="min-w-0 max-w-[18.5rem] sm:max-w-none">
            <p className="text-sm font-semibold uppercase text-[#8f3f2f]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#17211d]">
              Start with the house you have, the house you want, or the plot
              waiting for both.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#526057]">
              Share the address, a short brief, and where you are in the
              process. Valo Design will come back with the right next step for a
              new-build, renovation, or extension project.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#d8ddd2]">
            <p className="text-sm font-semibold uppercase text-[#6f7f56]">
              Enquiries
            </p>
            <a
              href="mailto:hello@valodesign.co.uk"
              className="mt-4 block break-words text-2xl font-semibold text-[#17211d] transition hover:text-[#8f3f2f]"
            >
              hello@valodesign.co.uk
            </a>
            <a
              href="tel:+442000000000"
              className="mt-3 block text-lg font-medium text-[#526057] transition hover:text-[#17211d]"
            >
              +44 (0)20 0000 0000
            </a>
            <a
              href="mailto:hello@valodesign.co.uk?subject=Residential%20architecture%20enquiry"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#17211d] px-5 text-base font-semibold text-white transition hover:bg-[#2f3d35] focus:outline-none focus:ring-2 focus:ring-[#6f7f56]"
            >
              Email the studio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
