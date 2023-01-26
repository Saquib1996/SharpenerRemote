// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'E-Com'
// const client = new MongoClient(url);

// async function getData() {

//     let result = await client.connect();
//     let db = result.db(database);
//     collection= db.collection('Products');
//     let data = await collection.find({name:'U10'}).toArray()
//     console.log(data);
// }

// getData();


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'E-Com'
const client = new MongoClient(url);

async function getData() {

    let result = await client.connect();
    let db = result.db(database);
    collection= db.collection('Products');
    let data = await collection.find({}).toArray()
    console.log(data);
}

getData();