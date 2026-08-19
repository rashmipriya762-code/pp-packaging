import { redirect } from "next/navigation";
import { bagsIndustryCollections } from "@/lib/content";

// This route now redirects to the correct /collections/[slug] page
// Old URL: /bags-by-industry/[industry]  →  New URL: /collections/[slug]
export function generateStaticParams() {
  return bagsIndustryCollections.map((c) => ({ industry: c.slug }));
}

export default async function LegacyBagIndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  redirect(`/collections/${industry}`);
}
