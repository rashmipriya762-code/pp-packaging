/**
 * Crawls every internal link on the built site and fails if any does not
 * return 200. This is the guard for the class of bug where the navigation was
 * hand-typed and pointed at slugs that no page generated.
 *
 * Usage: node scripts/check-links.mjs [baseUrl]
 * With no baseUrl it boots `next start` on a free port itself.
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = Number(process.env.PORT ?? 4123);
const external = process.argv[2];
const base = external ?? `http://localhost:${PORT}`;

let server;
if (!external) {
  server = spawn(
    process.execPath,
    ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)],
    { stdio: "ignore" }
  );
  for (let i = 0; i < 60; i++) {
    try {
      await fetch(base + "/");
      break;
    } catch {
      await sleep(1000);
    }
  }
}

const seen = new Set(["/"]);
const queue = ["/"];
const failures = [];
let checked = 0;

try {
  while (queue.length) {
    const path = queue.shift();
    const res = await fetch(base + path, { redirect: "manual" });
    checked++;

    // 3xx is fine for the intentional /contact -> /clients/contact-us redirect.
    if (res.status >= 400) {
      failures.push(`${res.status}  ${path}`);
      continue;
    }
    if (res.status !== 200) continue;

    const html = await res.text();
    for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = match[1].replace(/\/$/, "") || "/";
      if (href.startsWith("/_next") || href.startsWith("/api")) continue;
      if (!seen.has(href)) {
        seen.add(href);
        queue.push(href);
      }
    }
  }
} finally {
  server?.kill();
}

if (failures.length) {
  console.error(`\n${failures.length} broken internal link(s):`);
  for (const failure of failures) console.error("  " + failure);
  process.exit(1);
}

console.log(`✓ ${checked} internal URLs, all reachable`);
