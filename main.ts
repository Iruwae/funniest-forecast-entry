import * as fs from "node:fs";
import * as path from "node:path";

const forecast =
  "Cloudgap: sunny intervals today, 21°C, except over the town square, where it has rained continuously since 1987.";

const target = "/output/entry.txt";

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, forecast + "\n", "utf8");
