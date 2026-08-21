import Image from "next/image";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import { EnquireNowButton } from "@/components/shared/EnquireNowButton";

interface CollectionHeroProps {
  eyebrow?: string;
  title?: string;
  subtitleEmphasis?: string;
  description?: string;
  image?: string;
}

export function CollectionHero({
  eyebrow = "OUR COLLECTION",
  title = "Packaging",
  subtitleEmphasis = "For Every Need.",
  description = "Explore our wide range of premium packaging solutions designed to protect, present, and promote your brand.",
  image = PRODUCT_IMAGES.customPackaging,
}: CollectionHeroProps) {
  return (
    <section className="bg-cream pt-10 pb-8">
      <div className="container-custom">
        <div className="relative rounded-card overflow-hidden bg-teal-900 flex flex-col lg:flex-row shadow-sm min-h-[440px]">
          {/* LEFT: Text Content (~55%) */}
          <div className="w-full lg:w-[55%] px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-center items-start z-10 relative">
            <p className="eyebrow text-gold-600 mb-5">{eyebrow}</p>

            <h1 className="font-display text-5xl lg:text-[64px] leading-[1.05] mb-6 tracking-tight">
              <span className="block text-white font-normal">{title}</span>
              <span className="block text-gold-400 font-normal">{subtitleEmphasis}</span>
            </h1>

            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-[420px]">
              {description}
            </p>

            <EnquireNowButton
              label="Request a Custom Quote"
              className="btn-pill bg-cream text-teal-900 hover:bg-white shadow-sm font-semibold transition-all"
            />
          </div>

          {/* RIGHT: Image Area (~45%) */}
          <div className="w-full lg:w-[45%] relative min-h-[300px] lg:min-h-full">
            {/* Abstract Circular Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-[#E8D9C5] rounded-full opacity-[0.25] blur-[60px]" />

            {/* Product Image */}
            <div className="absolute inset-0 z-10 p-6 lg:p-0 flex items-center justify-center lg:block">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain lg:object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
