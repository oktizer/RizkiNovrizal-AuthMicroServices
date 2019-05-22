'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let crudService = TOOLS.SERVICES.CRUDService;
    let jwtService = TOOLS.SERVICES.JwtService;
    let joi = MODULES.JOI;
    let axios = MODULES.AXIOS;
    let crypto = MODULES.CRYPTO;
    return {
        /**
         * Auth controller for paseto
         * @param param {Object} An object that should contains
         * @param callback {Function} Callback function
         */
        generateToken: (params) => {
            return new Promise((resolve) => {
                let key = crypto.randomBytes(20).toString('hex');
                let token = jwtService.generateToken(payload);
                resolve({token: token,key:key});
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


    };
};
