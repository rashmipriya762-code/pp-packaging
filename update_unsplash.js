const fs = require('fs');
const path = require('path');

function replaceUnsplash(filePath, replaceStr) {
  if (!fs.existsSync(filePath)) return;
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes('unsplash.com')) return;
  
  if (!c.includes('PRODUCT_IMAGES')) {
    c = 'import { PRODUCT_IMAGES } from "@/lib/product-images";\n' + c;
  }
  
  // Replace object properties: image: "https..." -> image: PRODUCT_IMAGES.xxx
  c = c.replace(/image:\s*"https:\/\/images\.unsplash\.com[^"]+"/g, `image: ${replaceStr}`);
  
  // Replace JSX props: image="https..." -> image={PRODUCT_IMAGES.xxx}
  c = c.replace(/image="https:\/\/images\.unsplash\.com[^"]+"/g, `image={${replaceStr}}`);
  
  fs.writeFileSync(filePath, c);
  console.log('Updated ' + filePath);
}

replaceUnsplash('src/app/boxes/page.tsx', 'PRODUCT_IMAGES.corrugatedBoxes');
replaceUnsplash('src/app/bags-by-material/page.tsx', 'PRODUCT_IMAGES.flexiblePackaging');
replaceUnsplash('src/app/bags-by-industry/page.tsx', 'PRODUCT_IMAGES.flexiblePackaging');
replaceUnsplash('src/components/blog/BlogGrid.tsx', 'PRODUCT_IMAGES.customPackaging');
replaceUnsplash('src/components/blog/BlogSidebar.tsx', 'PRODUCT_IMAGES.customPackaging');
replaceUnsplash('src/lib/content.ts', 'PRODUCT_IMAGES.customPackaging');
