const { version } = require("./package.json");
const expectedVersion = "0.1.0";

if (version !== expectedVersion) {
  console.error(
    `Error: Current version (${version}) does not match expected version (${expectedVersion})`
  );
  process.exit(1);
}
