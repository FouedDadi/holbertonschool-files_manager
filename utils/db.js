import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const PORT = process.env.DB_PORT || 27017;
    const HOST = process.env.DB_HOST || 'localhost';
    const DB = process.env.DB_DATABASE || 'files_manager';
    MongoClient.connect(
      `mongodb://${HOST}:${PORT}`,
      { useUnifiedTopology: true },
      (err, usr) => {
        if (err) throw console.error(err);
        this.database = usr.db(DB);
      }
    );
  }

  isAlive() {
    return !!this.database;
  }

  async nbUsers() {
    this.usrs = this.database.collection('users');
    return this.usrs.countDocuments();
  }

  async nbFiles() {
    this.files = this.database.collection('files');
    return this.files.countDocuments();
  }
}
const dbClient = new DBClient();
module.exports = dbClient;
