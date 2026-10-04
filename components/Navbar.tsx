"use client";

import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DIVISIONS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/"><Brand /></Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {DIVISIONS.map((d) => (
            <li key={d.slug}>
              <Link
                href={d.href}
                className={`relative text-sm tracking-wide transition-colors hover:text-gold-light ${
                  pathname === d.href ? "text-gold-light" : "text-muted"
                }`}
              >
                {d.short}
                {pathname === d.href && (
                  <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-0 h-px w-full gold-bg" />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="gold-bg rounded-full px-5 py-2.5 text-sm font-medium text-[var(--on-gold)] transition hover:shadow-[0_0_30px_-5px_rgba(201,174,120,0.7)]"
            >
              Get in touch
            </Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-line p-2 text-gold"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="space-y-1 px-6 pb-6" onClick={() => setOpen(false)}>
              {DIVISIONS.map((d) => (
                <li key={d.slug}>
                  <Link href={d.href} className="block rounded-lg px-3 py-3 font-serif text-xl hover:bg-gold/10">
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className="gold-bg mt-3 block rounded-full py-3 text-center font-medium text-[var(--on-gold)]">
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
