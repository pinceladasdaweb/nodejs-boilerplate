/**
 * Helper dateFormat
 */
var moment = require('moment');

module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('dateFormat', function(context, block) {
        var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
        return moment(context).format(f);
    });
};
