
const app = require('express').Router();
const contacts = require("./../models/contactModels");

console.log(contacts.manyContacts());
app.post("/", contacts.createContacts);
app.get("/", contacts.manyContacts);




module.exports = app;
