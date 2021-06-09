import dbClient from '../utils/db';
import redisClient from '../utils/redis';

export const getStatus = (req, res) => {
  const Redis = redisClient.isAlive();
  const DB = dbClient.isAlive();
  res.status(200).send({ Redis, DB });
};

export const getStats = async (req, res) => {
  const usrs = await dbClient.nbUsers();
  const fls = await dbClient.nbFiles();
  res.status(200).send({ usrs, fls });
};
