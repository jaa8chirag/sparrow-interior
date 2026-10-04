import Brand from "./Brand";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { DIVISIONS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Brand size="lg" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            One group, five specialisations — design, retail execution, project management, retail
            intelligence and education. Building since {SITE.since}.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Divisions</h4>
          <ul className="space-y-3 text-sm text-muted">
            {DIVISIONS.map((d) => (
              <li key={d.slug}>
                <Link href={d.href} className="transition-colors hover:text-gold-light">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" />{SITE.email}</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" />{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
