"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type ServiceNavItem = {
  href: string;
  label: string;
};

type ServicesDropdownProps = {
  isTransparent: boolean;
  items: ServiceNavItem[];
};

export function ServicesDropdown({
  isTransparent,
  items,
}: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const linkTone = isTransparent
    ? "text-white/82 hover:text-white focus-visible:ring-white"
    : "text-[#264650] hover:text-[#8f3f2f] focus-visible:ring-[#8f3f2f]";

  return (
    <div
      ref={rootRef}
      data-animate="fade"
      className="relative"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        className={`motion-link inline-flex items-center gap-1.5 rounded-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${
          isTransparent ? "focus-visible:ring-offset-transparent" : ""
        } ${linkTone}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        Services
        <span
          aria-hidden="true"
          className="mt-0.5 h-1.5 w-1.5 border-b border-r border-current transition-transform"
          style={{ transform: isOpen ? "rotate(225deg)" : "rotate(45deg)" }}
        />
      </button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-md border border-[#d8d6cc] bg-[#fbfaf5] py-2 text-[#16313b] shadow-[0_1.5rem_3rem_rgba(14,34,41,0.18)] ring-1 ring-black/5"
        >
          <Link
            role="menuitem"
            href="/#services"
            className="block px-4 py-3 text-sm font-semibold transition hover:bg-[#f1eee5] hover:text-[#8f3f2f] focus:bg-[#f1eee5] focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            Services overview
          </Link>
          <div className="my-1 h-px bg-[#d8d6cc]" />
          {items.map((item) => (
            <Link
              key={item.href}
              role="menuitem"
              href={item.href}
              className="block px-4 py-3 text-sm font-semibold transition hover:bg-[#f1eee5] hover:text-[#8f3f2f] focus:bg-[#f1eee5] focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
