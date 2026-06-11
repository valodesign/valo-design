"use client";

import type { FormEvent } from "react";
import { services } from "@/app/data/services";

const studioEmail = "info@valodesign.co.uk";

const inputClasses =
  "mt-2 min-h-12 w-full rounded-md border border-[#cfd6ca] bg-white px-4 text-base text-[#17211d] outline-none transition focus:border-[#6f7f56] focus:ring-2 focus:ring-[#6f7f56]/22";

const labelClasses = "text-sm font-semibold text-[#2f3d35]";

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formValue(formData, "name");
    const email = formValue(formData, "email");
    const phone = formValue(formData, "phone");
    const service = formValue(formData, "service");
    const location = formValue(formData, "location");
    const message = formValue(formData, "message");

    const subject = encodeURIComponent(
      name ? `Valo Design enquiry from ${name}` : "Valo Design enquiry",
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        service ? `Service interest: ${service}` : "",
        location ? `Project location: ${location}` : "",
        "",
        "Message:",
        message,
      ]
        .filter((line) => line !== "")
        .join("\n"),
    );

    window.location.href = `mailto:${studioEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      action={`mailto:${studioEmail}`}
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#d8ddd2]"
    >
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
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#17211d] px-5 text-base font-semibold text-white transition hover:bg-[#2f3d35] focus:outline-none focus:ring-2 focus:ring-[#6f7f56] sm:w-auto"
      >
        Send enquiry
      </button>
    </form>
  );
}
