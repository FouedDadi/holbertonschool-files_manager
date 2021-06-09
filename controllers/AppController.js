import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus(request, result) {
    const Redis = redisClient.isAlive();
    const DB = dbClient.isAlive();
    result.status(200).send({ Redis, DB });
  }
  static async getStats(request, result) {
    const usrs = await dbClient.nbUsers();
    const fls = await dbClient.nbFiles();
    result.status(200).send({ usrs, fls });
  }
}

export default AppController;
