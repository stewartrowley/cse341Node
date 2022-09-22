// require('dotenv').config()
// const { MongoClient } = require("mongodb");
// const uri = process.env.MONGO_URI;

// const client = new MongoClient(uri);
const dotenv = require("dotenv")
const {MongoClient} = require('mongodb')
dotenv.config()
const uri = process.env.MONGO_URL
const client = new MongoClient(uri)

const getdb = () => {
    if(!client) {
        throw Error('Database is not working');
    }
    return client
}

// async function main() {


//     try {
//         await client.connect();
//         await listDatabases(client);

//         await createMultipleContacts(client, [
//             {
//                 firstName: "Stewart",
//                 lastName: "Rowley",
//                 email: "row16006@byui.edu",
//                 favoriteColor: "Navy",
//                 birthday: "1998-03-14"
//             },
//             {
//                 firstName: "Emily",
//                 lastName: "Rowley",
//                 email: "emily.hepworth@gmail.com",
//                 favoriteColor: "purple",
//                 birthday: "1998-06-30",
//             },
//             {
//                 firstName: "Abigail",
//                 lastName: "Rowley",
//                 email: null,
//                 favoriteColor: "pink",
//                 birthday: "2022-01-25"
//             }
        
//         ])
//     } catch (e) {
//         console.log(error(e))
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error)

// list databases

// // creates multiple documents
// async function createMultipleContacts(client, contactInfo) {
//     const result = await client.db("nodePract").collection("contacts").insertMany(contactInfo)
//     console.log(`${result.insertedCount} new listings created with the following id (s):`)
//     console.log(result.insertedIds)
// }

module.exports = {getdb}