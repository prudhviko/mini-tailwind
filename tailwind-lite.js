import { generateCSS } from "./src/generate.js";
import fs from "fs";
import path from "path";

const css = generateCSS();
fs.writeFileSync(path.resolve("dist/mini-tailwind.css"), css);
console.log("✅ mini-tailwind.css generated!");
