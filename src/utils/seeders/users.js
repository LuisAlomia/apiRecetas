const uuid = require("uuid");
const { faker } = require("@faker-js/faker");

const Users = require("../../models/users.model");

for (let i = 0; i < 10; i++) {
  Users.create({
    id: uuid.v4(),
    username: faker.name.firstName(),
    email: faker.internet.email(),
    password: "root",
  });
}
Users.create({
  id: "39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9",
  username: "admin",
  email: "admin@admin.com",
  password: "root",
});
