import { safeStringify } from "./helpers";

function escapeTokenChars(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/=/g, "\\=").replace(/;/g, "\\;");
}

function encodeValue(value: any): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "[" + value.map(encodeValue).join(";") + "]";
  if (typeof value === "object") {
    const parts: string[] = [];
    for (const key of Object.keys(value)) {
      const k = escapeTokenChars(String(key));
      const v = encodeValue(value[key]);
      parts.push(`${k}=${v}`);
    }
    return "{" + parts.join(";") + "}";
  }
  if (typeof value === "string") {
    // wrap strings in quotes and escape inner quotes/backslashes
    return `"${escapeTokenChars(value)}"`;
  }
  // numbers / booleans
  return String(value);
}

export function encode(obj: any): string {
  // input expected JSON-serializable
  return encodeValue(obj);
}
