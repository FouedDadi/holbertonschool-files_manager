import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

export const getStatus = function sts(request, result) {
  const Redis = RedisClient.isAlive();
  const DB = DBClient.isAlive();

  result.status(200).send({ Redis, DB });
};

export const getStats = async function stt(request, result) {
  const usrs = await DBClient.nbusers();
  const fls = await DBClient.nbFiles();

  result.status(200).send({ usrs, fls });
};
