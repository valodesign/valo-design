import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  variant?: "solid" | "transparent";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const isTransparent = variant === "transparent";

  return (
    <header
      data-animate="fade"
      className={
        isTransparent
          ? "relative z-20 py-6 text-white"
          : "relative z-20 border-b border-[#d8d6cc] bg-[#f6f5ef]/95 py-4 shadow-sm backdrop-blur"
      }
    >
      <div className="site-shell flex items-center justify-between gap-5">
        <Link
          href="/"
          className="inline-flex shrink-0"
          aria-label="Valo Design home"
        >
          <Image
            src={
              isTransparent
                ? "/Images/1no text thick line white.png"
                : "/Images/1no text thick line png.png"
            }
            alt="Valo Design"
            width={920}
            height={185}
            className="h-10 w-auto sm:h-12"
            priority={isTransparent}
          />
        </Link>
        <nav
          aria-label="Main navigation"
          data-stagger
          className={
            isTransparent
              ? "hidden items-center gap-7 text-sm font-medium text-white/82 sm:flex"
              : "hidden items-center gap-7 text-sm font-semibold text-[#264650] sm:flex"
          }
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              data-animate="fade"
              className={
                isTransparent
                  ? "motion-link transition hover:text-white"
                  : "motion-link transition hover:text-[#8f3f2f]"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
