const yaml = require("js-yaml");
const fs = require("fs");

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync("./parser/tables.yaml", "utf8"));
  fs.writeFileSync("./src/assets/tables.json", JSON.stringify(doc));
} catch (e) {
  console.log(e);
}
