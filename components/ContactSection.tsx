"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { DIVISIONS, SITE } from "@/lib/site";
import { Reveal, SectionHeading, SpotlightCard } from "./ui";

const field =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3.5 text-sm outline-none transition focus:border-gold placeholder:text-muted/60";

export default function ContactSection({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hello Sparrow Group, I'm ${f.get("name")} (${f.get("phone")}). Interested in: ${f.get("interest")}. ${f.get("message")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Start a conversation"
            title={<>Let&apos;s build something <span className="gold-text">exceptional</span>.</>}
            text="Tell us about your space, store or project. A specialist from the right division will get back to you quickly."
          />
          <Reveal delay={0.2} className="mt-8 flex items-center gap-3 text-sm text-muted">
            <MessageCircle className="h-5 w-5 text-gold" /> Submitting opens WhatsApp with your message pre-filled.
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <SpotlightCard>
            <form onSubmit={onSubmit} className="space-y-4 p-7 md:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={field} />
                <input name="phone" required placeholder="Phone number" className={field} />
              </div>
              <select name="interest" defaultValue={defaultInterest} className={field}>
                <option value="">I&apos;m interested in…</option>
                {DIVISIONS.map((d) => (
                  <option key={d.slug} value={d.name} className="bg-bg">
                    {d.name}
                  </option>
                ))}
              </select>
              <textarea name="message" rows={4} placeholder="Tell us about your project" className={field} />
              <button
                type="submit"
                className="gold-bg flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-medium text-[#1b1c1e] transition hover:shadow-[0_0_40px_-5px_rgba(201,174,120,0.6)]"
              >
                {sent ? "Opened — send it on WhatsApp" : "Send enquiry"} <Send className="h-4 w-4" />
              </button>
            </form>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
