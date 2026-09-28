import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const sourceExtensions = new Set([".css", ".js", ".jsx", ".mdx", ".ts", ".tsx"]);
const problems = [];
const checked = new Set();

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

function checkImage(path, source) {
  const label = relative(root, path);
  if (!existsSync(path)) {
    problems.push(`${source}: missing ${label}`);
    return;
  }
  if (statSync(path).size === 0) {
    problems.push(`${source}: empty ${label}`);
    return;
  }
  if (checked.has(path)) return;
  checked.add(path);
  const header = readFileSync(path).subarray(0, 16);
  const extension = extname(path).toLowerCase();
  const valid = extension === ".webp" ? header.toString("ascii", 0, 4) === "RIFF" && header.toString("ascii", 8, 12) === "WEBP"
    : extension === ".png" ? header.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    : extension === ".jpg" || extension === ".jpeg" ? header[0] === 0xff && header[1] === 0xd8
    : extension === ".gif" ? header.toString("ascii", 0, 3) === "GIF"
    : extension === ".avif" ? header.toString("ascii", 4, 8) === "ftyp"
    : readFileSync(path, "utf8").includes("<svg");
  if (!valid) problems.push(`${source}: invalid image ${label}`);
}

for (const path of filesIn(publicDir)) {
  if (imageExtensions.has(extname(path).toLowerCase())) checkImage(path, "public asset");
}

for (const path of filesIn(join(root, "src"))) {
  if (!sourceExtensions.has(extname(path).toLowerCase())) continue;
  const content = readFileSync(path, "utf8");
  for (const match of content.matchAll(/\/(?:[\w.-]+\/)*[\w.-]+\.(?:avif|gif|jpe?g|png|svg|webp)\b/gi)) {
    const asset = match[0].slice(1);
    const publicPath = join(publicDir, asset);
    const appIconPath = join(root, "src", "app", asset);
    checkImage(!existsSync(publicPath) && existsSync(appIconPath) ? appIconPath : publicPath, relative(root, path));
  }
}

if (problems.length) {
  console.error(`Image check failed (${problems.length}):\n${problems.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Image check passed: ${checked.size} public images and all static source references.`);
}
