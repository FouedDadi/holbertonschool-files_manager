import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

export const getStatus = function gstt(request, result) {
  const Redis = RedisClient.isAlive();
  const DB = DBClient.isAlive();
  result.send({ Redis, DB });
};

export const getStats = async function gsts(request, result) {
  const usrs = await DBClient.nbUsers();
  const fls = await DBClient.nbFiles();
  result.send({ usrs, fls });
};
