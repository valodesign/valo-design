"use client";

import { useEffect } from "react";

const animateSelector = "[data-animate]";

export function AnimationObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.classList.add("motion-reduced");
      document
        .querySelectorAll<HTMLElement>(animateSelector)
        .forEach((element) => element.classList.add("is-visible"));
      return () => {
        root.classList.remove("motion-reduced");
      };
    }

    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px 16% 0px",
        threshold: 0.05,
      },
    );

    const observeAnimatedElements = () => {
      document
        .querySelectorAll<HTMLElement>(animateSelector)
        .forEach((element) => {
          if (!element.classList.contains("is-visible")) {
            revealObserver.observe(element);
          }
        });
    };

    observeAnimatedElements();

    let animationFrame = 0;
    const mutationObserver = new MutationObserver(() => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(observeAnimatedElements);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      root.classList.remove("motion-ready");
      revealObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}
