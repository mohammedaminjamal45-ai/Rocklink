const fs = require("fs");

let content = fs.readFileSync("app/page.tsx", "utf8");

const before = `              </ul>
              
                href="#waitlist"`;

const after = `              </ul>
              
                href="#waitlist"`;

if (content.includes(before)) {
  content = content.replace(before, after);
  fs.writeFileSync("app/page.tsx", content);
  console.log("Fixed - missing <a tag restored.");
} else {
  console.log("Pattern not found - showing lines 138-150 instead:");
  const lines = content.split("\n");
  console.log(lines.slice(137, 150).join("\n"));
}
