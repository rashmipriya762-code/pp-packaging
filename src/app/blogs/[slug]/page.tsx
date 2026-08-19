import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/lib/content";
import { FooterCTA } from "@/components/home/FooterCTA";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — P&P Packaging Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        label={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />

      <article className="bg-oyster section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-body text-neutral-500 hover:text-primary transition-colors mb-8">
                  <ArrowLeft size={16} /> Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-neutral-500 text-sm font-body">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-500 text-sm font-body">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <span className="flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                    <Tag size={12} /> {post.category}
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="prose prose-lg max-w-none font-body text-neutral-700 leading-relaxed prose-headings:font-heading prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-strong:text-primary">
                  {/* Full article content — expand blogPosts entries to include `content` for individual article pages */}
                  <p className="mb-4">{post.excerpt}</p>
                  <p className="mb-4">
                    P&P Packaging has been at the forefront of sustainable, premium packaging for over 15 years.
                    Our commitment to quality craftsmanship and eco-friendly materials ensures your products are
                    protected and your brand is elevated at every touchpoint.
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-teal-900 mt-10 mb-4">Why It Matters</h2>
                  <p className="mb-4">
                    Great packaging is your brand's first impression. It communicates quality, protects your product,
                    and creates a memorable unboxing experience that drives repeat business. Partner with P&P Packaging
                    to unlock the full potential of your packaging strategy.
                  </p>
                  <p className="mb-4">
                    <a href="/clients" className="text-gold-600 underline">See how our clients</a> have transformed their businesses with
                    premium packaging, or <a href="/" className="text-gold-600 underline">get in touch</a> to start your custom packaging journey today.
                  </p>
                </div>
              </AnimatedSection>

              {/* Related posts */}
              {related.length > 0 && (
                <AnimatedSection delay={0.2} className="mt-16 pt-10 border-t border-cream-dark/30">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-8">Related Articles</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {related.map((relPost) => (
                      <Link key={relPost.slug} href={`/blogs/${relPost.slug}`} className="group block">
                        <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                          <div className="h-32 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
                            <span className="font-heading text-white text-sm font-bold text-center line-clamp-2">{relPost.title}</span>
                          </div>
                          <div className="p-5">
                            <p className="font-body text-sm text-neutral-600 line-clamp-2 mb-4">{relPost.excerpt}</p>
                            <div className="flex items-center gap-1.5 text-accent font-body text-sm font-semibold group-hover:gap-2.5 transition-all">
                              Read More <ArrowRight size={13} />
                            </div>
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
                  <div className="bg-primary rounded-2xl p-7">
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Need Custom Packaging?</h3>
                    <p className="font-body text-white/70 text-sm mb-5">Get a free quote for your packaging requirements — bags, boxes, and more.</p>
                    <EnquireNowButton className="w-full justify-center" label="Get Free Quote" />
                  </div>

                  {/* All posts */}
                  <div className="bg-white rounded-2xl p-6 shadow-card">
                    <h4 className="font-heading text-lg font-bold text-primary mb-4">All Articles</h4>
                    <div className="space-y-3">
                      {blogPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blogs/${p.slug}`}
                          className={`block p-3 rounded-xl hover:bg-oyster transition-colors font-body text-sm ${
                            p.slug === slug ? "bg-accent/10 text-accent font-semibold" : "text-neutral-700"
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
