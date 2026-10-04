import type { Metadata } from "next";
import RetailView from "@/components/views/RetailView";
import { getDivision } from "@/lib/site";

const d = getDivision("retail-intelligence");
export const metadata: Metadata = { title: d.name, description: d.description };

export default function Page() {
  return <RetailView />;
}
