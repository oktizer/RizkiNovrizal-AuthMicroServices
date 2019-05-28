'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    const jwtService = TOOLS.SERVICES.JwtService;
    const joi = MODULES.JOI;
    const crypto = MODULES.CRYPTO;
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
        }

    };
};
