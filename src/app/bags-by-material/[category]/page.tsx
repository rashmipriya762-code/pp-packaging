import { redirect } from "next/navigation";
import { bagsMaterialCollections } from "@/lib/content";

// This route now redirects to the correct /collections/[slug] page
// Old URL: /bags-by-material/[category]  →  New URL: /collections/[slug]
export function generateStaticParams() {
  return bagsMaterialCollections.map((c) => ({ category: c.slug }));
}

export default async function LegacyBagMaterialPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  redirect(`/collections/${category}`);
}
