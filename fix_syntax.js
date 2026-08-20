const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.ts') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync('src');

files.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (c.includes('src=PRODUCT_IMAGES.')) {
    c = c.replace(/src=(PRODUCT_IMAGES\.[a-zA-Z]+)/g, 'src={$1}');
    changed = true;
  }
  
  if (c.includes('image=PRODUCT_IMAGES.')) {
    c = c.replace(/image=(PRODUCT_IMAGES\.[a-zA-Z]+)/g, 'image={$1}');
    changed = true;
  }
  
  if (c.startsWith('import { PRODUCT_IMAGES }') && c.includes('"use client";')) {
    c = c.replace('import { PRODUCT_IMAGES } from "@/lib/product-images";\n"use client";\n', '"use client";\nimport { PRODUCT_IMAGES } from "@/lib/product-images";\n');
    // Also try without newline on end just in case
    c = c.replace('import { PRODUCT_IMAGES } from "@/lib/product-images";\n"use client";', '"use client";\nimport { PRODUCT_IMAGES } from "@/lib/product-images";');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, c);
    console.log('Fixed ' + file);
  }
});
