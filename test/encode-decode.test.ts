import { encode, decode } from "../src/index";

describe("encode/decode basic", () => {
  test("roundtrip object", () => {
    const obj = { name: "Alice", age: 30, flags: [true, false, null] };
    const toon = encode(obj);
    const back = decode(toon);
    expect(back).toEqual(obj);
  });

  test("handles nested and escapes", () => {
    const obj = { "a=b": "x;y", nested: { v: "val=1" } };
    const toon = encode(obj);
    const back = decode(toon);
    expect(back).toEqual(obj);
  });
});
