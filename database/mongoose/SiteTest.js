/**
 * Created by rizkinovrizal on 05/09/17.
 */
'use strict';

module.exports = function (MODULES) {
    let mongoose = MODULES.MONGOOSE;
    let Schema = mongoose.Schema;

    let siteTestSchema = new Schema({
        url: {type: String, required: true},
        status: {type: Boolean}
    }, {timestamps: {}});

    // define your plugin here, see examples below
    return siteTestSchema;
};
