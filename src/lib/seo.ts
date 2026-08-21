import { siteConfig, type ProductItem } from "@/lib/content";

/**
 * Structured data helpers. Everything here is developer-authored and static —
 * no user input is ever interpolated into a JSON-LD block.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: String(siteConfig.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function productJsonLd(product: ProductItem) {
  const price = product.priceInfo.amount.replace(/[^0-9.]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    category: product.parentLabel,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price,
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: product.minOrder,
        unitCode: "C62",
      },
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${siteConfig.url}${post.image}`,
    mainEntityOfPage: `${siteConfig.url}/blogs/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
