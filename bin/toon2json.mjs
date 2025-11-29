#!/usr/bin/env node
import fs from "fs";
import { encode, decode } from "../dist/index.js";

const argv = process.argv.slice(2);
const cmd = argv[0];

function readFromStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", chunk => data += chunk);
    process.stdin.on("end", () => resolve(data));
  });
}

(async () => {
  if (!cmd) {
    console.log("Usage: toon2json encode|decode <string|->");
    process.exit(1);
  }
  const arg = argv[1];
  let input = arg;
  if (!arg || arg === "-") {
    input = await readFromStdin();
  }

  if (cmd === "encode") {
    try {
      const obj = JSON.parse(input);
      console.log(encode(obj));
    } catch (err) {
      console.error("Invalid JSON input:", err.message);
      process.exit(2);
    }
  } else if (cmd === "decode") {
    try {
      const obj = decode(input.trim());
      console.log(JSON.stringify(obj, null, 2));
    } catch (err) {
      console.error("Invalid TOON input:", err.message);
      process.exit(2);
    }
  } else {
    console.error("Unknown command:", cmd);
  }
})();
