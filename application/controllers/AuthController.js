'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    const jwtService = TOOLS.SERVICES.JwtService;
    const joi = MODULES.JOI;
    const crypto = MODULES.CRYPTO;
    const rabbitMQService = TOOLS.SERVICES.RabbitMQService;

    let logger = TOOLS.LOG;
    return {
        /**
         * Controller for generating API token
         * @param param {Object} An object that should contains
         * @param callback {Function} Callback function
         */
        generateToken: (params) => {
            return new Promise((resolve) => {
                let key = crypto.randomBytes(20).toString('hex');
                let token = jwtService.generateToken(params);
                resolve({token: token, key: key, expire: CONSTANTS.VARIABLE.REDIS_EXPIRE});
            });
        },

        /**
         Creator: @rizki
         Description: controller for joi validation
         Updater @
         last_change: 11-03-2019
         Description_update: -
         */
        validateInputParams: (schema, inputBody) => {
            return new Promise((resolve, reject) => {
                joi.validate(inputBody, schema, {allowUnknown: true}, (err, value) => {
                    err ? reject(err) : resolve(value);
                });
            });
        },

        /**
         * publish message Rabbit MQ(AMQP)
         * @param params {Object} Parameter object
         * @param callback {Function} Callback function
         */
        publisherMessage: function (params, callback) {
            rabbitMQService.startPublisher('auth_token', 'fanout', JSON.stringify(params), function (err, result) {
                if (err) {
                    err.message = 'Inter-services communication time out, failed send message to other services';
                    logger.error(err);
                    callback(err, null);
                } else {
                    logger.info('Successfully send message');
                    callback(null, result);
                }
            });
        }
    };
};
