const { login } = require("./app");

const status = login("admin", "secret");
console.log("Expected 200, got", status);

if (status !== 200) {
  console.error("TEST FAILED");
  process.exit(1);
}
console.log("TEST PASSED");
