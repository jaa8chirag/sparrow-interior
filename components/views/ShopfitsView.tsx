"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Clock, Hammer, Layers, Ruler } from "lucide-react";
import ContactSection from "../ContactSection";
import { Counter, PageHero, Pill, Tabs } from "../widgets";
import { Reveal, SectionHeading, SpotlightCard } from "../ui";
import { img } from "@/lib/site";

const FORMATS = [
  { n: "Flagship", id: "1604719312566-8912e9227c6a", size: "1,500 – 5,000 sq ft", time: "10 – 14 weeks", d: "High-impact brand destinations with custom fixtures, feature walls and integrated lighting.", tags: ["Custom joinery", "Feature lighting", "Façade & signage"] },
  { n: "Mall Store", id: "1556742049-0cfed4f6a45d", size: "600 – 1,500 sq ft", time: "6 – 8 weeks", d: "Mall-compliant fit-outs delivered inside tight handover windows and landlord guidelines.", tags: ["Landlord approvals", "Fast-track", "MEP"] },
  { n: "Shop-in-Shop", id: "1567401893414-76b7b1e5a7a5", size: "200 – 600 sq ft", time: "3 – 5 weeks", d: "Compact branded zones inside department stores, modular and repeatable.", tags: ["Modular", "Rollout-ready"] },
  { n: "Kiosk & Pop-up", id: "1441986300917-64674bd600d8", size: "Under 200 sq ft", time: "2 – 3 weeks", d: "Temporary and seasonal formats, designed to install, dismantle and reuse.", tags: ["Reusable", "Quick install"] },
];

const STEPS = [
  ["Site survey", "Measurements, services audit and landlord norms."],
  ["Drawings & approvals", "GFC drawings and mall or authority sign-off."],
  ["Procurement", "Vendors locked, materials tracked."],
  ["Fabrication", "Fixtures and joinery built in our workshop."],
  ["Site build", "Daily control, weekly progress reports."],
  ["Snag & handover", "Structured close-out, ready to trade."],
];

const CAPS = [
  { Icon: Hammer, t: "Workshop fabrication", p: "Joinery, metal and display fixtures built in-house for tighter quality and lead times." },
  { Icon: Layers, t: "MEP, lighting & HVAC", p: "Services coordinated with merchandising so lighting sells the product." },
  { Icon: Ruler, t: "Rollout programmes", p: "Standardised kits and playbooks that keep ten stores looking like one brand." },
];

export default function ShopfitsView() {
  const [f, setF] = useState(0);
  const cur = FORMATS[f];
  return (
    <>
      <PageHero
        eyebrow="Sparrow Shopfits"
        title="Stores built to sell,"
        accent="on schedule."
        text="Retail and commercial fit-out execution with workshop-grade fabrication, disciplined site management and rollout consistency."
        image={img("1604719312566-8912e9227c6a", 2000)}
        cta="Get a fit-out quote"
      />

      <section className="border-y border-line bg-bg2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
          {[
            { v: 4, s: "", l: "Store formats" },
            { v: 6, s: "", l: "Stage delivery system" },
            { v: 100, s: "%", l: "In-house fixtures" },
            { v: 1, s: "", l: "Single point of contact" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="gold-text font-serif text-5xl"><Counter to={x.v} suffix={x.s} /></div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="explore" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Formats" title={<>Every store, <span className="gold-text">every scale</span></>} />
          <div className="mt-8">
            <Tabs tabs={FORMATS.map((x) => x.n)} value={cur.n} onChange={(n) => setF(FORMATS.findIndex((x) => x.n === n))} />
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={cur.n} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-surface/40 lg:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(cur.id, 1200)} alt={cur.n} className="h-72 w-full object-cover lg:h-full" />
              <div className="p-8 md:p-12">
                <h3 className="font-serif text-4xl">{cur.n}</h3>
                <p className="mt-4 text-muted">{cur.d}</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-line p-4"><Ruler className="mb-2 h-5 w-5 text-gold" /><div className="text-xs text-muted">Typical size</div><div className="font-serif text-lg">{cur.size}</div></div>
                  <div className="rounded-xl border border-line p-4"><Clock className="mb-2 h-5 w-5 text-gold" /><div className="text-xs text-muted">Typical timeline</div><div className="font-serif text-lg">{cur.time}</div></div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">{cur.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div>
                <p className="mt-6 text-xs text-muted">Indicative ranges only. Final scope sets the schedule.</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-y border-line bg-bg2 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Delivery system" title={<>Six stages. <span className="gold-text">No surprises.</span></>} center />
          <ol className="relative mt-16 space-y-6 border-l border-gold/30 pl-10">
            {STEPS.map(([t, p], i) => (
              <Reveal key={t}>
                <li className="relative rounded-2xl border border-line bg-surface/50 p-6">
                  <span className="gold-bg absolute -left-[3.75rem] top-5 flex h-10 w-10 items-center justify-center rounded-full font-serif text-[#1b1c1e]">{i + 1}</span>
                  <h3 className="font-serif text-2xl">{t}</h3>
                  <p className="mt-1 text-sm text-muted">{p}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Capabilities" title={<>Everything under <span className="gold-text">one roof</span></>} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CAPS.map(({ Icon, t, p }, i) => (
              <Reveal key={t} delay={i * 0.1}>
                <SpotlightCard className="h-full">
                  <div className="p-8"><Icon className="h-7 w-7 text-gold" /><h3 className="mt-5 font-serif text-2xl">{t}</h3><p className="mt-3 text-sm text-muted">{p}</p></div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection defaultInterest="Sparrow Shopfits" />
    </>
  );
}
