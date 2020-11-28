var mongoose = require('mongoose');




var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
   
        useUnifiedTopology : true
   }



mongoose.connect("mongodb+srv://Kamil:"+process.env.dbKey+"@cluster0.y5whn.mongodb.net/ticettac?retryWrites=true&w=majority",
   options,
   function(err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info('*** Database Ticketac connection : Success ***');
    }
   }
);

