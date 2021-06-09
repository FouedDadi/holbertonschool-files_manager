import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

class AppController {
  static getStatus(request, result) {
    const stt = {
      Redis: RedisClient.isAlive(),
      DB: DBClient.isAlive(),
    };
    return result.status(200).send(stt);
  }

  static async getStats(request, result) {
    const sts = {
      usrs: await DBClient.nbUsers(),
      files: await DBClient.nbFiles(),
    };
    return result.status(200).send(sts);
  }
}

module.exports = AppController;
