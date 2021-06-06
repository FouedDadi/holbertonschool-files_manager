import redis from 'redis';

const { promisify } = require('util');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.get = promisify(this.client.get).bind(this.client);
    this.client.on('error', (error) => {
      console.error(error);
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(K) {
    return this.get(K, (err, response) => response);
  }

  async set(K, V, D) {
    this.client.setex(K, D, V);
  }

  async del(K) {
    this.client.del(K);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;
