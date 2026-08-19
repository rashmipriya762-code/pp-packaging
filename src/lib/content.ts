// Central content store — all text content for P&P Packaging

export const siteConfig = {
  name: "P&P Packaging",
  tagline: "India's Trusted Manufacturer of Custom Packaging",
  description:
    "P&P Packaging is a Mumbai-based manufacturer of premium custom bags and boxes for businesses across India. From eco-friendly tote bags to sturdy cardboard boxes, we deliver quality packaging that protects your products and elevates your brand.",
  phone: "+91 98765 43210",
  email: "hello@pppackaging.in",
  whatsapp: "919876543210",
  address: "123 Packaging Street, Andheri East, Mumbai, Maharashtra 400069",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  social: {
    facebook: "https://facebook.com/pppackaging",
    instagram: "https://instagram.com/pppackaging",
    linkedin: "https://linkedin.com/company/pppackaging",
  },
  established: 2008,
};

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Convert a display name to a URL-safe slug */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATA TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductItem {
  slug: string;
  name: string;
  collectionSlug: string;
  collectionName: string;
  parentCategory: string; // "bags-by-material" | "bags-by-industry" | "boxes"
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  priceInfo: { amount: string; unit: string; subtext?: string };
  minOrder: number;
  sizes: { name: string; desc: string }[];
  materials: { name: string; desc: string }[];
}

export interface CollectionData {
  slug: string;
  name: string;
  parentCategory: string;
  parentLabel: string;
  tagline: string;
  description: string;
  image: string;
  products: ProductItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// BAGS BY MATERIAL — COLLECTIONS & PRODUCTS
// ─────────────────────────────────────────────────────────────────────────────

export const bagsMaterialCollections: CollectionData[] = [
  {
    slug: "paper-bags",
    name: "Paper Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Elegant. Biodegradable. Brandable.",
    description:
      "Our premium paper bags combine strength with sophistication. Available in kraft, art paper, and coated finishes, they're perfect for retail, gifting, and corporate use. Each bag can be customized with your logo, brand colors, and messaging.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "kraft-paper-bags", name: "Kraft Paper Bags", collectionSlug: "paper-bags", collectionName: "Paper Bags", parentCategory: "bags-by-material", tagline: "Classic strength, natural look.", description: "Premium kraft paper bags combining durability with the natural aesthetic your customers love. Perfect for retail, gifting, and food businesses.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", features: ["100% recyclable kraft paper", "Multiple handle options", "Custom print & branding", "All sizes available", "Biodegradable"], specs: [{ label: "Material", value: "Kraft Paper" }, { label: "GSM", value: "80–150 GSM" }, { label: "Handles", value: "Twisted / Flat / Ribbon" }, { label: "Printing", value: "Flexo / Digital" }, { label: "Finish", value: "Natural / Matte" }], priceInfo: { amount: "₹12.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 10 x 25 cm" }, { name: "Medium", desc: "30 x 12 x 35 cm" }, { name: "Large", desc: "40 x 15 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "80 GSM", desc: "Standard" }, { name: "100 GSM", desc: "Premium" }, { name: "150 GSM", desc: "Heavy Duty" }] },
      { slug: "art-paper-bags", name: "Art Paper Bags", collectionSlug: "paper-bags", collectionName: "Paper Bags", parentCategory: "bags-by-material", tagline: "Vibrant. Premium. Glossy.", description: "High-gloss art paper bags that make your brand shine. Ideal for premium retail and gifting with superior print quality.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["High-gloss coated art paper", "Vivid full-color printing", "Glossy or matte lamination", "Ribbon & rope handle options", "Premium unboxing experience"], specs: [{ label: "Material", value: "Art Paper" }, { label: "GSM", value: "150–210 GSM" }, { label: "Lamination", value: "Gloss / Matte / Soft Touch" }, { label: "Printing", value: "Offset / Digital" }, { label: "Finish", value: "Glossy / Matte" }], priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 10 x 25 cm" }, { name: "Medium", desc: "30 x 12 x 35 cm" }, { name: "Large", desc: "40 x 15 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "150 GSM", desc: "Standard" }, { name: "170 GSM", desc: "Premium" }, { name: "210 GSM", desc: "Luxury" }] },
      { slug: "luxury-paper-bags", name: "Luxury Paper Bags", collectionSlug: "paper-bags", collectionName: "Paper Bags", parentCategory: "bags-by-material", tagline: "Crafted for the finest brands.", description: "Ultra-premium paper bags with foil stamping, embossing, and ribbon handles. Perfect for luxury retail, jewellery, and premium gifting.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["Gold/silver foil stamping", "Embossed branding options", "Satin ribbon handles", "Special finishes available", "Premium feel & weight"], specs: [{ label: "Material", value: "Premium Art Board" }, { label: "GSM", value: "210–350 GSM" }, { label: "Finishing", value: "Foil / Emboss / UV" }, { label: "Handles", value: "Satin Ribbon" }, { label: "Usage", value: "Luxury Retail / Gifting" }], priceInfo: { amount: "₹45.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "20 x 10 x 25 cm" }, { name: "Medium", desc: "30 x 12 x 35 cm" }, { name: "Large", desc: "40 x 15 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "210 GSM", desc: "Premium" }, { name: "300 GSM", desc: "Luxury" }, { name: "350 GSM", desc: "Ultra Luxury" }] },
    ],
  },
  {
    slug: "jute-bags",
    name: "Jute Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Natural. Durable. Sustainable.",
    description: "Jute bags are the gold standard of eco-friendly packaging. Our handcrafted jute bags are sturdy, reusable, and naturally biodegradable — ideal for brands that want to communicate sustainability and quality.",
    image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "plain-jute-bags", name: "Plain Jute Bags", collectionSlug: "jute-bags", collectionName: "Jute Bags", parentCategory: "bags-by-material", tagline: "Pure. Natural. Sustainable.", description: "100% natural jute bags that are biodegradable, durable, and perfect for eco-conscious brands.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["100% natural jute fibre", "Extremely durable & reusable", "Naturally biodegradable", "Multiple weave types available"], specs: [{ label: "Material", value: "Natural Jute" }, { label: "Weight", value: "200–400 GSM" }, { label: "Handles", value: "Jute / Cotton Webbing" }, { label: "Printing", value: "Screen Print" }], priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 10 x 30 cm" }, { name: "Medium", desc: "35 x 12 x 40 cm" }, { name: "Large", desc: "45 x 15 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "200 GSM", desc: "Light" }, { name: "300 GSM", desc: "Standard" }, { name: "400 GSM", desc: "Heavy Duty" }] },
      { slug: "printed-jute-bags", name: "Printed Jute Bags", collectionSlug: "jute-bags", collectionName: "Jute Bags", parentCategory: "bags-by-material", tagline: "Brand your sustainability story.", description: "Custom-printed jute bags with your logo and brand messaging. Screen printing and sublimation options available.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Screen print & embroidery", "Vibrant colour print options", "Eco-friendly inks used", "Perfect for brand campaigns"], specs: [{ label: "Material", value: "Natural Jute" }, { label: "Weight", value: "250–350 GSM" }, { label: "Printing", value: "Screen Print / Sublimation" }, { label: "Colors", value: "Up to 4 colours" }], priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 10 x 30 cm" }, { name: "Medium", desc: "35 x 12 x 40 cm" }, { name: "Large", desc: "45 x 15 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "250 GSM", desc: "Standard" }, { name: "350 GSM", desc: "Premium" }] },
      { slug: "jute-tote-bags", name: "Jute Tote Bags", collectionSlug: "jute-bags", collectionName: "Jute Bags", parentCategory: "bags-by-material", tagline: "Everyday carry, zero compromise.", description: "Stylish jute tote bags designed for everyday use. Strong handles and spacious interiors make them perfect for retail and corporate gifting.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Long shoulder handles", "Large capacity interior", "Reinforced stitching", "Custom branding available"], specs: [{ label: "Material", value: "Natural Jute" }, { label: "Handle", value: "Long Cotton Webbing" }, { label: "Capacity", value: "10–15 Litres" }, { label: "Printing", value: "Screen Print" }], priceInfo: { amount: "₹42.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "300 GSM", desc: "Standard" }, { name: "400 GSM", desc: "Heavy Duty" }] },
    ],
  },
  {
    slug: "cotton-bags",
    name: "Cotton Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Soft. Washable. Premium.",
    description: "Cotton bags offer the premium feel that discerning brands demand. Lightweight yet strong, washable and reusable, crafted from high-quality cotton fabric.",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "plain-cotton-bags", name: "Plain Cotton Bags", collectionSlug: "cotton-bags", collectionName: "Cotton Bags", parentCategory: "bags-by-material", tagline: "Clean. Simple. Premium.", description: "High-quality plain cotton bags that offer a premium canvas for your branding. Washable and reusable.", image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800", features: ["100% cotton fabric", "Washable & reusable", "Soft premium finish", "Multiple weights available"], specs: [{ label: "Material", value: "100% Cotton" }, { label: "Weight", value: "120–200 GSM" }, { label: "Handles", value: "Cotton Webbing" }, { label: "Printing", value: "Screen Print / Heat Transfer" }], priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "120 GSM", desc: "Light" }, { name: "150 GSM", desc: "Standard" }, { name: "200 GSM", desc: "Heavy" }] },
      { slug: "organic-cotton-bags", name: "Organic Cotton Bags", collectionSlug: "cotton-bags", collectionName: "Cotton Bags", parentCategory: "bags-by-material", tagline: "Certified sustainable, top quality.", description: "GOTS-certified organic cotton bags for brands committed to genuine environmental responsibility.", image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800", features: ["GOTS certified organic cotton", "Natural dyes & inks", "Zero harmful chemicals", "Fully biodegradable"], specs: [{ label: "Material", value: "Organic Cotton" }, { label: "Certification", value: "GOTS Certified" }, { label: "Weight", value: "140–180 GSM" }, { label: "Printing", value: "Eco Inks" }], priceInfo: { amount: "₹32.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "140 GSM", desc: "Standard" }, { name: "180 GSM", desc: "Premium" }] },
      { slug: "cotton-drawstring-bags", name: "Cotton Drawstring Bags", collectionSlug: "cotton-bags", collectionName: "Cotton Bags", parentCategory: "bags-by-material", tagline: "Compact, stylish, practical.", description: "Versatile drawstring cotton bags perfect for gifting, product packaging, and promotional use.", image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800", features: ["Easy drawstring closure", "Compact & lightweight", "Perfect for gifting", "Custom print available"], specs: [{ label: "Material", value: "100% Cotton" }, { label: "Closure", value: "Cotton Drawstring" }, { label: "Weight", value: "120–150 GSM" }, { label: "Usage", value: "Gifting / Jewellery / Retail" }], priceInfo: { amount: "₹15.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "15 x 20 cm" }, { name: "Medium", desc: "20 x 30 cm" }, { name: "Large", desc: "30 x 40 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "120 GSM", desc: "Light" }, { name: "150 GSM", desc: "Standard" }] },
    ],
  },
  {
    slug: "canvas-bags",
    name: "Canvas Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Rugged. Stylish. Long-lasting.",
    description: "Heavy-duty canvas bags built for brands that mean business. Crafted from thick, durable canvas fabric that withstands everyday wear and tear.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "canvas-tote-bags", name: "Canvas Tote Bags", collectionSlug: "canvas-bags", collectionName: "Canvas Bags", parentCategory: "bags-by-material", tagline: "Strength meets style.", description: "Heavy-duty canvas tote bags that combine rugged durability with stylish design. Perfect for retail and corporate gifting.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", features: ["Heavy-duty canvas fabric", "Long-lasting & weather-resistant", "Custom print & embroidery", "Multiple sizes & styles"], specs: [{ label: "Material", value: "Cotton Canvas" }, { label: "Weight", value: "280–400 GSM" }, { label: "Handles", value: "Long Canvas Straps" }, { label: "Printing", value: "Screen Print / Embroidery" }], priceInfo: { amount: "₹38.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "280 GSM", desc: "Standard" }, { name: "400 GSM", desc: "Heavy Duty" }] },
      { slug: "canvas-shopping-bags", name: "Canvas Shopping Bags", collectionSlug: "canvas-bags", collectionName: "Canvas Bags", parentCategory: "bags-by-material", tagline: "The eco shopping upgrade.", description: "Spacious canvas shopping bags that replace plastic with style. Perfect for retail, grocery, and lifestyle brands.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", features: ["Large capacity interior", "Reinforced bottom panel", "Comfortable carry handles", "Machine washable"], specs: [{ label: "Material", value: "Cotton Canvas" }, { label: "Capacity", value: "15–20 Litres" }, { label: "Weight", value: "350 GSM" }, { label: "Printing", value: "Screen Print" }], priceInfo: { amount: "₹45.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "40 x 45 cm" }, { name: "Large", desc: "48 x 55 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "350 GSM", desc: "Standard" }, { name: "400 GSM", desc: "Heavy Duty" }] },
    ],
  },
  {
    slug: "non-woven-bags",
    name: "Non-Woven Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Affordable. Versatile. Lightweight.",
    description: "Non-woven bags offer the best value for large-quantity orders. Lightweight, water-resistant, and available in virtually any color.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "d-cut-non-woven-bags", name: "D-Cut Non-Woven Bags", collectionSlug: "non-woven-bags", collectionName: "Non-Woven Bags", parentCategory: "bags-by-material", tagline: "The most popular non-woven bag.", description: "Classic D-cut non-woven bags — lightweight, affordable, and perfect for high-volume promotional campaigns.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["Lightweight & water-resistant", "Most affordable option", "D-shape die-cut handle", "Full-color flexo printing"], specs: [{ label: "Material", value: "Non-Woven PP" }, { label: "GSM", value: "60–100 GSM" }, { label: "Handle", value: "Die-Cut (D-Shape)" }, { label: "Printing", value: "Flexo / Screen" }], priceInfo: { amount: "₹8.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 500, sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "60 GSM", desc: "Light" }, { name: "80 GSM", desc: "Standard" }, { name: "100 GSM", desc: "Heavy" }] },
      { slug: "w-cut-non-woven-bags", name: "W-Cut Non-Woven Bags", collectionSlug: "non-woven-bags", collectionName: "Non-Woven Bags", parentCategory: "bags-by-material", tagline: "Superior handle comfort.", description: "W-cut non-woven bags with wide-body handles offering extra comfort and carrying strength.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["Wide-cut W-shape handles", "Extra carrying comfort", "Good weight capacity", "Budget-friendly"], specs: [{ label: "Material", value: "Non-Woven PP" }, { label: "GSM", value: "80–100 GSM" }, { label: "Handle", value: "W-Shape Die-Cut" }, { label: "Printing", value: "Flexo / Screen" }], priceInfo: { amount: "₹10.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 500, sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "80 GSM", desc: "Standard" }, { name: "100 GSM", desc: "Heavy" }] },
      { slug: "loop-handle-non-woven-bags", name: "Loop Handle Non-Woven Bags", collectionSlug: "non-woven-bags", collectionName: "Non-Woven Bags", parentCategory: "bags-by-material", tagline: "Retail-grade comfort at scale.", description: "Non-woven bags with stitched loop handles offering retail-grade comfort and a polished appearance.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["Stitched loop handles", "Premium retail appearance", "Available in all colours", "Heavy-duty stitching"], specs: [{ label: "Material", value: "Non-Woven PP" }, { label: "GSM", value: "80–120 GSM" }, { label: "Handle", value: "Loop Stitched" }, { label: "Printing", value: "Flexo / Offset" }], priceInfo: { amount: "₹14.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "80 GSM", desc: "Standard" }, { name: "100 GSM", desc: "Premium" }, { name: "120 GSM", desc: "Heavy Duty" }] },
    ],
  },
  {
    slug: "eco-friendly-bags",
    name: "Organic & Eco-Friendly Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Planet-first packaging for conscious brands.",
    description: "Our organic and eco-friendly bags are made from certified sustainable materials — organic cotton, recycled paper, and natural jute.",
    image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "recycled-paper-bags", name: "Recycled Paper Bags", collectionSlug: "eco-friendly-bags", collectionName: "Organic & Eco-Friendly Bags", parentCategory: "bags-by-material", tagline: "Closed-loop sustainability.", description: "Premium bags made from 100% post-consumer recycled paper — proving that sustainable can be beautiful.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", features: ["100% post-consumer recycled paper", "Zero virgin paper usage", "Eco-friendly inks", "Fully recyclable again"], specs: [{ label: "Material", value: "Recycled Paper" }, { label: "GSM", value: "100–140 GSM" }, { label: "Certification", value: "FSC Certified" }, { label: "Printing", value: "Eco Inks" }], priceInfo: { amount: "₹16.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 10 x 25 cm" }, { name: "Medium", desc: "30 x 12 x 35 cm" }, { name: "Large", desc: "40 x 15 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "100 GSM", desc: "Standard" }, { name: "140 GSM", desc: "Premium" }] },
      { slug: "hemp-bags", name: "Hemp Bags", collectionSlug: "eco-friendly-bags", collectionName: "Organic & Eco-Friendly Bags", parentCategory: "bags-by-material", tagline: "The future of sustainable carry.", description: "Durable hemp bags — naturally antimicrobial, UV resistant, and one of the planet's most sustainable fibres.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Natural hemp fibre", "Antimicrobial & UV resistant", "More durable than cotton", "Fully biodegradable"], specs: [{ label: "Material", value: "Natural Hemp" }, { label: "Weight", value: "200–350 GSM" }, { label: "Printing", value: "Screen Print" }, { label: "Handles", value: "Hemp / Cotton Webbing" }], priceInfo: { amount: "₹48.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "200 GSM", desc: "Standard" }, { name: "350 GSM", desc: "Heavy Duty" }] },
      { slug: "biodegradable-bags", name: "Biodegradable Bags", collectionSlug: "eco-friendly-bags", collectionName: "Organic & Eco-Friendly Bags", parentCategory: "bags-by-material", tagline: "Zero guilt, zero waste.", description: "Certified compostable bags that break down naturally, leaving no microplastics behind. Perfect for the most eco-conscious brands.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Certified compostable", "Breaks down in 180 days", "Zero microplastic residue", "Natural look & feel"], specs: [{ label: "Material", value: "PLA / Compostable Blend" }, { label: "Certification", value: "OK Compost Industrial" }, { label: "Decomposition", value: "180 days" }, { label: "Usage", value: "Retail / Food / Gifting" }], priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "30 x 38 cm" }, { name: "Large", desc: "40 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Standard", desc: "Compostable PLA" }, { name: "Premium", desc: "PHA Blend" }] },
    ],
  },
  {
    slug: "synthetic-bags",
    name: "Synthetic Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Durable. Water-resistant. Modern.",
    description: "Our synthetic bags are crafted from high-quality polyester, nylon, and PVC materials for maximum durability and water resistance.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "polyester-bags", name: "Polyester Bags", collectionSlug: "synthetic-bags", collectionName: "Synthetic Bags", parentCategory: "bags-by-material", tagline: "Modern strength, lasting colour.", description: "Premium polyester bags offering excellent durability, vibrant colour retention, and water resistance.", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800", features: ["Water-resistant polyester", "Vibrant print options", "Highly durable", "Easy to clean"], specs: [{ label: "Material", value: "Polyester (PET)" }, { label: "Denier", value: "210D–600D" }, { label: "Printing", value: "Sublimation / Screen" }, { label: "Finish", value: "Matte / Glossy" }], priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 35 cm" }, { name: "Medium", desc: "35 x 45 cm" }, { name: "Large", desc: "45 x 55 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "210D", desc: "Light" }, { name: "420D", desc: "Standard" }, { name: "600D", desc: "Heavy Duty" }] },
      { slug: "velvet-bags", name: "Velvet Bags", collectionSlug: "synthetic-bags", collectionName: "Synthetic Bags", parentCategory: "bags-by-material", tagline: "Luxury soft-touch presentation.", description: "Premium velvet pouches and bags for jewellery, watches, and luxury goods. Available with gold & silver foil printing.", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800", features: ["Premium velvet fabric", "Drawstring or flap closure", "Gold/silver foil options", "Perfect for jewellery & watches"], specs: [{ label: "Material", value: "Velvet" }, { label: "Closure", value: "Drawstring / Flap" }, { label: "Printing", value: "Foil Stamping" }, { label: "Usage", value: "Jewellery / Luxury" }], priceInfo: { amount: "₹25.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "8 x 10 cm" }, { name: "Medium", desc: "12 x 15 cm" }, { name: "Large", desc: "18 x 22 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Standard", desc: "Velvet" }, { name: "Premium", desc: "Crushed Velvet" }] },
    ],
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "The evergreen bag — your brand, everywhere.",
    description: "Tote bags are the most versatile promotional item a brand can invest in. Available in cotton, canvas, jute, and non-woven materials.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "cotton-tote-bags", name: "Cotton Tote Bags", collectionSlug: "tote-bags", collectionName: "Tote Bags", parentCategory: "bags-by-material", tagline: "The classic promotional tote.", description: "The iconic cotton tote bag — your brand's most cost-effective, reusable ambassador. Endlessly customizable.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", features: ["100% cotton fabric", "Long shoulder handles", "Washable & reusable", "Full custom branding"], specs: [{ label: "Material", value: "100% Cotton" }, { label: "Weight", value: "140–200 GSM" }, { label: "Handles", value: "Long Cotton Webbing" }, { label: "Printing", value: "Screen Print / Heat Transfer" }], priceInfo: { amount: "₹25.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "140 GSM", desc: "Standard" }, { name: "200 GSM", desc: "Premium" }] },
      { slug: "canvas-tote-bags-collection", name: "Canvas Tote Bags", collectionSlug: "tote-bags", collectionName: "Tote Bags", parentCategory: "bags-by-material", tagline: "Rugged & stylish tote carry.", description: "Heavy-duty canvas totes that last for years. A lifestyle brand favourite for retail and corporate gifting.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", features: ["Heavy-duty canvas", "Extremely durable", "Premium appearance", "Embroidery options available"], specs: [{ label: "Material", value: "Canvas" }, { label: "Weight", value: "280–400 GSM" }, { label: "Handles", value: "Canvas Webbing" }, { label: "Printing", value: "Screen Print / Embroidery" }], priceInfo: { amount: "₹42.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "280 GSM", desc: "Standard" }, { name: "400 GSM", desc: "Heavy Duty" }] },
      { slug: "laminated-tote-bags", name: "Laminated Tote Bags", collectionSlug: "tote-bags", collectionName: "Tote Bags", parentCategory: "bags-by-material", tagline: "Water-resistant with a premium finish.", description: "Non-woven or paper tote bags with lamination for extra durability and a sleek premium appearance.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", features: ["Gloss or matte lamination", "Water-resistant surface", "Excellent print quality", "Cost-effective premium look"], specs: [{ label: "Material", value: "Non-Woven + Lamination" }, { label: "Lamination", value: "Gloss / Matte / Soft Touch" }, { label: "GSM", value: "100–120 GSM" }, { label: "Printing", value: "Flexo / Offset" }], priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Standard", desc: "35 x 42 cm" }, { name: "Large", desc: "45 x 52 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Gloss Lam", desc: "Shiny Finish" }, { name: "Matte Lam", desc: "Elegant Finish" }] },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// BAGS BY INDUSTRY — COLLECTIONS & PRODUCTS
// ─────────────────────────────────────────────────────────────────────────────

export const bagsIndustryCollections: CollectionData[] = [
  {
    slug: "corporates",
    name: "Corporates",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Packaging that speaks your brand language.",
    description: "From conference giveaways to premium client gifts, we create corporate packaging that leaves lasting impressions.",
    image: "https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "corporate-conference-bags", name: "Corporate Conference Bags", collectionSlug: "corporates", collectionName: "Corporates", parentCategory: "bags-by-industry", tagline: "Professional presence at every event.", description: "Premium conference bags branded with your corporate identity. Perfect for annual days, seminars, and trade shows.", image: "https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=800", features: ["Multiple compartments", "Branded & customizable", "Durable canvas or non-woven", "Logo printing included"], specs: [{ label: "Material", value: "Canvas / Non-Woven" }, { label: "Printing", value: "Screen / Embroidery" }, { label: "Usage", value: "Conferences / Events" }], priceInfo: { amount: "₹55.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "35 x 40 cm" }, { name: "Large", desc: "40 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Canvas", desc: "Premium" }, { name: "Non-Woven", desc: "Budget" }] },
      { slug: "corporate-gift-bags", name: "Corporate Gift Bags", collectionSlug: "corporates", collectionName: "Corporates", parentCategory: "bags-by-industry", tagline: "Gift with lasting brand recall.", description: "Elegant gift bags for corporate gifting programs, client appreciation, and employee rewards.", image: "https://images.unsplash.com/photo-1607344645866-eea01fb9cc2e?auto=format&fit=crop&q=80&w=800", features: ["Premium art paper available", "Luxury ribbon handles", "Foil & emboss options", "Festive designs available"], specs: [{ label: "Material", value: "Art Paper / Canvas" }, { label: "Finishing", value: "Foil / Emboss / UV" }, { label: "Usage", value: "Gifting / Rewards" }], priceInfo: { amount: "₹45.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "30 x 40 cm" }, { name: "Large", desc: "40 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Art Paper", desc: "Premium" }, { name: "Canvas", desc: "Luxury" }] },
    ],
  },
  {
    slug: "retail",
    name: "Retail Stores & Brands",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Your packaging is your first brand ambassador.",
    description: "In retail, packaging is the first physical touchpoint a customer has with your brand.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "retail-shopping-bags", name: "Retail Shopping Bags", collectionSlug: "retail", collectionName: "Retail Stores & Brands", parentCategory: "bags-by-industry", tagline: "Turn every purchase into a brand moment.", description: "Premium retail shopping bags that reinforce your brand identity at every customer touchpoint.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["Multiple material options", "Premium print quality", "Durable & reusable", "Wide range of sizes"], specs: [{ label: "Material", value: "Paper / Canvas / Jute" }, { label: "Printing", value: "Offset / Screen / Flexo" }, { label: "Usage", value: "Retail / Boutique" }], priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "30 x 38 cm" }, { name: "Large", desc: "40 x 48 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft Paper", desc: "Natural" }, { name: "Art Paper", desc: "Glossy" }, { name: "Canvas", desc: "Premium" }] },
      { slug: "premium-brand-bags", name: "Premium Brand Bags", collectionSlug: "retail", collectionName: "Retail Stores & Brands", parentCategory: "bags-by-industry", tagline: "Luxury retail packaging redefined.", description: "Ultra-premium bags for luxury retail brands — foil stamped, ribbon handled, and crafted to impress.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["Premium board construction", "Gold/silver foil stamping", "Satin ribbon handles", "Embossing available"], specs: [{ label: "Material", value: "Premium Art Board" }, { label: "GSM", value: "300–400 GSM" }, { label: "Finishing", value: "Foil / Emboss / UV" }, { label: "Usage", value: "Luxury Retail" }], priceInfo: { amount: "₹65.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "18 x 22 cm" }, { name: "Medium", desc: "25 x 35 cm" }, { name: "Large", desc: "35 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "300 GSM", desc: "Premium" }, { name: "400 GSM", desc: "Luxury" }] },
    ],
  },
  {
    slug: "sweet-industry",
    name: "Sweet Industry",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Beautiful packaging for India's sweetest moments.",
    description: "Sweets are gifted with love — and they deserve packaging that matches.",
    image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "mithai-carry-bags", name: "Mithai Carry Bags", collectionSlug: "sweet-industry", collectionName: "Sweet Industry", parentCategory: "bags-by-industry", tagline: "Every sweet moment, beautifully wrapped.", description: "Food-safe, attractive mithai bags designed for sweet shops, halwais, and confectionery businesses.", image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=800", features: ["Food-safe materials", "Grease-resistant coating", "Custom print & branding", "Festive designs available"], specs: [{ label: "Material", value: "Paper / BOPP" }, { label: "Food Safe", value: "Yes" }, { label: "Printing", value: "Flexo / Offset" }, { label: "Usage", value: "Sweet Shops / Mithai" }], priceInfo: { amount: "₹10.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "30 x 35 cm" }, { name: "Large", desc: "40 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Paper", desc: "Natural" }, { name: "BOPP", desc: "Moisture Proof" }] },
      { slug: "festive-gift-bags", name: "Festive Gift Bags", collectionSlug: "sweet-industry", collectionName: "Sweet Industry", parentCategory: "bags-by-industry", tagline: "Diwali & beyond, always special.", description: "Ornate festive bags for Diwali, Eid, and seasonal gifting occasions — making every gift feel more special.", image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=800", features: ["Festive season designs", "Gold foil accents", "Rich colour palettes", "Premium gifting feel"], specs: [{ label: "Material", value: "Art Paper / Fabric" }, { label: "Finishing", value: "Foil / Glossy" }, { label: "Occasions", value: "Diwali / Eid / Holi" }], priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "30 x 38 cm" }, { name: "Large", desc: "40 x 48 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Art Paper", desc: "Glossy" }, { name: "Fabric", desc: "Premium" }] },
    ],
  },
  {
    slug: "cake-industry",
    name: "Cake Industry",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Packaging as delightful as your creations.",
    description: "Our food-safe bags and carriers are built to protect and present your creations beautifully.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "cake-carry-bags", name: "Cake Carry Bags", collectionSlug: "cake-industry", collectionName: "Cake Industry", parentCategory: "bags-by-industry", tagline: "Safe carry for every bake.", description: "Sturdy cake carry bags with reinforced handles, designed to safely transport tiered cakes and large bakery orders.", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800", features: ["Reinforced handles", "Non-slip base insert", "Food-grade materials", "Custom bakery branding"], specs: [{ label: "Material", value: "Kraft / Art Paper" }, { label: "Handle", value: "Reinforced Twisted" }, { label: "Food Safe", value: "Yes" }, { label: "Usage", value: "Bakeries / Cake Shops" }], priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Medium", desc: "25 x 25 x 30 cm" }, { name: "Large", desc: "35 x 35 x 40 cm" }, { name: "XL", desc: "45 x 45 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft", desc: "Natural" }, { name: "Art Paper", desc: "Glossy" }] },
      { slug: "bakery-retail-bags", name: "Bakery Retail Bags", collectionSlug: "cake-industry", collectionName: "Cake Industry", parentCategory: "bags-by-industry", tagline: "Brand your bakery, delight your customers.", description: "Premium retail bags for bakeries, pastry shops, and dessert boutiques — making every takeaway a brand experience.", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800", features: ["Bakery-specific designs", "Grease-resistant options", "Window options available", "Retail-grade quality"], specs: [{ label: "Material", value: "Kraft / White Paper" }, { label: "Window", value: "Optional Clear Window" }, { label: "Printing", value: "Flexo / Screen" }], priceInfo: { amount: "₹12.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Small", desc: "20 x 25 cm" }, { name: "Medium", desc: "28 x 35 cm" }, { name: "Large", desc: "35 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft", desc: "Natural Look" }, { name: "White Paper", desc: "Clean Look" }] },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafes",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Takeaway packaging that tells your story.",
    description: "Your takeaway packaging is the last impression you leave with every customer.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "takeaway-carry-bags", name: "Takeaway Carry Bags", collectionSlug: "restaurants", collectionName: "Restaurants & Cafes", parentCategory: "bags-by-industry", tagline: "Every order, a brand impression.", description: "Functional, food-safe takeaway bags branded with your restaurant identity — turning every delivery into a marketing moment.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["Food-safe & grease-resistant", "Strong reinforced handles", "Custom restaurant branding", "Multiple sizes for all orders"], specs: [{ label: "Material", value: "Kraft / Art Paper" }, { label: "Food Safe", value: "Yes" }, { label: "Printing", value: "Flexo / Screen" }, { label: "Usage", value: "Restaurants / Delivery" }], priceInfo: { amount: "₹14.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Small", desc: "22 x 28 cm" }, { name: "Medium", desc: "30 x 38 cm" }, { name: "Large", desc: "38 x 48 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft", desc: "Natural" }, { name: "White Paper", desc: "Clean" }] },
      { slug: "delivery-packaging-bags", name: "Delivery Packaging Bags", collectionSlug: "restaurants", collectionName: "Restaurants & Cafes", parentCategory: "bags-by-industry", tagline: "Built for the last mile.", description: "Insulated or reinforced delivery bags that keep food at the right temperature and arrive in perfect condition.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["Insulated lining options", "Moisture-resistant", "Tamper-evident options", "Large capacity available"], specs: [{ label: "Material", value: "Foil-Lined Paper / Non-Woven" }, { label: "Insulation", value: "Optional Foil Lining" }, { label: "Closure", value: "Fold & Seal / Zipper" }], priceInfo: { amount: "₹20.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Standard", desc: "32 x 42 cm" }, { name: "Large", desc: "40 x 52 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Foil Lined", desc: "Insulated" }, { name: "Standard", desc: "Non-Insulated" }] },
    ],
  },
  {
    slug: "jewellers",
    name: "Jewellers",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Luxury packaging for your most precious pieces.",
    description: "Our luxury jewellery bags are crafted with premium materials — velvet, satin, and specialty papers.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "jewellery-gift-bags", name: "Jewellery Gift Bags", collectionSlug: "jewellers", collectionName: "Jewellers", parentCategory: "bags-by-industry", tagline: "Present your precious pieces perfectly.", description: "Luxurious paper and fabric bags for jewellery brands — with gold foil, embossing, and ribbon handles.", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800", features: ["Premium board construction", "Gold foil branding", "Satin ribbon handles", "Tissue paper-compatible"], specs: [{ label: "Material", value: "Premium Art Board" }, { label: "GSM", value: "350–400 GSM" }, { label: "Finishing", value: "Foil / Emboss" }, { label: "Usage", value: "Jewellery / Gifting" }], priceInfo: { amount: "₹55.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "12 x 16 cm" }, { name: "Medium", desc: "18 x 24 cm" }, { name: "Large", desc: "24 x 32 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "350 GSM", desc: "Premium" }, { name: "400 GSM", desc: "Luxury" }] },
      { slug: "velvet-jewellery-pouches", name: "Velvet Jewellery Pouches", collectionSlug: "jewellers", collectionName: "Jewellers", parentCategory: "bags-by-industry", tagline: "Soft luxury for precious jewellery.", description: "Soft velvet drawstring pouches that protect and present jewellery with understated luxury.", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800", features: ["Soft velvet fabric", "Drawstring closure", "Gold foil print options", "Multiple colours available"], specs: [{ label: "Material", value: "Premium Velvet" }, { label: "Closure", value: "Satin Drawstring" }, { label: "Print", value: "Foil Stamping" }, { label: "Usage", value: "Jewellery Pouches" }], priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "8 x 10 cm" }, { name: "Medium", desc: "12 x 15 cm" }, { name: "Large", desc: "18 x 22 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Standard Velvet", desc: "Classic" }, { name: "Crushed Velvet", desc: "Premium" }] },
    ],
  },
  {
    slug: "fashion",
    name: "Fashion Designers",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Packaging as stylish as your designs.",
    description: "Fashion packaging is an extension of your design philosophy.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "luxury-fashion-shopping-bags", name: "Luxury Fashion Shopping Bags", collectionSlug: "fashion", collectionName: "Fashion Designers", parentCategory: "bags-by-industry", tagline: "Where fashion meets functionality.", description: "Premium fashion shopping bags that become as coveted as the clothes inside. Crafted for luxury and lifestyle brands.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["Premium art board construction", "Ribbon or rope handles", "Matte/gloss lamination", "Foil & emboss options"], specs: [{ label: "Material", value: "Premium Art Board" }, { label: "GSM", value: "300–400 GSM" }, { label: "Handles", value: "Ribbon / Rope" }, { label: "Finishing", value: "Foil / Matte Lam" }], priceInfo: { amount: "₹72.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "20 x 28 cm" }, { name: "Medium", desc: "28 x 38 cm" }, { name: "Large", desc: "38 x 48 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Matte Lam", desc: "Elegant" }, { name: "Gloss Lam", desc: "Vibrant" }] },
      { slug: "garment-bags", name: "Garment Bags", collectionSlug: "fashion", collectionName: "Fashion Designers", parentCategory: "bags-by-industry", tagline: "Protect your garments in style.", description: "Custom garment bags for fashion designers and apparel brands — keeping clothes safe while reinforcing brand identity.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800", features: ["LDPE / Non-woven options", "Anti-dust protection", "Custom branding available", "Hanger hole included"], specs: [{ label: "Material", value: "LDPE / Non-Woven" }, { label: "Closure", value: "Self-Adhesive / Tie" }, { label: "Printing", value: "Screen / Flexo" }, { label: "Usage", value: "Garments / Apparel" }], priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 200, sizes: [{ name: "Shirt", desc: "35 x 55 cm" }, { name: "Dress", desc: "45 x 75 cm" }, { name: "Suit", desc: "55 x 100 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "LDPE", desc: "Clear" }, { name: "Non-Woven", desc: "Opaque" }] },
    ],
  },
  {
    slug: "events",
    name: "Events",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Make every event memorable — start with the bag.",
    description: "From corporate conferences to weddings and product launches, our event packaging creates memorable experiences.",
    image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "conference-event-bags", name: "Conference & Event Bags", collectionSlug: "events", collectionName: "Events", parentCategory: "bags-by-industry", tagline: "Your event, everyone's keepsake.", description: "Custom branded conference and event bags — a functional keepsake attendees will use long after the event.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Multiple compartments", "Custom event branding", "Durable materials", "Corporate-grade quality"], specs: [{ label: "Material", value: "Canvas / Non-Woven" }, { label: "Printing", value: "Screen / Embroidery" }, { label: "Usage", value: "Conferences / Summits" }], priceInfo: { amount: "₹48.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Standard", desc: "35 x 40 cm" }, { name: "Large", desc: "40 x 50 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Canvas", desc: "Premium" }, { name: "Non-Woven", desc: "Budget" }] },
      { slug: "wedding-welcome-bags", name: "Wedding Welcome Bags", collectionSlug: "events", collectionName: "Events", parentCategory: "bags-by-industry", tagline: "Celebrate in style, greet with grace.", description: "Elegant welcome bags for weddings — customized to match your theme and filled with thoughtful keepsakes.", image: "https://images.unsplash.com/photo-1583623337997-09e8d5cd45f1?auto=format&fit=crop&q=80&w=800", features: ["Wedding theme designs", "Personalized name options", "Premium materials", "Elegant presentation"], specs: [{ label: "Material", value: "Art Paper / Fabric" }, { label: "Finishing", value: "Foil / Emboss" }, { label: "Usage", value: "Weddings / Celebrations" }], priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "25 x 32 cm" }, { name: "Medium", desc: "32 x 42 cm" }, { name: "Large", desc: "40 x 52 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Art Paper", desc: "Elegant" }, { name: "Fabric", desc: "Luxury" }] },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// BOXES — COLLECTIONS & PRODUCTS
// ─────────────────────────────────────────────────────────────────────────────

export const boxesCollections: CollectionData[] = [
  {
    slug: "cardboard-2-layer",
    name: "Cardboard Boxes – 2 Layer",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Lightweight strength for everyday packaging needs.",
    description: "Our 2-layer corrugated cardboard boxes deliver reliable protection for lighter products. Constructed from two layers of premium board.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "standard-2-layer-box", name: "Standard 2-Layer Box", collectionSlug: "cardboard-2-layer", collectionName: "Cardboard Boxes – 2 Layer", parentCategory: "boxes", tagline: "Reliable protection, everyday use.", description: "Standard 2-layer corrugated cardboard boxes for retail packaging, gifting, and product dispatch.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800", features: ["2-ply corrugated board", "Up to 5 kg capacity", "Custom print available", "All standard sizes", "Flat-pack storage"], specs: [{ label: "Material", value: "2-Ply Corrugated Board" }, { label: "Capacity", value: "Up to 5 kg" }, { label: "Printing", value: "Flexographic / Digital" }, { label: "Color", value: "Kraft Brown / White" }, { label: "Sustainability", value: "FSC Certified Paper" }], priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 15 x 10 cm" }, { name: "Medium", desc: "30 x 20 x 15 cm" }, { name: "Large", desc: "40 x 30 x 20 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft", desc: "Natural Brown" }, { name: "White", desc: "Clean White" }] },
      { slug: "printed-2-layer-box", name: "Printed 2-Layer Box", collectionSlug: "cardboard-2-layer", collectionName: "Cardboard Boxes – 2 Layer", parentCategory: "boxes", tagline: "Brand every box, every order.", description: "2-layer corrugated boxes with full-colour custom printing — turn your boxes into powerful brand statements.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800", features: ["Full-color flexo printing", "Brand logos & artwork", "Up to 6 colour printing", "CMYK offset printing"], specs: [{ label: "Material", value: "2-Ply Corrugated" }, { label: "Printing", value: "Flexo / Offset / Digital" }, { label: "Colors", value: "Up to 6 Colors" }, { label: "Finish", value: "Matte / Gloss Lamination" }], priceInfo: { amount: "₹24.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "20 x 15 x 10 cm" }, { name: "Medium", desc: "30 x 20 x 15 cm" }, { name: "Large", desc: "40 x 30 x 20 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft", desc: "Natural" }, { name: "White", desc: "Bright" }] },
    ],
  },
  {
    slug: "cardboard-3-layer",
    name: "Cardboard Boxes – 3 Layer",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Heavy-duty protection for your most important shipments.",
    description: "Built for heavier loads and long-distance shipping, our 3-layer corrugated boxes are the industry standard for durability.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "standard-3-layer-box", name: "Standard 3-Layer Box", collectionSlug: "cardboard-3-layer", collectionName: "Cardboard Boxes – 3 Layer", parentCategory: "boxes", tagline: "Strength for every shipment.", description: "Industry-standard 3-layer corrugated boxes designed for bulk shipments, heavy products, and fragile goods.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["3-ply corrugated board", "Up to 25 kg capacity", "High stacking strength", "Moisture-resistant options", "Custom print available"], specs: [{ label: "Material", value: "Corrugated Board" }, { label: "Ply Options", value: "3 Ply / 5 Ply / 7 Ply" }, { label: "Capacity", value: "Up to 25 kg" }, { label: "Printing", value: "Flexographic / Digital" }, { label: "Color", value: "Kraft Brown / White" }, { label: "Sustainability", value: "100% Recyclable" }], priceInfo: { amount: "₹25.50", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 20 x 15 cm" }, { name: "Medium", desc: "35 x 25 x 20 cm" }, { name: "Large", desc: "45 x 35 x 30 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "3 Ply", desc: "Standard Strength" }, { name: "5 Ply", desc: "Extra Strength" }, { name: "7 Ply", desc: "Heavy Duty" }] },
      { slug: "heavy-duty-3-layer-box", name: "Heavy Duty 3-Layer Box", collectionSlug: "cardboard-3-layer", collectionName: "Cardboard Boxes – 3 Layer", parentCategory: "boxes", tagline: "Maximum protection guaranteed.", description: "Extra-strong 3-layer boxes with 5-ply or 7-ply construction for industrial, export, and heavy-load applications.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", features: ["5-ply or 7-ply available", "Industrial grade strength", "Suitable for export shipping", "Extra stacking capacity"], specs: [{ label: "Material", value: "5-Ply / 7-Ply Corrugated" }, { label: "Capacity", value: "25–50 kg" }, { label: "Usage", value: "Industrial / Export" }, { label: "Stacking", value: "2000+ kg" }], priceInfo: { amount: "₹42.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Medium", desc: "40 x 30 x 25 cm" }, { name: "Large", desc: "55 x 40 x 35 cm" }, { name: "XL", desc: "65 x 50 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "5 Ply", desc: "Extra Strength" }, { name: "7 Ply", desc: "Heavy Duty" }] },
    ],
  },
  {
    slug: "thermacol",
    name: "Thermacol Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Superior insulation for temperature-sensitive products.",
    description: "Our EPS (Expanded Polystyrene) Thermacol boxes provide exceptional thermal insulation and shock absorption.",
    image: "https://images.unsplash.com/photo-1620021305602-0e86b2451f28?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "standard-thermacol-box", name: "Standard Thermacol Box", collectionSlug: "thermacol", collectionName: "Thermacol Boxes", parentCategory: "boxes", tagline: "Cold chain protection, simplified.", description: "EPS thermacol boxes for standard cold chain applications — food delivery, dairy, and temperature-sensitive goods.", image: "https://images.unsplash.com/photo-1620021305602-0e86b2451f28?auto=format&fit=crop&q=80&w=800", features: ["Superior thermal insulation", "Lightweight & protective", "Shock absorption", "Waterproof & moisture-resistant"], specs: [{ label: "Material", value: "EPS (Expanded Polystyrene)" }, { label: "Insulation", value: "Up to 72 hours" }, { label: "Temperature", value: "-20°C to 80°C" }, { label: "Food Safe", value: "FDA Approved" }], priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "Small", desc: "25 x 20 x 15 cm" }, { name: "Medium", desc: "40 x 30 x 25 cm" }, { name: "Large", desc: "55 x 40 x 30 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "15 Density", desc: "Standard" }, { name: "20 Density", desc: "Premium" }] },
      { slug: "pharma-thermacol-box", name: "Pharma Thermacol Box", collectionSlug: "thermacol", collectionName: "Thermacol Boxes", parentCategory: "boxes", tagline: "Precision protection for pharmaceuticals.", description: "Pharmaceutical-grade thermacol boxes with tight tolerances and FDA-compliant materials for medicines and biologics.", image: "https://images.unsplash.com/photo-1620021305602-0e86b2451f28?auto=format&fit=crop&q=80&w=800", features: ["Pharma-grade EPS", "Extended temperature hold", "Tamper-evident options", "Validated packaging solutions"], specs: [{ label: "Material", value: "Pharma-Grade EPS" }, { label: "Compliance", value: "FDA / WHO GMP" }, { label: "Temperature", value: "2°C to 8°C" }, { label: "Validation", value: "Available" }], priceInfo: { amount: "₹65.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "20 x 15 x 12 cm" }, { name: "Medium", desc: "35 x 25 x 20 cm" }, { name: "Large", desc: "50 x 40 x 30 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "20 Density", desc: "Pharma Standard" }, { name: "25 Density", desc: "High Performance" }] },
    ],
  },
  {
    slug: "cake-boxes",
    name: "Cake Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Safe, beautiful presentation for every bake.",
    description: "Our cake boxes are engineered to hold, protect, and present your cakes perfectly.",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "single-tier-cake-box", name: "Single Tier Cake Box", collectionSlug: "cake-boxes", collectionName: "Cake Boxes", parentCategory: "boxes", tagline: "Perfect presentation for every single cake.", description: "Food-grade single-tier cake boxes with window options and custom bakery branding.", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800", features: ["Food-grade SBS board", "Window cut option", "Grease resistant", "Custom print available"], specs: [{ label: "Material", value: "Food Grade SBS Board" }, { label: "Window", value: "Optional PET Window" }, { label: "Printing", value: "Offset / Flexo" }, { label: "Sustainability", value: "Recyclable Board" }], priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "6 inch", desc: "15 x 15 x 12 cm" }, { name: "8 inch", desc: "20 x 20 x 12 cm" }, { name: "10 inch", desc: "25 x 25 x 12 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "White SBS", desc: "Standard" }, { name: "Kraft Board", desc: "Natural" }] },
      { slug: "tall-cake-box", name: "Tall Cake Box", collectionSlug: "cake-boxes", collectionName: "Cake Boxes", parentCategory: "boxes", tagline: "Tiered cakes deserve tall, sturdy boxes.", description: "Extra-tall cake boxes designed for multi-tier cakes, cupcake towers, and celebration cakes that need more height.", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800", features: ["Extra height construction", "Strong corrugated base", "Wide window options", "Handle available"], specs: [{ label: "Material", value: "Corrugated + SBS Board" }, { label: "Height", value: "20–45 cm" }, { label: "Printing", value: "Offset / Flexo" }, { label: "Base", value: "Reinforced Corrugated" }], priceInfo: { amount: "₹38.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Medium", desc: "20 x 20 x 25 cm" }, { name: "Large", desc: "28 x 28 x 35 cm" }, { name: "XL", desc: "35 x 35 x 45 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "White SBS", desc: "Clean Look" }, { name: "Kraft", desc: "Rustic Look" }] },
    ],
  },
  {
    slug: "sweet-boxes",
    name: "Sweet Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Gift every sweet moment in style.",
    description: "Our sweet boxes are crafted to make every gifting occasion special. Available in a wide range of sizes, designs, and finishes.",
    image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=1200",
    products: [
      { slug: "mithai-gift-box", name: "Mithai Gift Box", collectionSlug: "sweet-boxes", collectionName: "Sweet Boxes", parentCategory: "boxes", tagline: "Sweets that speak of tradition.", description: "Beautiful mithai boxes with partition inserts, perfect for Diwali gifting, wedding return gifts, and sweet shop retail.", image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=800", features: ["Partition inserts available", "Food-safe coating", "Festive designs available", "Bulk pricing for events"], specs: [{ label: "Material", value: "Premium Board" }, { label: "Insert", value: "Partition / Tray" }, { label: "Food Safe", value: "Yes" }, { label: "Occasions", value: "Diwali / Wedding / Eid" }], priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 100, sizes: [{ name: "250g", desc: "15 x 12 x 4 cm" }, { name: "500g", desc: "20 x 16 x 5 cm" }, { name: "1kg", desc: "28 x 22 x 6 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Kraft Board", desc: "Natural" }, { name: "Gold Foil Board", desc: "Premium" }] },
      { slug: "luxury-sweet-box", name: "Luxury Sweet Box", collectionSlug: "sweet-boxes", collectionName: "Sweet Boxes", parentCategory: "boxes", tagline: "The finest gifting experience.", description: "Ultra-premium sweet boxes with magnetic closure, gold foil stamping, and ribbon accents for corporate gifting and luxury brands.", image: "https://images.unsplash.com/photo-1606323497184-754d9c73361a?auto=format&fit=crop&q=80&w=800", features: ["Magnetic closure", "Gold foil stamping", "Ribbon pull option", "Satin interior lining"], specs: [{ label: "Material", value: "Rigid Board" }, { label: "Closure", value: "Magnetic Flap" }, { label: "Finishing", value: "Foil / Emboss / UV" }, { label: "Lining", value: "Satin / Foam Insert" }], priceInfo: { amount: "₹85.00", unit: "Pcs", subtext: "(Est. of GST)" }, minOrder: 50, sizes: [{ name: "Small", desc: "18 x 14 x 5 cm" }, { name: "Medium", desc: "25 x 20 x 6 cm" }, { name: "Large", desc: "35 x 28 x 8 cm" }, { name: "Custom", desc: "Any Size" }], materials: [{ name: "Premium Board", desc: "Luxury" }, { name: "Rigid Board", desc: "Ultra Luxury" }] },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED LOOKUP MAPS
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_COLLECTIONS: CollectionData[] = [
  ...bagsMaterialCollections,
  ...bagsIndustryCollections,
  ...boxesCollections,
];

export const ALL_PRODUCTS: ProductItem[] = ALL_COLLECTIONS.flatMap(
  (c) => c.products
);

export function getCollectionBySlug(slug: string): CollectionData | undefined {
  return ALL_COLLECTIONS.find((c) => c.slug === slug);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getCollectionForProduct(productSlug: string): CollectionData | undefined {
  const product = getProductBySlug(productSlug);
  if (!product) return undefined;
  return getCollectionBySlug(product.collectionSlug);
}

// ─────────────────────────────────────────────────────────────────────────────
// LEGACY EXPORTS (kept for backward compatibility)
// ─────────────────────────────────────────────────────────────────────────────

export const bagsMaterialCategories = bagsMaterialCollections;
export const bagsIndustryCategories = bagsIndustryCollections;
export const boxesCategories = boxesCollections;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Bags by Material",
    href: "/bags-by-material",
    children: [
      { label: "Paper Bags", href: "/collections/paper-bags" },
      { label: "Jute Bags", href: "/collections/jute-bags" },
      { label: "Cotton Bags", href: "/collections/cotton-bags" },
      { label: "Canvas Bags", href: "/collections/canvas-bags" },
      { label: "Non-Woven Bags", href: "/collections/non-woven-bags" },
      { label: "Organic & Eco-Friendly Bags", href: "/collections/eco-friendly-bags" },
      { label: "Synthetic Bags", href: "/collections/synthetic-bags" },
      { label: "Tote Bags", href: "/collections/tote-bags" },
    ],
  },
  {
    label: "Bags by Industry",
    href: "/bags-by-industry",
    children: [
      { label: "Corporates", href: "/collections/corporates" },
      { label: "Retail Stores & Brands", href: "/collections/retail" },
      { label: "Sweet Industry", href: "/collections/sweet-industry" },
      { label: "Cake Industry", href: "/collections/cake-industry" },
      { label: "Restaurants & Cafes", href: "/collections/restaurants" },
      { label: "Jewellers", href: "/collections/jewellers" },
      { label: "Fashion Designers", href: "/collections/fashion" },
      { label: "Events", href: "/collections/events" },
    ],
  },
  {
    label: "Boxes",
    href: "/boxes",
    children: [
      { label: "Cardboard Boxes – 2 Layer", href: "/collections/cardboard-2-layer" },
      { label: "Cardboard Boxes – 3 Layer", href: "/collections/cardboard-3-layer" },
      { label: "Thermacol Boxes", href: "/collections/thermacol" },
      { label: "Cake Boxes", href: "/collections/cake-boxes" },
      { label: "Sweet Boxes", href: "/collections/sweet-boxes" },
    ],
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Blogs", href: "/blogs" },
];

export const whyChooseUs = [
  { icon: "🚚", title: "Fast Delivery", description: "On-time delivery across India with reliable logistics partners." },
  { icon: "✦", title: "Best Quality", description: "Premium materials and stringent quality checks on every order." },
  { icon: "🤝", title: "Best Service", description: "Dedicated account managers and responsive after-sales support." },
  { icon: "🎨", title: "Customization", description: "Full brand customization — print, size, material, and finish." },
];

export const whatWeOffer = [
  "Personalized consultation to find the perfect packaging solution for your brand",
  "Over 15 years of industry experience serving 500+ businesses across India",
  "Premium quality materials at competitive, bulk-friendly pricing",
  "One-stop packaging solutions — bags, boxes, and custom prints under one roof",
  "Eco-friendly and sustainable material options available",
  "Rapid prototyping and sample orders before bulk production",
];

export const testimonials = [
  { quote: "P&P Packaging transformed our retail experience. The custom paper bags they made for our boutique are absolutely stunning — our customers love them and often reuse them.", author: "Priya Sharma", company: "Aria Fashion Studio, Mumbai", rating: 5 },
  { quote: "We've been ordering corporate gifting bags from P&P for 3 years. The quality is consistently excellent, delivery is always on time, and their team is incredibly professional.", author: "Rahul Mehta", company: "TechVenture Solutions, Bangalore", rating: 5 },
  { quote: "Our sweet shop needed festive packaging that truly matched the occasion. P&P delivered exactly what we envisioned — beautifully crafted boxes that made our Diwali collection shine.", author: "Anita Desai", company: "Royal Mithai House, Pune", rating: 5 },
  { quote: "The thermacol boxes for our seafood delivery business are perfect. Superior insulation, no leakage, and the custom printing makes our brand look professional. Highly recommend!", author: "Mohammed Raza", company: "Ocean Fresh Exports, Chennai", rating: 5 },
  { quote: "As a jewellery brand, presentation is everything. P&P's velvet and premium paper bags have elevated our unboxing experience tremendously. Our customers always comment on the packaging.", author: "Sunita Agarwal", company: "Luminary Jewels, Delhi", rating: 5 },
];

export const clients = [
  { name: "Reliance Retail", logo: "/images/clients/client1.svg" },
  { name: "Taj Hotels", logo: "/images/clients/client2.svg" },
  { name: "Malabar Gold", logo: "/images/clients/client3.svg" },
  { name: "Haldirams", logo: "/images/clients/client4.svg" },
  { name: "Fabindia", logo: "/images/clients/client5.svg" },
  { name: "Bikanervala", logo: "/images/clients/client6.svg" },
  { name: "Raymond", logo: "/images/clients/client7.svg" },
  { name: "Tanishq", logo: "/images/clients/client8.svg" },
  { name: "D-Mart", logo: "/images/clients/client9.svg" },
  { name: "Future Group", logo: "/images/clients/client10.svg" },
  { name: "Monginis", logo: "/images/clients/client11.svg" },
  { name: "Big Bazaar", logo: "/images/clients/client12.svg" },
];

export const blogPosts = [
  { slug: "why-custom-packaging-matters", title: "Why Custom Packaging Is Your Best Marketing Investment", excerpt: "In a world where first impressions drive buying decisions, custom packaging has become a brand's most powerful silent salesperson.", date: "2024-08-10", readTime: "5 min read", category: "Branding", image: "/images/blog/blog1.jpg" },
  { slug: "eco-friendly-packaging-guide", title: "The Complete Guide to Eco-Friendly Packaging for Indian Businesses", excerpt: "As sustainability becomes a customer expectation, Indian businesses are switching to eco-friendly packaging.", date: "2024-07-25", readTime: "7 min read", category: "Sustainability", image: "/images/blog/blog2.jpg" },
  { slug: "packaging-for-festive-season", title: "Festive Packaging: Preparing Your Business for Diwali and Beyond", excerpt: "The festive season is India's biggest sales window. Here's how to prepare your packaging.", date: "2024-07-10", readTime: "4 min read", category: "Seasonal", image: "/images/blog/blog3.jpg" },
];

export const productInquiryOptions = [
  "Paper Bags", "Jute Bags", "Cotton Bags", "Canvas Bags", "Non-Woven Bags", "Eco-Friendly Bags",
  "Synthetic Bags", "Tote Bags", "Cardboard Boxes – 2 Layer", "Cardboard Boxes – 3 Layer",
  "Thermacol Boxes", "Cake Boxes", "Sweet Boxes", "Other / Custom Requirement",
];
