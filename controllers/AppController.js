import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export const getStatus = (request, result) => {
  const redis = redisClient.isAlive();
  const db = dbClient.isAlive();

  result.status(200).send({ redis, db });
};

export const getStats = async (request, result) => {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();

  result.status(200).send({ users, files });
};
