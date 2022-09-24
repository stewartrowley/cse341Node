const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const findAllContacts = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db('nodePract')
    .collection('contacts')
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const findContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('nodePract')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { findAllContacts, findContact};
