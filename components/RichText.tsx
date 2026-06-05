/**
 * Render teks dengan dukungan markdown ringan:
 * - **teks** → highlight toska (bold)
 * - *teks*   → italic
 * - \n\n      → pemisah paragraf
 */

type Segment = { type: "bold" | "italic" | "text"; value: string };

function parseInline(text: string): Segment[] {
  const segments: Segment[] = [];
  // Tokenise: bold dulu (**...**), lalu italic (*...*)
  const regex = /\*\*(.*?)\*\*|\*(.*?)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      segments.push({ type: "text", value: text.slice(last, match.index) });
    }
    if (match[1] !== undefined) {
      segments.push({ type: "bold", value: match[1] });
    } else if (match[2] !== undefined) {
      segments.push({ type: "italic", value: match[2] });
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    segments.push({ type: "text", value: text.slice(last) });
  }
  return segments;
}

function InlineContent({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((seg, i) => {
        if (seg.type === "bold")
          return (
            <span key={i} className="rounded bg-teal-soft px-1 font-bold text-teal-deep">
              {seg.value}
            </span>
          );
        if (seg.type === "italic")
          return <em key={i}>{seg.value}</em>;
        return <span key={i}>{seg.value}</span>;
      })}
    </>
  );
}

export function RichText({
  text,
  className = "leading-relaxed text-slate-700",
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split("\n\n").map((para, i) => (
        <p key={i} className={`mb-3 last:mb-0 ${className}`}>
          <InlineContent text={para} />
        </p>
      ))}
    </>
  );
}
