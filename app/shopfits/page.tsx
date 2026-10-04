import type { Metadata } from "next";
import ShopfitsView from "@/components/views/ShopfitsView";
import { getDivision } from "@/lib/site";

const d = getDivision("shopfits");
export const metadata: Metadata = { title: d.name, description: d.description };

export default function Page() {
  return <ShopfitsView />;
}
