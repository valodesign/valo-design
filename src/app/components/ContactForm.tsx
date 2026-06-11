"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { services } from "@/app/data/services";

const inputClasses =
  "mt-2 min-h-12 w-full rounded-md border border-[#d1cec4] bg-white px-4 text-base text-[#16313b] outline-none transition focus:border-[#6f7f56] focus:ring-2 focus:ring-[#6f7f56]/22";

const labelClasses = "text-sm font-semibold text-[#264650]";

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm() {
  const [status, setStatus] = useState<"error" | "idle" | "sent" | "submitting">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formValue(formData, "name");
    const email = formValue(formData, "email");
    const phone = formValue(formData, "phone");
    const service = formValue(formData, "service");
    const location = formValue(formData, "location");
    const message = formValue(formData, "message");

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          company: formValue(formData, "company"),
          email,
          location,
          message,
          name,
          phone,
          service,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "The message could not be sent.");
      }

      form.reset();
      setStatus("sent");
      setStatusMessage("Thanks, your enquiry has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent. Please email info@valodesign.co.uk.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-animate="scale"
      className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#d8d6cc]"
    >
      <label className="hidden" htmlFor="company">
        Company
        <input
          autoComplete="off"
          id="company"
          name="company"
          tabIndex={-1}
          type="text"
        />
      </label>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClasses} htmlFor="name">
          Name
          <input
            className={inputClasses}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className={labelClasses} htmlFor="email">
          Email
          <input
            className={inputClasses}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className={labelClasses} htmlFor="phone">
          Phone
          <input
            className={inputClasses}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </label>
        <label className={labelClasses} htmlFor="service">
          Service
          <select
            className={inputClasses}
            id="service"
            name="service"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={`${labelClasses} mt-5 block`} htmlFor="location">
        Project location
        <input
          className={inputClasses}
          id="location"
          name="location"
          type="text"
          autoComplete="street-address"
        />
      </label>
      <label className={`${labelClasses} mt-5 block`} htmlFor="message">
        Message
        <textarea
          className={`${inputClasses} min-h-36 resize-y py-3 leading-7`}
          id="message"
          name="message"
          required
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="motion-button mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#16313b] px-5 text-base font-semibold text-white transition hover:bg-[#264650] focus:outline-none focus:ring-2 focus:ring-[#6f7f56] sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
      {statusMessage ? (
        <p
          aria-live="polite"
          className={`mt-4 text-sm font-semibold ${
            status === "sent" ? "text-[#2f6f4e]" : "text-[#8f3f2f]"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
