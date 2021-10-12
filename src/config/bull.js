const Queue = require('bull');
const { redisConfiguration } = require('./redis');

const redisConfig = {
  redis: {
    host: redisConfiguration.host,
    port: redisConfiguration.port,
  },
};

const reminderQueue = new Queue('reminder', redisConfig);

module.exports = {
  reminderQueue,
};
