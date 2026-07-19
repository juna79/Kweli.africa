// Renders a JSON-LD <script> tag — invisible to visitors, read by search
// engines. No visual output, so this is safe to add anywhere without
// touching layout, typography, or design.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
