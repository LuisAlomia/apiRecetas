const { it, describe } = require("mocha");
const { assert } = require("chai");
//const { getAll } = require("../src/users/user.controllers");
const { getAll } = require("../src/users/user.services");

describe("Test de controladores de usuario", () => {
  it("Deberia retornar todos los usuario", (done) => {
    getAll()
      .then((resp) => {
        assert.typeOf(resp, "array");
        console.log(resp);
      })
      .catch((err) => console.log(err));
    done();
  });
});
