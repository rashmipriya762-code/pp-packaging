import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { blogPosts, siteConfig } from "@/lib/content";
import { FooterCTA } from "@/components/home/FooterCTA";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";
import { JsonLd } from "@/components/shared/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { CONTACT_HREF } from "@/lib/navigation";

interface Params {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    // The root layout template appends the brand name — do not repeat it here.
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: post.title },
  ];

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />

      <PageHero label={post.category} title={post.title} subtitle={post.excerpt} />

      <article className="bg-cream-soft section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-body text-text-muted hover:text-teal-900 transition-colors mb-8"
                >
                  <ArrowLeft size={16} aria-hidden="true" /> Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-text-muted text-sm font-body">
                    <Calendar size={14} aria-hidden="true" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-sm font-body">
                    <Clock size={14} aria-hidden="true" />
                    {post.readTime}
                  </div>
                  <span className="flex items-center gap-1.5 bg-gold-600/10 text-gold-600 text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                    <Tag size={12} aria-hidden="true" /> {post.category}
                  </span>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-card mb-10">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 62vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="article-body">
                  {post.body ? (
                    post.body.map((block, idx) =>
                      block.startsWith("## ") ? (
                        <h2 key={idx}>{block.slice(3)}</h2>
                      ) : (
                        <p key={idx}>{block}</p>
                      )
                    )
                  ) : (
                    <>
                      {/* TODO(content): add `body` to this post in content.ts.
                          Until then every article shows this same placeholder. */}
                      <p>{post.excerpt}</p>
                      <p>
                        {siteConfig.name} has been at the forefront of sustainable, premium
                        packaging for over 15 years. Our commitment to quality craftsmanship and
                        eco-friendly materials ensures your products are protected and your brand
                        is elevated at every touchpoint.
                      </p>
                      <h2>Why It Matters</h2>
                      <p>
                        Great packaging is your brand&apos;s first impression. It communicates
                        quality, protects your product, and creates a memorable unboxing experience
                        that drives repeat business.
                      </p>
                      <p>
                        <Link href="/clients">See how our clients</Link> have transformed their
                        businesses with premium packaging, or{" "}
                        <Link href={CONTACT_HREF}>get in touch</Link> to start your custom
                        packaging journey today.
                      </p>
                    </>
                  )}
                </div>
              </AnimatedSection>

              {/* Related posts */}
              {related.length > 0 && (
                <AnimatedSection
                  delay={0.2}
                  className="mt-16 pt-10 border-t border-cream-dark"
                >
                  <h2 className="font-display text-2xl text-teal-900 mb-8">Related Articles</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {related.map((relPost) => (
                      <Link key={relPost.slug} href={`/blogs/${relPost.slug}`} className="group block">
                        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                          <div className="relative h-32 bg-teal-900">
                            <Image
                              src={relPost.image}
                              alt=""
                              fill
                              sizes="(max-width: 640px) 100vw, 30vw"
                              className="object-cover opacity-70"
                            />
                            <span className="absolute inset-0 flex items-center justify-center p-4 font-display text-white text-sm font-bold text-center line-clamp-2">
                              {relPost.title}
                            </span>
                          </div>
                          <div className="p-5">
                            <p className="font-body text-sm text-text-muted line-clamp-2 mb-4">
                              {relPost.excerpt}
                            </p>
                            <span className="flex items-center gap-1.5 text-gold-600 font-body text-sm font-semibold group-hover:gap-2.5 transition-all">
                              Read More <ArrowRight size={13} aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right" delay={0.15}>
                <div className="sticky top-28 space-y-6">
                  {/* CTA */}
                  <div className="bg-teal-900 rounded-2xl p-7">
                    <h2 className="font-display text-xl text-white mb-3">
                      Need Custom Packaging?
                    </h2>
                    <p className="font-body text-white/70 text-sm mb-5">
                      Get a free quote for your packaging requirements — bags, boxes, and more.
                    </p>
                    <EnquireNowButton
                      className="btn-pill btn-white w-full justify-center"
                      label="Get Free Quote"
                    />
                  </div>

                  {/* All posts */}
                  <div className="bg-white rounded-2xl p-6 shadow-card">
                    <h2 className="font-display text-lg text-teal-900 mb-4">All Articles</h2>
                    <div className="space-y-3">
                      {blogPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blogs/${p.slug}`}
                          aria-current={p.slug === slug ? "page" : undefined}
                          className={`block p-3 rounded-xl hover:bg-cream-soft transition-colors font-body text-sm ${
                            p.slug === slug
                              ? "bg-gold-600/10 text-gold-600 font-semibold"
                              : "text-text-muted"
                          }`}
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </article>

      <FooterCTA />
    </>
  );
}
