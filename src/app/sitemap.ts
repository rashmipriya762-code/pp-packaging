import type { MetadataRoute } from "next";
import { ALL_PRODUCTS, CATEGORIES, blogPosts, productHref, siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = ["", "/about", "/clients", "/clients/contact-us", "/blogs"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const categoryRoutes = CATEGORIES.map((category) => ({
    url: `${base}/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productRoutes = ALL_PRODUCTS.map((product) => ({
    url: `${base}${productHref(product)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
