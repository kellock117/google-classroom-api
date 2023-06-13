import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKEN_PATH = path.join(__dirname, "token.json");
const CREDENTIALS_PATH = path.join(__dirname, "credentials.json");
console.log("🚀 ~ file: path.js:8 ~ CREDENTIALS_PATH:", CREDENTIALS_PATH);

const content = await fs.readFile(CREDENTIALS_PATH, "utf-8", (error, data) => {
  return JSON.parse(data);
});

console.log(content);
