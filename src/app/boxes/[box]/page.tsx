import { redirect } from "next/navigation";
import { boxesCollections } from "@/lib/content";

// This route now redirects to the correct /collections/[slug] page
// Old URL: /boxes/[box]  →  New URL: /collections/[slug]
export function generateStaticParams() {
  return boxesCollections.map((c) => ({ box: c.slug }));
}

export default async function LegacyBoxPage({ params }: { params: Promise<{ box: string }> }) {
  const { box } = await params;
  redirect(`/collections/${box}`);
}
