import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const defaultSourceDir = path.resolve(process.cwd(), "../../sourcecode");

export const sourceDir = process.env.SOURCECODE_DIR || defaultSourceDir;
export const htmlPath = path.join(sourceDir, "index.html");
export const siteUrl = pathToFileURL(htmlPath).toString();

export function readSourceFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

export function fileExists(filePath) {
  return fs.existsSync(filePath);
}

