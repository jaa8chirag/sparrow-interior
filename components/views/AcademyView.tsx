"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Clock, Signal, Users } from "lucide-react";
import ContactSection from "../ContactSection";
import { Accordion, PageHero, Pill, Tabs } from "../widgets";
import { Reveal, SectionHeading, SpotlightCard } from "../ui";
import { img } from "@/lib/site";

const CATS = ["All", "Design", "Execution", "Management", "Software", "Retail"];
const COURSES = [
  { t: "Professional Interior Design", c: "Design", d: "6 months", l: "Beginner", tags: ["Space planning", "Materials", "Portfolio"] },
  { t: "Advanced Residential Design", c: "Design", d: "3 months", l: "Intermediate", tags: ["Luxury homes", "Detailing"] },
  { t: "Site Execution & Supervision", c: "Execution", d: "2 months", l: "Beginner", tags: ["Civil & finishing", "Quality checks"] },
  { t: "Project Management for Interiors", c: "Management", d: "2 months", l: "Intermediate", tags: ["Scheduling", "Costing", "Vendors"] },
  { t: "AutoCAD & Working Drawings", c: "Software", d: "6 weeks", l: "Beginner", tags: ["2D drafting", "GFC sets"] },
  { t: "SketchUp, 3ds Max & Rendering", c: "Software", d: "10 weeks", l: "Intermediate", tags: ["3D modelling", "V-Ray"] },
  { t: "Retail Store Design & VM", c: "Retail", d: "6 weeks", l: "Beginner", tags: ["Store layout", "Merchandising"] },
  { t: "Corporate Team Training", c: "Management", d: "Custom", l: "All levels", tags: ["On-site", "Tailored"] },
];

export default function AcademyView() {
  const [cat, setCat] = useState("All");
  const list = COURSES.filter((c) => cat === "All" || c.c === cat);
  return (
    <>
      <PageHero
        eyebrow="Sparrow Academy"
        title="Grow the people"
        accent="who build."
        text="Practical programmes in interior design, site execution, project management and retail, taught by working professionals on real projects."
        image={img("1524178232363-1fb2b075b655", 2000)}
        cta="Enquire about a batch"
      />

      <section id="explore" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Programmes" title={<>Find your <span className="gold-text">track</span></>} />
            <Tabs tabs={CATS} value={cat} onChange={setCat} />
          </div>
          <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((c) => (
                <motion.div layout key={c.t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
                  <SpotlightCard className="h-full transition-colors hover:border-gold/40">
                    <div className="flex h-full flex-col p-7">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-gold">{c.c}</span>
                      <h3 className="mt-3 font-serif text-2xl">{c.t}</h3>
                      <div className="mt-5 flex gap-5 text-sm text-muted">
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" />{c.d}</span>
                        <span className="flex items-center gap-1.5"><Signal className="h-4 w-4 text-gold" />{c.l}</span>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">{c.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="mt-4 text-xs text-muted">Course list, durations and levels are sample content. Confirm with the academy team.</p>
        </div>
      </section>

      <section className="border-y border-line bg-bg2 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Flagship programme" title={<>Inside the interior design <span className="gold-text">curriculum</span></>} text="Six modules that take you from fundamentals to a client-ready portfolio." />
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[[BookOpen, "6 modules"], [Users, "Small batches"], [Clock, "Live mentors"]].map(([I, l]) => {
                const Icon = I as typeof Clock;
                return <div key={l as string} className="rounded-xl border border-line p-4 text-center"><Icon className="mx-auto mb-2 h-5 w-5 text-gold" /><div className="text-xs">{l as string}</div></div>;
              })}
            </div>
          </div>
          <Accordion
            items={[
              { title: "1 · Design fundamentals", text: "Elements and principles, colour, proportion and human-scale ergonomics." },
              { title: "2 · Space planning", text: "Layouts for homes and offices, circulation and furniture planning." },
              { title: "3 · Materials & finishes", text: "Stone, wood, laminates, paint, glass and how to specify them." },
              { title: "4 · Drafting & 3D", text: "AutoCAD working drawings, SketchUp modelling and photoreal rendering." },
              { title: "5 · Costing & site", text: "BOQ preparation, vendor coordination and site supervision basics." },
              { title: "6 · Portfolio & career", text: "A complete live project, portfolio review and interview preparation." },
            ]}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why Sparrow Academy" title={<>Learn from people who <span className="gold-text">actually build</span></>} center />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["Taught by practitioners", "Faculty drawn from design, execution and project-management teams across Sparrow Group."],
              ["Real project exposure", "Site visits and live briefs, not just classroom slides."],
              ["Career pathway", "Portfolio support and a route into the group's divisions."],
            ].map(([t, p], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-8"><span className="gold-text font-serif text-5xl">0{i + 1}</span><h3 className="mt-4 font-serif text-2xl">{t}</h3><p className="mt-2 text-sm text-muted">{p}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection defaultInterest="Sparrow Academy" />
    </>
  );
}
