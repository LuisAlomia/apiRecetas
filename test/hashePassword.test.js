const { it, describe } = require("mocha");
const { assert } = require("chai");
const { hashedPassword } = require("../src/utils/hashedPassword");

describe("passward hashed", () => {
  it("recibe un passward y regresa el passward hashed", (done) => {
    const passwardHash = hashedPassword("root");
    console.log(passwardHash);
    assert.typeOf(passwardHash, "string");
    done();
  });
});
