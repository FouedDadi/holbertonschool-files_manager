import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

const getStatus = function gstt(request, result) {
  const Redis = RedisClient.isAlive();
  const DB = DBClient.isAlive();
  result.status(200).send({ Redis, DB });
};

const getStats = async function gsts(request, result) {
  const usrs = await DBClient.nbUsers();
  const fls = await DBClient.nbFiles();
  result.status(200).send({ usrs, fls });
};

module.exports = getStats;
module.exports = getStatus;
