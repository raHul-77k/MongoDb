const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://mad77k:77265262@cluster1.fgvtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw 'No Database Found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
