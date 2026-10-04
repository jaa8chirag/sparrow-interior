import type { Metadata } from "next";
import PmcView from "@/components/views/PmcView";
import { getDivision } from "@/lib/site";

const d = getDivision("pmc");
export const metadata: Metadata = { title: d.name, description: d.description };

export default function Page() {
  return <PmcView />;
}
