"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DIVISION_ICONS } from "./icons";
import type { Division } from "@/lib/site";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 gold-bg" />
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted">{text}</p>}
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "gold"
      ? "gold-bg text-[#1b1c1e] hover:shadow-[0_0_40px_-5px_rgba(201,174,120,0.6)] hover:-translate-y-0.5"
      : "border border-gold/40 text-gold-light hover:border-gold hover:bg-gold/10";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

/** Card with a gold spotlight that follows the cursor. */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const bg = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, rgba(201,174,120,0.16), transparent 70%)`;
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface/60 ${className}`}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      <div className="relative">{children}</div>
    </div>
  );
}

export function DivisionCard({ d, i }: { d: Division; i: number }) {
  const Icon = DIVISION_ICONS[d.icon];
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <Link href={d.href} className="group block h-full">
        <SpotlightCard className="h-full transition-colors duration-300 group-hover:border-gold/50">
          <div
            className="h-44 bg-cover bg-center opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
            style={{ backgroundImage: `url(${d.image})` }}
          />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-transparent to-surface" />
          <div className="relative -mt-8 p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-bg text-gold">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{d.eyebrow}</p>
            <h3 className="mt-2 font-serif text-2xl">{d.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{d.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold-light">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </SpotlightCard>
      </Link>
    </Reveal>
  );
}
