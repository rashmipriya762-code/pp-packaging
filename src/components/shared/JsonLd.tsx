/**
 * Renders a JSON-LD <script>. The payload is always built by a helper in
 * src/lib/seo.ts from static site data, never from request input.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
