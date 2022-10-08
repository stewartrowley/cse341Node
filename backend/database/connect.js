const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const contactInfo = [
  {
    firstName: 'Stewart',
    lastName: 'Rowley',
    email: 'row16006@byui.edu',
    favoriteColor: 'Navy',
    birthday: '1998-03-14',
  },
  {
    firstName: 'Emily',
    lastName: 'Rowley',
    email: 'emily.hepworth@gmail.com',
    favoriteColor: 'purple',
    birthday: '1998-06-30',
  },
  {
    firstName: 'Abigail',
    lastName: 'Rowley',
    email: null,
    favoriteColor: 'pink',
    birthday: '2022-01-25',
  },
];

const initDb = (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
      // async function createMultipleListings(client, newListings){
      //   const result = await client.db("nodePract").collection("contacts").insertMany(newListings);
    
      //   console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
      //   console.log(result.insertedIds);       
      // }

      // createMultipleListings(_db, contactInfo)
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
