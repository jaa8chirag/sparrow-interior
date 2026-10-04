"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import ContactSection from "../ContactSection";
import { Pill, PageHero, Tabs } from "../widgets";
import { Reveal, SectionHeading } from "../ui";
import { img } from "@/lib/site";

const CATS = ["All", "Residential", "Commercial", "Hospitality"];
const WORK = [
  { t: "The Sunlit Living Room", c: "Residential", id: "1616486338812-3dadae4b4ace", h: "h-80" },
  { t: "Quiet Luxe Bedroom", c: "Residential", id: "1631679706909-1844bbd07221", h: "h-64" },
  { t: "Open-plan Workspace", c: "Commercial", id: "1497366216548-37526070297c", h: "h-72" },
  { t: "Statement Lounge", c: "Hospitality", id: "1555041469-a586c61ea9bc", h: "h-64" },
  { t: "Modern Villa Facade", c: "Residential", id: "1600585154340-be6161a56a0c", h: "h-80" },
  { t: "Executive Floor", c: "Commercial", id: "1519389950473-47ba0277781c", h: "h-72" },
  { t: "Warm Minimal Home", c: "Residential", id: "1493663284031-b7e3aefcae8e", h: "h-72" },
  { t: "Boutique Hospitality", c: "Hospitality", id: "1554995207-c18c203602cb", h: "h-80" },
  { t: "Material Study", c: "Residential", id: "1586023492125-27b2c045efd7", h: "h-64" },
];

const STYLES = [
  { n: "Contemporary", id: "1600210492486-724fe5c67fb0", d: "Clean lines, honest materials and layered lighting for modern living.", m: ["Walnut veneer", "Matte black metal", "Large-format stone"] },
  { n: "Quiet Luxe", id: "1616486338812-3dadae4b4ace", d: "Understated richness: brass accents, velvet, marble and a calm tonal palette.", m: ["Brass inlay", "Italian marble", "Velvet & boucle"] },
  { n: "Warm Minimal", id: "1493663284031-b7e3aefcae8e", d: "Soft textures and natural light, with nothing that does not earn its place.", m: ["Oak", "Lime plaster", "Linen"] },
  { n: "Neo-Classic", id: "1555041469-a586c61ea9bc", d: "Timeless mouldings and symmetry, reinterpreted with a modern hand.", m: ["Wall panelling", "Fluted glass", "Statement chandeliers"] },
];

export default function DesignView() {
  const [cat, setCat] = useState("All");
  const [style, setStyle] = useState(0);
  const items = WORK.filter((w) => cat === "All" || w.c === cat);
  const s = STYLES[style];

  return (
    <>
      <PageHero
        eyebrow="SS Interiors · Since 2016"
        title="Interiors that feel"
        accent="inevitable."
        text="Residential, commercial and hospitality design. Concept, detailing and turnkey delivery by one accountable studio."
        image={img("1616486338812-3dadae4b4ace", 2000)}
      />

      <section id="explore" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Portfolio" title={<>Selected <span className="gold-text">work</span></>} />
            <Tabs tabs={CATS} value={cat} onChange={setCat} />
          </div>
          <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {items.map((w) => (
                <motion.figure
                  layout
                  key={w.t}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative mb-5 ${w.h} break-inside-avoid overflow-hidden rounded-2xl border border-line`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(w.id, 900)} alt={w.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg/90 via-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gold">{w.c}</span>
                    <span className="font-serif text-xl">{w.t}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted">
            <ImageIcon className="h-3.5 w-3.5" /> Placeholder imagery. Replace with SS Interiors project photos.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg2 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Design languages" title={<>Find your <span className="gold-text">style</span></>} />
            <div className="mt-8">
              <Tabs tabs={STYLES.map((x) => x.n)} value={s.n} onChange={(n) => setStyle(STYLES.findIndex((x) => x.n === n))} />
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={s.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-8">
                <p className="max-w-md text-lg text-muted">{s.d}</p>
                <div className="mt-6 flex flex-wrap gap-2">{s.m.map((m) => <Pill key={m}>{m}</Pill>)}</div>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={s.n} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-line" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img(s.id, 1200)} alt={s.n} className="relative aspect-[4/3] w-full rounded-2xl object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our process" title={<>From first meeting to <span className="gold-text">final styling</span></>} center />
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              ["Discover", "Brief, site study, budget and lifestyle mapping.", "01"],
              ["Concept", "Mood boards, space plans, material palette.", "02"],
              ["Detail", "Working drawings, 3D renders, transparent BOQ.", "03"],
              ["Deliver", "Site execution, quality checks, styling and handover.", "04"],
            ].map(([t, p, n], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-7">
                  <span className="gold-text font-serif text-6xl opacity-60">{n}</span>
                  <h3 className="mt-4 font-serif text-2xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection defaultInterest="SS Interiors" />
    </>
  );
}
