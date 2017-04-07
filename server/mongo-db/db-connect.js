/**
 * Created by Krishnam Raju on 4/7/2017.
 */

//Import the mongoose module
var mongoose = require('mongoose');

var mongoDb = {
    connection: function(){
      var mongoDbUrl = 'mongodb://raju:raju@ds031691.mlab.com:31691/application';
      mongoose.connect(mongoDbUrl)
        .then(() =>  console.log('connection successful'))
        .catch((err) => console.error(err));
    },
    disconnect: function(){
      mongoose.disconnect().then(()=> console.log("Dissconnected successful"));
    }
};

//connection to mongo database
mongoDb.connection();

module.exports = mongoDb;
