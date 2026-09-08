const { MongoClient } = require('mongodb');

let _db;

const initDb = async () => {
  if (_db) return _db;

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  _db = client.db(process.env.DB_NAME || 'contacts');
  console.log('Connected to MongoDB');
  return _db;
};

const getDb = () => {
  if (!_db) {
    throw new Error('Database not initialized');
  }
  return _db;
};

module.exports = { initDb, getDb };