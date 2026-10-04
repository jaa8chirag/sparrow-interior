"use client";

import { motion } from "framer-motion";
import ContactSection from "../ContactSection";
import { Accordion, PageHero } from "../widgets";
import { Reveal, SectionHeading } from "../ui";

const TASKS = [
  { n: "Feasibility & budget", s: 0, e: 3 },
  { n: "Design freeze", s: 2, e: 6 },
  { n: "Tendering", s: 5, e: 9 },
  { n: "Procurement", s: 8, e: 14 },
  { n: "Site execution", s: 10, e: 24 },
  { n: "Testing & QA", s: 22, e: 26 },
  { n: "Handover", s: 25, e: 28 },
];
const WEEKS = 28;

function Ring({ pct, label, sub }: { pct: number; label: string; sub: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center rounded-2xl border border-line bg-surface/50 p-6 text-center">
      <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(224,204,156,0.12)" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r={r} fill="none" stroke="url(#g)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e6d5a8" />
            <stop offset="100%" stopColor="#a98a52" />
          </linearGradient>
        </defs>
      </svg>
      <div className="-mt-[4.6rem] mb-8 font-serif text-2xl">{pct}%</div>
      <div className="font-serif text-lg">{label}</div>
      <div className="text-xs text-muted">{sub}</div>
    </div>
  );
}

export default function PmcView() {
  return (
    <>
      <PageHero
        eyebrow="Sparrow PMC"
        title="Control cost, time and"
        accent="quality."
        text="Independent project management that represents the owner from feasibility to final handover, with clear reporting at every step."
        cta="Talk to a project manager"
      >
        <div className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
            <span>Sample project tracker</span><span className="text-gold">Live</span>
          </div>
          {TASKS.slice(0, 5).map((t, i) => (
            <div key={t.n} className="mb-3">
              <div className="mb-1 flex justify-between text-xs"><span>{t.n}</span><span className="text-muted">{[100, 100, 85, 60, 35][i]}%</span></div>
              <div className="h-2 rounded-full bg-bg">
                <motion.div className="gold-bg h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${[100, 100, 85, 60, 35][i]}%` }} transition={{ duration: 1.4, delay: 0.4 + i * 0.12 }} />
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <section id="explore" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Master schedule" title={<>Every week <span className="gold-text">accounted for</span></>} text="A typical 28-week fit-out programme as we plan and monitor it. Illustrative." />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-surface/40 p-6">
            <div className="min-w-[720px]">
              <div className="ml-44 grid" style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}>
                {Array.from({ length: WEEKS }, (_, i) => (
                  <div key={i} className="border-l border-line/60 pb-2 text-center text-[10px] text-muted">{(i + 1) % 4 === 1 ? `W${i + 1}` : ""}</div>
                ))}
              </div>
              {TASKS.map((t, i) => (
                <div key={t.n} className="flex items-center border-t border-line/60 py-3">
                  <div className="w-44 shrink-0 pr-4 text-sm">{t.n}</div>
                  <div className="relative h-5 flex-1">
                    <motion.div
                      className="gold-bg absolute h-5 rounded-md"
                      style={{ left: `${(t.s / WEEKS) * 100}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((t.e - t.s) / WEEKS) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Owner dashboard" title={<>Decisions backed by <span className="gold-text">numbers</span></>} center />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Ring pct={92} label="Budget health" sub="Variance under control" />
            <Ring pct={86} label="Schedule index" sub="Against baseline" />
            <Ring pct={95} label="Quality score" sub="Inspections passed" />
            <Ring pct={100} label="Safety" sub="Zero-incident target" />
          </div>
          <p className="mt-6 text-center text-xs text-muted">Sample dashboard values for illustration.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <SectionHeading eyebrow="Scope of services" title={<>Representing <span className="gold-text">your interests</span></>} text="We sit on the owner's side of the table: planning, procuring, supervising and closing out, so you never have to chase information." />
          </Reveal>
          <Accordion
            items={[
              { title: "Pre-construction planning", text: "Feasibility, budget estimates, master schedule and risk register before a rupee is committed." },
              { title: "Tendering & procurement", text: "Scope packaging, competitive bids, bid analysis and contract strategy." },
              { title: "Site supervision & QA", text: "On-ground inspection, mock-ups, checklists and safety oversight." },
              { title: "Cost control & billing audit", text: "Budget tracking, variation control and independent certification of contractor bills." },
              { title: "Reporting & close-out", text: "Weekly progress reports, snag lists, as-built records and final accounts." },
            ]}
          />
        </div>
      </section>
      <ContactSection defaultInterest="Sparrow PMC" />
    </>
  );
}
