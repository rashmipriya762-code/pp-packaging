import { productHref, type ProductItem } from "@/lib/content";
import type { CollectionItem } from "@/components/collection/CollectionGrid";

/** "₹12.00" -> 12 */
function priceValue(amount: string): number {
  const n = Number.parseFloat(amount.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/**
 * Collection cards are projected from the product data rather than hand-written
 * per page, so a card can never link to a slug that has no page behind it.
 */
export function toCollectionItems(products: ProductItem[]): CollectionItem[] {
  return products.map((product) => ({
    name: product.name,
    desc: product.description,
    href: productHref(product),
    image: product.image,
    price: priceValue(product.priceInfo.amount),
  }));
}
