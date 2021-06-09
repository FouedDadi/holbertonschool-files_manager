import dbClient from '../utils/db';
import redisClient from '../utils/redis';

const getStatus = function sts(req, res) {
  const redis = redisClient.isAlive();
  const db = dbClient.isAlive();
  res.status(200).send({ redis, db });
};

const getStats = async function stt(req, res) {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();
  res.status(200).send({ users, files });
};
export default { getStatus, getStats };
