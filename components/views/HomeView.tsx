"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ContactSection from "../ContactSection";
import { Accordion, Counter } from "../widgets";
import { Button, Reveal, SectionHeading } from "../ui";
import { DIVISIONS, SITE, img } from "@/lib/site";

const SLIDES = [
  "1616486338812-3dadae4b4ace",
  "1604719312566-8912e9227c6a",
  "1497366216548-37526070297c",
  "1600585154340-be6161a56a0c",
];

const JOURNEY = [
  { n: "Retail Intelligence", t: "Choose the right location & format", p: "Catchment, footfall and benchmark data decide where and what to build.", href: "/retail-intelligence" },
  { n: "SS Interiors", t: "Design the experience", p: "Concept, layouts, materials and 3D visuals shaped around the brand.", href: "/design" },
  { n: "Sparrow PMC", t: "Plan, procure and control", p: "Independent budget, schedule and quality oversight for the owner.", href: "/pmc" },
  { n: "Sparrow Shopfits", t: "Build it, fast and flawless", p: "Workshop fabrication and disciplined site execution to opening day.", href: "/shopfits" },
  { n: "Sparrow Academy", t: "Train the people behind it", p: "Skills programmes that keep design, site and store teams sharp.", href: "/academy" },
];

export default function HomeView() {
  const [slide, setSlide] = useState(0);
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="grain relative flex min-h-screen items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0 -bottom-[20%]" style={{ y }}>
          <AnimatePresence>
            <motion.div
              key={slide}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img(SLIDES[slide], 2000)})` }}
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
            />
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-bg/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full gold-bg" /> Building since {SITE.since}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-5xl leading-[1.03] md:text-[5.5rem]">
                Spaces designed,
                <br />
                built &amp; <span className="gold-text italic">grown.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Sparrow Group brings interior design, retail fit-outs, project management, retail intelligence
                and training together, so one partner carries your project from first idea to opening day.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <Button href="#divisions">Our divisions</Button>
              <Button href="#contact" variant="ghost">Talk to us</Button>
            </Reveal>
          </div>
          <Reveal delay={0.35} className="hidden justify-self-end lg:block">
            <div className="w-80 rounded-3xl border border-line bg-bg/60 p-3 backdrop-blur-xl">
              <p className="px-4 pb-2 pt-3 text-[11px] uppercase tracking-[0.25em] text-gold">Jump to</p>
              {DIVISIONS.map((d) => (
                <Link key={d.slug} href={d.href} className="group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors hover:bg-gold/10">
                  <span className="font-serif text-lg">{d.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`h-1 rounded-full transition-all ${i === slide ? "gold-bg w-10" : "w-4 bg-fg/30"}`} />
          ))}
        </div>
        <ChevronDown className="absolute bottom-6 right-8 hidden h-6 w-6 animate-bounce text-gold md:block" />
      </section>

      {/* STATS */}
      <section className="border-y border-line bg-bg2">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
          {[
            { v: SITE.since, l: "Established" },
            { v: 5, l: "Specialist divisions" },
            { v: 1, l: "Accountable partner" },
            { v: 360, s: "°", l: "Idea to opening day" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="gold-text font-serif text-5xl"><Counter to={s.v} suffix={s.s} /></div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal className="relative h-[34rem]">
            <div className="absolute left-0 top-0 h-[26rem] w-[62%] overflow-hidden rounded-3xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("1586023492125-27b2c045efd7", 900)} alt="Interior detail" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 h-[22rem] w-[55%] overflow-hidden rounded-3xl border border-gold/40 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img("1604719312566-8912e9227c6a", 900)} alt="Retail store" className="h-full w-full object-cover" />
            </div>
            <div className="gold-bg absolute bottom-10 left-6 rounded-2xl px-6 py-5 text-[#1b1c1e]">
              <div className="font-serif text-4xl">{SITE.since}</div>
              <div className="text-xs uppercase tracking-[0.2em]">Since</div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={<>Started with interiors. <span className="gold-text">Grew into a group.</span></>}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                SS Interiors began in {SITE.since} with a simple belief: a well-designed space changes how
                people live and work. As clients asked for more than design, we built the rest of the chain
                around it: retail execution, independent project management, data-led retail strategy and a
                training academy.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Today Sparrow Group is one team under one roof, so design intent, budgets and timelines
                stay aligned from the first sketch to the last snag.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["Design-led", "Every decision starts with the space"], ["Accountable", "One partner, one point of contact"], ["Built to last", "Quality on site, not only on paper"]].map(([t, p]) => (
                  <div key={t} className="border-l border-gold/40 pl-4">
                    <div className="font-serif text-lg">{t}</div>
                    <div className="mt-1 text-xs text-muted">{p}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPANDING PANELS */}
      <section id="divisions" className="scroll-mt-20 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our divisions" title={<>Five specialisations. <span className="gold-text">One standard.</span></>} text="Hover or tap a panel to explore. Each division stands on its own and works better together." />
          <div className="mt-14 flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
            {DIVISIONS.map((d, i) => {
              const on = active === i;
              return (
                <motion.div
                  key={d.slug}
                  layout
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border transition-colors ${on ? "border-gold/50" : "border-line"} ${on ? "lg:flex-[3.2]" : "lg:flex-1"} min-h-[5rem] ${on ? "min-h-[24rem]" : ""}`}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${d.image})` }} />
                  <div className={`absolute inset-0 transition-colors ${on ? "bg-gradient-to-t from-bg via-bg/50 to-transparent" : "bg-bg/75"}`} />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gold">0{i + 1}</p>
                    <h3 className={`font-serif transition-all ${on ? "text-3xl" : "text-xl lg:[writing-mode:vertical-rl] lg:rotate-180 lg:absolute lg:bottom-6 lg:left-6"}`}>{d.name}</h3>
                    {on && (
                      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                        <p className="mt-2 max-w-md text-sm text-fg/80">{d.description}</p>
                        <Link href={d.href} className="mt-5 inline-flex items-center gap-2 rounded-full gold-bg px-5 py-2.5 text-sm font-medium text-[#1b1c1e]">
                          Explore <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-y border-line bg-bg2 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it fits together" title={<>One project, <span className="gold-text">five hand-offs removed</span></>} center />
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-5">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.n} delay={i * 0.08} className="h-full">
                <Link href={j.href} className="group relative flex h-full flex-col bg-bg2 p-7 transition-colors hover:bg-surface">
                  <span className="gold-text font-serif text-5xl">0{i + 1}</span>
                  <span className="mt-5 text-[11px] uppercase tracking-[0.2em] text-gold">{j.n}</span>
                  <h3 className="mt-2 font-serif text-xl leading-snug">{j.t}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{j.p}</p>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPACES WE WORK WITH */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Spaces we shape" title={<>For every kind of <span className="gold-text">space</span></>} />
          <div className="mt-14 grid auto-rows-[15rem] gap-4 md:grid-cols-4">
            {[
              { t: "Homes & Villas", id: "1600585154340-be6161a56a0c", c: "md:col-span-2 md:row-span-2" },
              { t: "Offices", id: "1497366216548-37526070297c", c: "" },
              { t: "Retail Stores", id: "1556742049-0cfed4f6a45d", c: "" },
              { t: "Restaurants & Cafés", id: "1554995207-c18c203602cb", c: "" },
              { t: "Showrooms", id: "1567401893414-76b7b1e5a7a5", c: "" },
              { t: "Hospitality", id: "1555041469-a586c61ea9bc", c: "md:col-span-2" },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06} className={`${s.c} h-full`}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(s.id, 1000)} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
                  <span className="absolute bottom-5 left-6 font-serif text-2xl">{s.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-line bg-bg2 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we stand for" title={<>Principles behind <span className="gold-text">every project</span></>} center />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Clarity", "Clear scope, transparent BOQs and honest timelines from day one."],
              ["Craft", "In-house fabrication and tight site quality control."],
              ["Collaboration", "Designers, builders and managers working as one team."],
              ["Commitment", "We own the outcome, all the way to handover and beyond."],
            ].map(([t, p], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-8 transition hover:-translate-y-1 hover:border-gold/40">
                  <span className="gold-text font-serif text-5xl">0{i + 1}</span>
                  <h3 className="mt-5 font-serif text-2xl">{t}</h3>
                  <p className="mt-3 text-sm text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden py-10" aria-hidden>
        <div className="marquee flex w-max whitespace-nowrap font-serif text-5xl text-muted/30">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12 pr-12">
              {["Design", "Shopfits", "PMC", "Retail Intelligence", "Academy"].map((w) => (
                <span key={w} className="flex items-center gap-12">{w}<span className="text-gold">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Questions" title={<>Good to <span className="gold-text">know</span></>} text="Not sure which division you need? Start here, or just talk to us." />
          <Accordion
            items={[
              { title: "Do I have to use all divisions?", text: "No. Each division works independently. Together they remove hand-offs and speed up delivery." },
              { title: "Which projects do you take on?", text: "Homes, offices, retail stores, restaurants and larger commercial fit-outs, from a single room to multi-city rollouts." },
              { title: "Can PMC oversee another contractor's work?", text: "Yes. Sparrow PMC is independent and can represent the owner on projects built by any contractor." },
              { title: "How do we get started?", text: "Send an enquiry below. The right division will contact you to understand scope, timeline and budget." },
            ]}
          />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-8">
        <Reveal>
          <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/30 px-8 py-20 text-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${img("1616486338812-3dadae4b4ace", 1800)})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-bg/90 via-bg/70 to-gold/20" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Planning a space? Let&apos;s make it <span className="gold-text italic">exceptional.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">Share your idea and the right Sparrow team will take it from there.</p>
              <div className="mt-9 flex justify-center gap-4"><Button href="#contact">Start a conversation</Button></div>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactSection />
    </>
  );
}
