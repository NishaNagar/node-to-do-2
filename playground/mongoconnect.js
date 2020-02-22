const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb://localhost:27017';

// Database Name

const dbName = 'test';

// Connect using MongoClient

MongoClient.connect(url, function(err, client) {

// Create a collection we want to drop later

const col = client.db(dbName).collection('createIndexExample1');

// Show that duplicate records got dropped

col.find({}).toArray(function(err, items) {

test.equal(null, err);

test.equal(4, items.length);

client.close();

});

});