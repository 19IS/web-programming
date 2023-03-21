import dotenv from 'dotenv'
import MongoClient from 'mongodb'
import mongoose from 'mongoose';

// const MongoClient = require("mongodb").MongoClient;
const env = dotenv.config();


const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`

const mongoClient = new MongoClient(url)

const users = [{name: "Bob", age: 35} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];


async function StartApp() {
    try {
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
}

async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        // const result = await collection.insertMany(users);
        // const results = await collection.find().toArray();
        // const results = await collection.find({name: "Tom"}).toArray();
        // const results = await collection.find({name: "Tom", age: 28}).toArray();
        // const results = await collection.findOne({name: "Tom"});
        // const results = await collection.deleteOne({name: "Bob"});
        // const results = await collection.deleteMany({name: "Tom"});
        // const results = await collection.findOneAndDelete({age: 21});
        // const results = await collection.drop();
        // const results = await collection.findOneAndUpdate({age: 21}, { $set: {age: 25}});
        // const results = await collection.findOneAndUpdate({name: "Bob"}, { $set: {name: "Sam"}}, { returnDocument: "after" });
        // const results = await collection.updateMany({name: "Bob"}, { $set: {name: "Sam"}});
        const results = await collection.updateOne({name: "Tom"}, { $set: {name: "Tom Junior", age:33}});

        console.log(results);
         
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);
