"use client";

import { motion } from "framer-motion";
import { Clock, Percent, ShoppingBag, Users } from "lucide-react";
import ContactSection from "../ContactSection";
import { PageHero } from "../widgets";
import { Reveal, SectionHeading, SpotlightCard } from "../ui";

const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const FOOT = [12, 18, 26, 38, 44, 36, 34, 41, 58, 82, 96, 78, 40];

function lineChart() {
  const W = 560, H = 220, p = 24;
  const max = 100;
  const pts = FOOT.map((v, i) => [p + (i / (FOOT.length - 1)) * (W - 2 * p), H - p - (v / max) * (H - 2 * p)]);
  const d = pts.map((q, i) => `${i ? "L" : "M"}${q[0]},${q[1]}`).join(" ");
  return { d, area: `${d} L${pts[pts.length - 1][0]},${H - p} L${pts[0][0]},${H - p} Z`, W, H, pts };
}

// 14 x 7 floor grid with heat per cell (entrance bottom-left, billing right)
const ROWS = 7, COLS = 14;
const heat = (r: number, c: number) => {
  const hot = (cx: number, cy: number, s: number) => Math.exp(-(((c - cx) ** 2 + (r - cy) ** 2) / s));
  return Math.min(1, hot(2, 6, 10) * 0.9 + hot(7, 3, 8) * 0.8 + hot(12, 2, 6) * 1 + 0.06);
};

export default function RetailView() {
  const L = lineChart();
  return (
    <>
      <PageHero
        eyebrow="Retail Intelligence"
        title="Know your store before"
        accent="you build it."
        text="Catchment analysis, footfall insight and store-performance benchmarking, turning retail decisions into evidence."
        cta="Request an analysis"
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            { I: Users, v: "Footfall", s: "Peak-hour mapping" },
            { I: Percent, v: "Conversion", s: "Browse to buy" },
            { I: Clock, v: "Dwell time", s: "Zone by zone" },
            { I: ShoppingBag, v: "Sales / sq ft", s: "Format benchmarks" },
          ].map(({ I, v, s }, i) => (
            <motion.div key={v} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur">
              <I className="h-5 w-5 text-gold" />
              <div className="mt-3 font-serif text-xl">{v}</div>
              <div className="text-xs text-muted">{s}</div>
            </motion.div>
          ))}
        </div>
      </PageHero>

      <section id="explore" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What you get" title={<>A store, <span className="gold-text">read like data</span></>} text="Sample outputs from a store analysis. Illustrative data only." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="font-serif text-xl">Footfall by hour</h3>
                <p className="mb-4 text-xs text-muted">Relative visitors, weekday average</p>
                <svg viewBox={`0 0 ${L.W} ${L.H}`} className="w-full">
                  <defs>
                    <linearGradient id="fa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--gold-2)" stopOpacity=".45" /><stop offset="100%" stopColor="var(--gold-2)" stopOpacity="0" /></linearGradient>
                  </defs>
                  {[0, 1, 2, 3].map((g) => <line key={g} x1="24" x2={L.W - 24} y1={24 + g * 57.3} y2={24 + g * 57.3} stroke="rgba(224,204,156,.1)" />)}
                  <motion.path d={L.area} fill="url(#fa)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} />
                  <motion.path d={L.d} fill="none" stroke="var(--gold-2)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} />
                  {L.pts.map((q, i) => i % 2 === 0 && <text key={i} x={q[0]} y={L.H - 4} fontSize="10" fill="var(--muted)" textAnchor="middle">{HOURS[i]}h</text>)}
                </svg>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="p-6">
                <h3 className="font-serif text-xl">Floor heat-map</h3>
                <p className="mb-4 text-xs text-muted">Where shoppers actually spend time</p>
                <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
                  {Array.from({ length: ROWS * COLS }, (_, i) => {
                    const r = Math.floor(i / COLS), c = i % COLS;
                    return (
                      <motion.div key={i} className="aspect-square rounded-[3px]" style={{ background: `rgba(201,174,120,${0.08 + heat(r, c) * 0.92})` }}
                        initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: (r + c) * 0.025 }} />
                    );
                  })}
                </div>
                <div className="mt-3 flex justify-between text-[11px] text-muted"><span>Entrance</span><span>Promo table</span><span>Billing</span></div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="lg:col-span-2">
              <div className="p-6">
                <h3 className="font-serif text-xl">Shopper funnel</h3>
                <p className="mb-6 text-xs text-muted">From walk-in to purchase</p>
                {[["Walk-ins", 100], ["Browsed", 64], ["Engaged / trial", 31], ["Purchased", 18]].map(([l, v], i) => (
                  <div key={l as string} className="mb-3 flex items-center gap-4">
                    <div className="w-32 text-sm text-muted">{l}</div>
                    <div className="h-9 flex-1 rounded-lg bg-bg">
                      <motion.div className="gold-bg flex h-9 items-center justify-end rounded-lg pr-3 text-sm font-medium text-[var(--on-gold)]" initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15 }}>{v}%</motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg2 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Engagements" title={<>Four ways we <span className="gold-text">help you grow</span></>} center />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Site & catchment", "Score locations on demand, access, rent and competition before you sign."],
              ["Layout optimisation", "Zoning and adjacency plans that lift sales per sq ft."],
              ["Expansion planning", "Prioritise cities and clusters with a clear opening roadmap."],
              ["Performance tracking", "Live KPI dashboards for every outlet after launch."],
            ].map(([t, p], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-6 transition hover:border-gold/40">
                  <span className="gold-text font-serif text-4xl">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactSection defaultInterest="Retail Intelligence" />
    </>
  );
}
