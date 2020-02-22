// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var ObjID = new ObjectID();
// console.log(ObjID);
const test = require('assert');
const url = "mongodb://localhost:27017"
const dbName = 'TodoApp'
MongoClient.connect(url,(err,client)=>{
    var adminDb = client.db(dbName).admin();
    adminDb.listDatabases(function(err,dbs){
        test.equal(null, err);
        test.ok(dbs.databases.length > 0);
         console.log(dbs);
    })
// if(err){
//     return console.log('unable to connect to mongodb server');
// }
// console.log('Connected to Mongo db server');
// db.collection('todos').insertOne({
//     text:'something to do',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops));
// })
// db.collection('Users').insertOne({
//     name:'nisha',
//     age:25,
//     location:'kota'
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert todo',err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// })
client.close();
});