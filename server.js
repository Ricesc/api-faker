const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

// Definir la clase User
class User {
    constructor() {
        this._id = faker.database.mongodbObjectId();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Definir la clase Company
class Company {
    constructor() {
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        };
    }
}

// Rutas de la API
app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ user: newUser, company: newCompany });
});

// Escuchar en el puerto
app.listen(port, () => console.log(`Listening on port: ${port}`));
