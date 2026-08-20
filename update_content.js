const fs = require('fs');
let content = fs.readFileSync('src/lib/content.ts', 'utf8');

if (!content.includes('PRODUCT_IMAGES')) {
  content = 'import { PRODUCT_IMAGES } from "@/lib/product-images";\n' + content;
}

// Replace images for specific slugs
const replacements = [
  { slug: "corrugated-boxes", img: "PRODUCT_IMAGES.corrugatedBoxes" },
  { slug: "rigid-boxes", img: "PRODUCT_IMAGES.rigidBoxes" }
];

for (const {slug, img} of replacements) {
  // Regex to find the object containing slug: "slug" and replace its image string
  // It's easier to just match the slug line and the image line.
  // Actually, we can just parse it with a simpler regex or replace based on slug:
  const regex = new RegExp(`slug:\\s*["']${slug}["'][\\s\\S]*?image:\\s*["'][^"']+["']`, "g");
  content = content.replace(regex, (match) => {
    return match.replace(/image:\s*["'][^"']+["']/, `image: ${img}`);
  });
}

// Write back
fs.writeFileSync('src/lib/content.ts', content);
console.log("content.ts updated.");
