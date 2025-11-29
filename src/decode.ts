type Token = { type: string; value?: string };

function isWhitespace(ch?: string) {
  return ch === " " || ch === "\n" || ch === "\t" || ch === "\r";
}

export function decode(input: string): any {
  let i = 0;
  function peek() { return input[i]; }
  function next() { return input[i++]; }

  function parseValue(): any {
    while (isWhitespace(peek())) next();
    const ch = peek();
    if (ch === "{") return parseObject();
    if (ch === "[") return parseArray();
    if (ch === '"') return parseString();
    // parse literal: null, true, false, number, or unquoted token (for keys or simple values)
    let token = "";
    while (i < input.length) {
      const c = peek();
      if (c === ";" || c === "}" || c === "]" || c === "=") break;
      if (c === "\\") {
        next(); // consume backslash
        token += next() ?? "";
        continue;
      }
      token += next();
    }
    token = token.trim();
    if (token === "null") return null;
    if (token === "true") return true;
    if (token === "false") return false;
    if (!isNaN(Number(token)) && token !== "") return Number(token);
    return token;
  }

  function parseString(): string {
    let out = "";
    next(); // consume opening "
    while (i < input.length) {
      const c = next();
      if (c === undefined) break;
      if (c === '"') break;
      if (c === "\\") {
        const nxt = next();
        out += nxt ?? "";
      } else {
        out += c;
      }
    }
    return out;
  }

  function parseArray(): any[] {
    const arr: any[] = [];
    next(); // consume [
    while (true) {
      while (isWhitespace(peek())) next();
      if (peek() === "]") {
        next();
        break;
      }
      const v = parseValue();
      arr.push(v);
      while (isWhitespace(peek())) next();
      if (peek() === ";") { next(); continue; }
      if (peek() === "]") { next(); break; }
      // unexpected - but continue
    }
    return arr;
  }

  function parseObject(): Record<string, any> {
    const obj: Record<string, any> = {};
    next(); // consume {
    while (true) {
      while (isWhitespace(peek())) next();
      if (peek() === "}") { next(); break; }
      // parse key (unquoted allowed, support escapes)
      let key = "";
      while (i < input.length) {
        const c = peek();
        if (c === "=") { next(); break; }
        if (c === "\\" ) {
          next(); // consume backslash
          key += next() ?? "";
          continue;
        }
        if (c === " " || c === "\n" || c === "\t") { next(); continue; }
        key += next();
      }
      key = key.trim();
      const value = parseValue();
      obj[key] = value;
      while (isWhitespace(peek())) next();
      if (peek() === ";") { next(); continue; }
      if (peek() === "}") { next(); break; }
    }
    return obj;
  }

  return parseValue();
}
