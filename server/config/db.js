var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://jvargas:123456@ds159493.mlab.com:59493/mean_db');

module.exports = connection;