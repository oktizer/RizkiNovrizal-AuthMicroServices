/**
 * Created by rizkinovrizal on 17/08/17.
 */


module.exports = function (TOOLS, MODULES) {
    const authController = TOOLS.CONTROLLERS.AuthController;
    const redisController = TOOLS.CONTROLLERS.RedisController;
    const joi = MODULES.JOI;
    const axios = MODULES.AXIOS;

    return {
        /**
         * Interface for get list all new url from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        generateToken: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                email: joi.string().required(),
            });
           try{
               let value = await authController.validateInputParams(schema, req.body);
               let token = await authController.generateToken(value.email);
               await redisController.setRedis({key: token.key, Obj:{token: token.token}});
               // let response = {
               //     data: token.data,
               //     message: 'Use Key and Token for API authenticate'
               // }
               next(null, token);
           }catch (err) {
               return next (err, null);
           }
        }
    };
};
