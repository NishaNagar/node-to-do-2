const {MongoClient,ObjectID} = require('mongodb');
const dbname = 'TodoApp';
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to server');
    }
   console.log('Connected to mongodb server');
   var db = client.db(dbname);
//   db.collection('Todos').find({_id:new ObjectID('5e3faf31206519730ed5ec39')}).toArray().then((docs)=>{
//         // console.log(docs)
//         console.log(JSON.stringify(docs,undefined,2));
//     },(err)=>{
//         console.log('Unable to fetch todo',err);
//     });
// db.collection('Todos').find().count().then((count)=>{
//      console.log(`Todos count:${count}`);
// },(err)=>{
//     console.log('Unable to fetch todo',err);
// });
db.collection('Users').find({name:"neetu"}).toArray().then((users)=>{
    console.log(JSON.stringify(users,undefined,2));
},(err)=>{
   console.log('Unable to fetch todo',err);
});
    // console.log(textName);
    client.close();
})