import type { Metadata } from "next";
import AcademyView from "@/components/views/AcademyView";
import { getDivision } from "@/lib/site";

const d = getDivision("academy");
export const metadata: Metadata = { title: d.name, description: d.description };

export default function Page() {
  return <AcademyView />;
}
