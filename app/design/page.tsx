import type { Metadata } from "next";
import DesignView from "@/components/views/DesignView";
import { getDivision } from "@/lib/site";

const d = getDivision("design");
export const metadata: Metadata = { title: d.name, description: d.description };

export default function Page() {
  return <DesignView />;
}
