const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "..", "clang-format-doc.html");
const outputPath = path.join(__dirname, "..", "clang-format-options-data.js");

const html = fs.readFileSync(sourcePath, "utf8");
const regex =
  /<dt><strong>([^<]+)<\/strong> \(([\s\S]*?)\)([\s\S]*?)<\/dt><dd><p>([\s\S]*?)<\/p>/g;

const entities = new Map([
  ["&#8217;", "'"],
  ["&#8211;", "-"],
  ["&#8212;", "-"],
  ["&#8220;", '"'],
  ["&#8221;", '"'],
  ["&#160;", " "],
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&amp;", "&"],
  ["&quot;", '"'],
  ["&#39;", "'"],
]);

function stripTags(value) {
  let text = value.replace(/<[^>]+>/g, " ");
  for (const [entity, replacement] of entities) {
    text = text.split(entity).join(replacement);
  }
  return text.replace(/\s+/g, " ").trim();
}

const options = [];
let match;

while ((match = regex.exec(html))) {
  const name = match[1];
  const type = stripTags(match[2]);
  const extra = stripTags(match[3]);
  const description = stripTags(match[4]);
  const versionMatch = extra.match(/clang-format\s+([0-9.]+|git)/i);

  options.push({
    name,
    type,
    description,
    version: versionMatch ? versionMatch[1] : null,
    deprecated: /\bdeprecated\b/i.test(type) || /\bdeprecated\b/i.test(extra) || /\bdeprecated\b/i.test(description),
  });
}

const output = `window.CLANG_FORMAT_OPTIONS = ${JSON.stringify(options, null, 2)};\n`;
fs.writeFileSync(outputPath, output, "utf8");
console.log(`Generated ${options.length} options -> ${path.basename(outputPath)}`);
