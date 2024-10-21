const { faker } = require('@faker-js/faker');

function generateUser() {
    const username = faker.internet.userName();
    const password = faker.internet.password();
}

module.exports = { generateUser };