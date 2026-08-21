import { PRODUCT_IMAGES } from "@/lib/product-images";
// Central content store — all text content for P&P Packaging

export const siteConfig = {
  name: "P&P Packaging",
  url: "https://pppackaging.in",
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

export interface ProductItem {
  slug: string;
  name: string;
  parentCategory: string; // "bags-by-material" | "bags-by-industry" | "boxes"
  parentLabel: string;
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

export const bagsByMaterial: ProductItem[] = [
  {
    slug: "paper-bags",
    name: "Paper Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Elegant. Biodegradable. Brandable.",
    description: "Our premium paper bags combine strength with sophistication. Available in kraft, art paper, and coated finishes, they're perfect for retail, gifting, and corporate use.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["100% recyclable kraft paper", "Vivid full-color printing", "Gold/silver foil stamping", "Multiple handle options", "Premium unboxing experience"],
    specs: [{ label: "Material", value: "Kraft / Art Paper / Board" }, { label: "GSM", value: "80–350 GSM" }, { label: "Handles", value: "Twisted / Flat / Ribbon" }, { label: "Finish", value: "Natural / Glossy / Matte" }],
    priceInfo: { amount: "₹12.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "20 x 10 x 25 cm" }, { name: "Medium", desc: "30 x 12 x 35 cm" }, { name: "Large", desc: "40 x 15 x 45 cm" }, { name: "Custom", desc: "Any Size" }],
    materials: [{ name: "Kraft Paper", desc: "Natural Look" }, { name: "Art Paper", desc: "Glossy Finish" }, { name: "Premium Board", desc: "Luxury Feel" }]
  },
  {
    slug: "jute-bags",
    name: "Jute Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Natural. Durable. Sustainable.",
    description: "Jute bags are the gold standard of eco-friendly packaging. Our handcrafted jute bags are sturdy, reusable, and naturally biodegradable.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["100% natural jute fibre", "Extremely durable & reusable", "Screen print & embroidery", "Multiple weave types available"],
    specs: [{ label: "Material", value: "Natural Jute" }, { label: "Weight", value: "200–400 GSM" }, { label: "Handles", value: "Jute / Cotton Webbing" }, { label: "Capacity", value: "10–15 Litres" }],
    priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }, { name: "Custom", desc: "Any Size" }],
    materials: [{ name: "Plain Jute", desc: "Classic" }, { name: "Laminated Jute", desc: "Water-resistant" }]
  },
  {
    slug: "cotton-bags",
    name: "Cotton Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Soft. Washable. Premium.",
    description: "Cotton bags offer the premium feel that discerning brands demand. Lightweight yet strong, washable and reusable.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["100% cotton fabric", "Washable & reusable", "GOTS certified organic options", "Drawstring closures available"],
    specs: [{ label: "Material", value: "100% Cotton" }, { label: "Weight", value: "120–200 GSM" }, { label: "Printing", value: "Screen Print / Heat Transfer" }],
    priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Medium", desc: "35 x 40 cm" }, { name: "Custom", desc: "Any Size" }],
    materials: [{ name: "Standard Cotton", desc: "150 GSM" }, { name: "Organic Cotton", desc: "GOTS Certified" }]
  },
  {
    slug: "canvas-bags",
    name: "Canvas Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Rugged. Stylish. Long-lasting.",
    description: "Heavy-duty canvas bags built for brands that mean business. Crafted from thick, durable canvas fabric.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Heavy-duty canvas fabric", "Long-lasting & weather-resistant", "Custom print & embroidery", "Reinforced bottom panel"],
    specs: [{ label: "Material", value: "Cotton Canvas" }, { label: "Weight", value: "280–400 GSM" }, { label: "Capacity", value: "15–20 Litres" }],
    priceInfo: { amount: "₹38.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 50,
    sizes: [{ name: "Standard", desc: "38 x 42 cm" }, { name: "Large", desc: "45 x 50 cm" }],
    materials: [{ name: "Standard Canvas", desc: "280 GSM" }, { name: "Heavy Duty", desc: "400 GSM" }]
  },
  {
    slug: "non-woven-bags",
    name: "Non-Woven Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "Affordable. Versatile. Lightweight.",
    description: "Non-woven bags offer the best value for large-quantity orders. Lightweight, water-resistant, and available in any color.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Lightweight & water-resistant", "D-cut and W-cut handles", "Stitched loop options", "Full-color flexo printing"],
    specs: [{ label: "Material", value: "Non-Woven PP" }, { label: "GSM", value: "60–120 GSM" }, { label: "Printing", value: "Flexo / Screen" }],
    priceInfo: { amount: "₹8.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 500,
    sizes: [{ name: "Small", desc: "25 x 30 cm" }, { name: "Large", desc: "45 x 50 cm" }],
    materials: [{ name: "Standard", desc: "80 GSM" }, { name: "Heavy", desc: "100 GSM" }]
  },
  {
    slug: "eco-friendly-bags",
    name: "Organic & Eco-Friendly Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "100% Earth-friendly packaging.",
    description: "Certified organic and fully biodegradable bags designed for brands committed to the environment.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Certified organic materials", "Plant-based inks", "Zero plastic components", "Compostable options"],
    specs: [{ label: "Material", value: "Organic Cotton / Jute / Hemp" }, { label: "Certifications", value: "GOTS / FSC" }],
    priceInfo: { amount: "₹30.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Standard", desc: "38 x 42 cm" }],
    materials: [{ name: "Organic Cotton", desc: "Premium" }, { name: "Hemp", desc: "Ultra Durable" }]
  },
  {
    slug: "synthetic-bags",
    name: "Synthetic Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "High strength, water-resistant.",
    description: "Durable synthetic options for industrial use, heavy retail, and specialized requirements.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Water-resistant finish", "High tensile strength", "Wipe-clean surface", "Industrial grade"],
    specs: [{ label: "Material", value: "PP / Polyester" }, { label: "Weight", value: "Custom" }],
    priceInfo: { amount: "₹15.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 200,
    sizes: [{ name: "Custom", desc: "Made to order" }],
    materials: [{ name: "Polyester", desc: "Standard" }, { name: "Woven PP", desc: "Heavy Duty" }]
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    parentCategory: "bags-by-material",
    parentLabel: "Bags by Material",
    tagline: "The ultimate lifestyle accessory.",
    description: "Premium tote bags crafted for everyday carry, retail merchandise, and premium gifting.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Fashion-forward designs", "Interior pockets", "Zip closures available", "Premium fabric blends"],
    specs: [{ label: "Material", value: "Canvas / Cotton / Blends" }, { label: "Capacity", value: "10-25 Litres" }],
    priceInfo: { amount: "₹45.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 50,
    sizes: [{ name: "Medium", desc: "35 x 40 cm" }, { name: "Large", desc: "45 x 50 cm" }],
    materials: [{ name: "Cotton", desc: "Soft" }, { name: "Canvas", desc: "Rigid" }]
  }
];

export const bagsByIndustry: ProductItem[] = [
  {
    slug: "ecommerce-mailer-bags",
    name: "E-Commerce Mailer Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Secure, weather-proof shipping.",
    description: "Tamper-evident, weather-resistant mailer bags designed for e-commerce deliveries.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Tamper-evident seal", "Waterproof exterior", "Tear-resistant", "Bubble-lined options"],
    specs: [{ label: "Material", value: "Poly / Kraft Bubble" }, { label: "Closure", value: "Self-seal adhesive" }],
    priceInfo: { amount: "₹4.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 1000,
    sizes: [{ name: "Small", desc: "6 x 9 inches" }, { name: "Medium", desc: "10 x 13 inches" }],
    materials: [{ name: "Poly", desc: "Standard" }, { name: "Kraft Bubble", desc: "Protective" }]
  },
  {
    slug: "food-delivery-bags",
    name: "Food Delivery Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Hot, fresh, and secure.",
    description: "Thermal insulated bags and sturdy paper bags for restaurant takeaways and food delivery apps.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Thermal insulation options", "Grease-resistant bases", "Spill-proof design", "Custom branding"],
    specs: [{ label: "Material", value: "Kraft / Thermal Foil" }, { label: "Base", value: "Wide block bottom" }],
    priceInfo: { amount: "₹15.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 500,
    sizes: [{ name: "Standard", desc: "10 x 6 x 12 inches" }],
    materials: [{ name: "Brown Kraft", desc: "Standard" }, { name: "Thermal", desc: "Hot/Cold" }]
  },
  {
    slug: "jewellery-bags",
    name: "Jewellery Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Luxury in every detail.",
    description: "Soft velvet and suede pouches for premium jewellery and watches.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Soft anti-tarnish lining", "Ribbon drawstring", "Foil stamped logos", "Premium finish"],
    specs: [{ label: "Material", value: "Velvet / Suede / Satin" }, { label: "Closure", value: "Drawstring" }],
    priceInfo: { amount: "₹45.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "3 x 4 inches" }, { name: "Medium", desc: "5 x 7 inches" }],
    materials: [{ name: "Velvet", desc: "Classic" }, { name: "Satin", desc: "Smooth" }]
  },
  {
    slug: "retail-shopping-bags",
    name: "Retail Shopping Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Your brand on the street.",
    description: "High-quality shopping bags for fashion, cosmetics, and boutique retail.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Sturdy rope handles", "Reinforced bottom", "Vibrant printing", "Gloss/Matte lamination"],
    specs: [{ label: "Material", value: "Art Paper / Kraft" }, { label: "Handles", value: "Rope / Ribbon" }],
    priceInfo: { amount: "₹25.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 250,
    sizes: [{ name: "Medium", desc: "10 x 4 x 12 inches" }],
    materials: [{ name: "White Kraft", desc: "Clean" }, { name: "Art Paper", desc: "Premium" }]
  },
  {
    slug: "pharmaceutical-bags",
    name: "Pharmaceutical Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Hygienic and compliant.",
    description: "Clean, hygienic paper and poly bags for pharmacies and medical suppliers.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Hygienic manufacturing", "Prescription slip pockets", "Opaque for privacy", "Cost-effective"],
    specs: [{ label: "Material", value: "Kraft / PE" }, { label: "Compliance", value: "Medical Grade options" }],
    priceInfo: { amount: "₹3.50", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 1000,
    sizes: [{ name: "Standard", desc: "5 x 7 inches" }],
    materials: [{ name: "White Kraft", desc: "Standard" }]
  },
  {
    slug: "event-exhibition-bags",
    name: "Event & Exhibition Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "The perfect swag bag.",
    description: "Spacious, lightweight bags designed to hold brochures, samples, and swag at trade shows.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Large branding area", "Cost-effective", "Comfortable handles", "High capacity"],
    specs: [{ label: "Material", value: "Non-Woven / Canvas" }, { label: "Print", value: "Large format screen print" }],
    priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 250,
    sizes: [{ name: "Large", desc: "15 x 16 inches" }],
    materials: [{ name: "Non-Woven", desc: "Budget" }, { name: "Canvas", desc: "Premium" }]
  },
  {
    slug: "agriculture-bags",
    name: "Agriculture Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Heavy-duty protection.",
    description: "High-strength woven sacks for grains, seeds, fertilizers, and agricultural produce.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Tear-resistant woven PP", "Breathable options", "Moisture barrier lining", "50kg+ capacity"],
    specs: [{ label: "Material", value: "Woven PP / Jute" }, { label: "Capacity", value: "10kg - 50kg" }],
    priceInfo: { amount: "₹25.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 500,
    sizes: [{ name: "25kg", desc: "18 x 28 inches" }],
    materials: [{ name: "Woven PP", desc: "Standard" }, { name: "Jute Sacks", desc: "Breathable" }]
  },
  {
    slug: "wine-bottle-bags",
    name: "Wine & Bottle Bags",
    parentCategory: "bags-by-industry",
    parentLabel: "Bags by Industry",
    tagline: "Cheers to great packaging.",
    description: "Tall, reinforced bags designed specifically for wine bottles, spirits, and olive oil.",
    image: PRODUCT_IMAGES.corrugatedBoxes,
    features: ["Tall slender profile", "Reinforced base", "Sturdy rope handles", "Single & double options"],
    specs: [{ label: "Material", value: "Art Paper / Kraft / Jute" }, { label: "Capacity", value: "1 or 2 bottles" }],
    priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Single Bottle", desc: "4 x 4 x 14 inches" }],
    materials: [{ name: "Kraft", desc: "Rustic" }, { name: "Art Paper", desc: "Premium" }]
  }
];

export const boxes: ProductItem[] = [
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Strong, durable and sustainable.",
    description: "Standard corrugated boxes for safe delivery and storage. Available in 2, 3, 5, and 7 ply options.",
    image: PRODUCT_IMAGES.rigidBoxes,
    features: ["High crush resistance", "100% recyclable", "Custom dimensions", "Flexo printing"],
    specs: [{ label: "Ply", value: "2 / 3 / 5 / 7" }, { label: "Fluting", value: "A / B / C / E / F" }, { label: "Material", value: "Kraft Board" }],
    priceInfo: { amount: "₹18.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "6 x 6 x 6 in" }, { name: "Medium", desc: "12 x 12 x 12 in" }, { name: "Large", desc: "18 x 18 x 18 in" }],
    materials: [{ name: "3-Ply", desc: "Standard" }, { name: "5-Ply", desc: "Heavy Duty" }]
  },
  {
    slug: "rigid-boxes",
    name: "Rigid Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Premium unboxing experience.",
    description: "Luxury rigid boxes that add value and strengthen your brand identity. Perfect for electronics, cosmetics, and gifting.",
    image: PRODUCT_IMAGES.customPackaging,
    features: ["Thick rigid board core", "Magnetic closure options", "Premium wrapping papers", "Custom foam inserts"],
    specs: [{ label: "Material", value: "Greyboard + Art Paper" }, { label: "Thickness", value: "1mm - 3mm" }, { label: "Style", value: "Lid & Base / Magnetic / Drawer" }],
    priceInfo: { amount: "₹85.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "15 x 10 x 5 cm" }, { name: "Medium", desc: "25 x 20 x 8 cm" }],
    materials: [{ name: "Art Paper Wrap", desc: "Standard" }, { name: "Textured Paper", desc: "Premium" }]
  },
  {
    slug: "mailer-boxes",
    name: "Mailer Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Stylish and sturdy.",
    description: "Die-cut mailer boxes for a memorable unboxing experience. Ideal for subscription boxes and e-commerce.",
    image: PRODUCT_IMAGES.customPackaging,
    features: ["Self-locking design", "Double-sided printing", "No tape required", "Highly durable"],
    specs: [{ label: "Material", value: "E-Flute Corrugated" }, { label: "Print", value: "Offset / Digital" }],
    priceInfo: { amount: "₹32.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 200,
    sizes: [{ name: "Standard", desc: "20 x 15 x 8 cm" }, { name: "Large", desc: "30 x 25 x 10 cm" }],
    materials: [{ name: "Brown Kraft", desc: "Rustic" }, { name: "White Coated", desc: "Vibrant Print" }]
  },
  {
    slug: "thermacol-boxes",
    name: "Thermacol Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Excellent insulation.",
    description: "Expanded polystyrene (EPS) boxes for temperature-sensitive goods, food delivery, and pharmaceuticals.",
    image: PRODUCT_IMAGES.customPackaging,
    features: ["Superior thermal insulation", "Lightweight & protective", "Shock absorption", "Waterproof"],
    specs: [{ label: "Material", value: "EPS (Expanded Polystyrene)" }, { label: "Density", value: "15-25 Density" }],
    priceInfo: { amount: "₹35.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "Small", desc: "25 x 20 x 15 cm" }, { name: "Large", desc: "55 x 40 x 30 cm" }],
    materials: [{ name: "15 Density", desc: "Standard" }, { name: "20 Density", desc: "Premium" }]
  },
  {
    slug: "cake-boxes",
    name: "Cake Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Beautifully crafted.",
    description: "Food-grade bakery boxes with window options to keep your cakes secure and presentable.",
    image: PRODUCT_IMAGES.customPackaging,
    features: ["Food-grade SBS board", "Window cut option", "Grease resistant", "Easy assembly"],
    specs: [{ label: "Material", value: "SBS Board" }, { label: "Window", value: "PET Film" }],
    priceInfo: { amount: "₹22.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "6 inch", desc: "15 x 15 x 12 cm" }, { name: "10 inch", desc: "25 x 25 x 12 cm" }],
    materials: [{ name: "White SBS", desc: "Standard" }, { name: "Kraft", desc: "Natural" }]
  },
  {
    slug: "sweet-boxes",
    name: "Sweet Boxes",
    parentCategory: "boxes",
    parentLabel: "Boxes",
    tagline: "Tradition in every box.",
    description: "Premium decorative boxes for traditional sweets, perfect for gifting and festivals.",
    image: PRODUCT_IMAGES.customPackaging,
    features: ["Partition inserts available", "Food-safe coating", "Festive designs", "Foil stamping"],
    specs: [{ label: "Material", value: "Premium Board" }, { label: "Insert", value: "Partition / Tray" }],
    priceInfo: { amount: "₹28.00", unit: "Pcs", subtext: "(Est. of GST)" },
    minOrder: 100,
    sizes: [{ name: "250g", desc: "15 x 12 x 4 cm" }, { name: "1kg", desc: "28 x 22 x 6 cm" }],
    materials: [{ name: "Kraft Board", desc: "Natural" }, { name: "Gold Foil Board", desc: "Premium" }]
  }
];

export const ALL_PRODUCTS = [...bagsByMaterial, ...bagsByIndustry, ...boxes];

/**
 * The product taxonomy. Navigation, collection pages, the footer and the
 * sitemap are all generated from this — never hand-typed — so a slug can only
 * ever exist in one place.
 */
export type CategorySlug = "bags-by-material" | "bags-by-industry" | "boxes";

export interface Category {
  slug: CategorySlug;
  label: string;
  blurb: string;
  items: ProductItem[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "bags-by-material",
    label: "Bags by Material",
    blurb: "Explore our collection of packaging bags categorized by material, including paper, jute, cotton and more.",
    items: bagsByMaterial,
  },
  {
    slug: "bags-by-industry",
    label: "Bags by Industry",
    blurb: "Packaging bags tailored to the demands of specific industries, from e-commerce to agriculture.",
    items: bagsByIndustry,
  },
  {
    slug: "boxes",
    label: "Boxes",
    blurb: "Custom boxes including corrugated, rigid, mailer, thermacol, cake and sweet boxes.",
    items: boxes,
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/**
 * Look a product up by slug. Pass `category` to scope the lookup — without it
 * `/boxes/paper-bags` would resolve and render a bag under the Boxes breadcrumb.
 */
export function getProductBySlug(
  slug: string,
  category?: CategorySlug
): ProductItem | undefined {
  const pool = category ? (getCategory(category)?.items ?? []) : ALL_PRODUCTS;
  return pool.find((p) => p.slug === slug);
}

export function productHref(product: ProductItem): string {
  return `/${product.parentCategory}/${product.slug}`;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  /**
   * Stand-in artwork. The original paths (/images/blog/blog1.jpg …) pointed at
   * files that were never committed; these are existing assets so nothing 404s.
   * Replace with real article artwork.
   */
  image: string;
  /**
   * TODO(content): per-article body copy. Until this is filled in, every
   * article renders the same placeholder text — see the article template.
   */
  body?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-custom-packaging-matters",
    title: "Why Custom Packaging Is Your Best Marketing Investment",
    excerpt:
      "In a world where first impressions drive buying decisions, custom packaging has become a brand's most powerful silent salesperson.",
    date: "2024-08-10",
    readTime: "5 min read",
    category: "Branding",
    image: PRODUCT_IMAGES.customPackaging,
  },
  {
    slug: "eco-friendly-packaging-guide",
    title: "The Complete Guide to Eco-Friendly Packaging for Indian Businesses",
    excerpt:
      "As sustainability becomes a customer expectation, Indian businesses are switching to eco-friendly packaging.",
    date: "2024-07-25",
    readTime: "7 min read",
    category: "Sustainability",
    image: PRODUCT_IMAGES.protectivePackaging,
  },
  {
    slug: "packaging-for-festive-season",
    title: "Festive Packaging: Preparing Your Business for Diwali and Beyond",
    excerpt:
      "The festive season is India's biggest sales window. Here's how to prepare your packaging.",
    date: "2024-07-10",
    readTime: "4 min read",
    category: "Seasonal",
    image: PRODUCT_IMAGES.corrugatedBoxes,
  },
];

export const productInquiryOptions = [
  "Paper Bags", "Jute Bags", "Cotton Bags", "Canvas Bags", "Non-Woven Bags", "Eco-Friendly Bags",
  "Synthetic Bags", "Tote Bags", "Cardboard Boxes – 2 Layer", "Cardboard Boxes – 3 Layer",
  "Thermacol Boxes", "Cake Boxes", "Sweet Boxes", "Other / Custom Requirement",
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
