const { json } = require("express");
const mongodb = require("../mongodb");
const ObjectId = require("mongodb").ObjectId;

const createContacts = async () => {
  const contactInfo = [
    {
      firstName: "Stewart",
      lastName: "Rowley",
      email: "row16006@byui.edu",
      favoriteColor: "Navy",
      birthday: "1998-03-14",
    },
    {
      firstName: "Emily",
      lastName: "Rowley",
      email: "emily.hepworth@gmail.com",
      favoriteColor: "purple",
      birthday: "1998-06-30",
    },
    {
      firstName: "Abigail",
      lastName: "Rowley",
      email: null,
      favoriteColor: "pink",
      birthday: "2022-01-25",
    },
  ];
  const result = await mongodb
    .getdb()
    .db("nodePract")
    .collection("contacts")
    .insertMany(contactInfo);
  console.log(
    `${result.insertedCount} new listings created with the following id (s):`
  );
  console.log(result.insertedIds);
};

createContacts();

const manyContacts = async (req, res, next) => {
  const result = await mongodb
    .getdb()
    .db("nodePract")
    .collection("contacts")
    .find();
  result.toArray().then((item) => {

    console.log(item)
    // res.status(200).json(item)
    
    // res.setHeader('Content-Type', 'application/json');
    // res.status(200).json(lists);
  });

}

module.exports = { createContacts, manyContacts };
