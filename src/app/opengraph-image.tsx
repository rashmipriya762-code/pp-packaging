import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const alt = `${siteConfig.name} — Custom Bags & Boxes Manufacturer, Mumbai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at the correct 1200x630. The previous OG image was a 1254x1254
 * square declared as 1200x630, so social cards cropped it badly.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#16323D",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#D9A44F",
            marginBottom: 32,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 900, display: "flex" }}>
          Packaging that protects. Impressions that last.
        </div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.7)", marginTop: 40 }}>
          Custom bags &amp; boxes manufacturer · Mumbai, India
        </div>
      </div>
    ),
    size
  );
}
