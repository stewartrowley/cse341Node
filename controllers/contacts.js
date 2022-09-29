const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const findAllContacts = async (req, res, next) => {
   const result = await mongodb
      .getDb()
      .db('nodePract')
      .collection('contacts')
      .find();
   result.toArray().then((items) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(items);
   });
};

const findContact = async (req, res, next) => {
   const userId = new ObjectId(req.params.id);
   const result = await mongodb
      .getDb()
      .db('nodePract')
      .collection('contacts')
      .find({ _id: userId });
   result.toArray().then((items) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(items[0]);
   });
};

const createContacts = async (req, res) => {
   const contacts = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
   };

   const response = await mongodb
      .getDb()
      .db('nodePract')
      .collection('contacts')
      .insertOne(contacts);

   if (response.acknowledged) {
      res.status(201).json(response);
   } else {
      res.status(500).json(
         response.error || 'Some error occurred while creating the contact.'
      );
   }
};

const updateContacts = async (req, res, next) => {
   const userId = new ObjectId(req.params.id);

   const updateContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
   };

   const response = await mongodb
      .getDb()
      .db('nodePract')
      .collection('contacts')
      .replaceOne({ _id: userId }, updateContact );

   if (response.modifiedCount > 0) {
      res.status(204).send();
   } else {
      res.status(500).json(response.error || 'Some error occured while updating the contact information.')
   }
};

const deleteContact = async (req, res, next) => {
   const userId = new ObjectId(req.params.id);

   console.log(userId)

   const response = await mongodb
      .getDb()
      .db('nodePract')
      .collection('contacts')
      .deleteOne({ _id: userId }, true);

   console.log(response)

   if(response.deletedCount > 0) {
      res.status(204).send();
   } else {
      res.status(500).json(response.error || 'Some error occured while deleting the contact information.')
   }
};

module.exports = {
   findAllContacts,
   findContact,
   createContacts,
   updateContacts,
   deleteContact,
};
