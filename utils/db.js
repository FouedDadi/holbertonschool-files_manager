import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const PORT = process.env.DB_PORT || 27017;
    const HOST = process.env.DB_HOST || 'localhost';
    const DB = process.env.DB_DATABASE || 'files_manager';
    const URL = `mongodb://${HOST}:${PORT}`;
    MongoClient.connect(
      URL,
      { useUnifiedTopology: true },
      function clconnect(err, usr) {
        if (err) throw console.error(err);
        this.database = usr.db(DB);
      },
    );
  }

  isAlive() {
    return !!this.database;
  }

  async nbUsers() {
    const usrs = await this.database.collection('users').countDocuments();
    return usrs;
  }

  async nbFiles() {
    const files = await this.database.collection('files').countDocuments();
    return files;
  }
}
const dbClient = new DBClient();
module.exports = dbClient;
