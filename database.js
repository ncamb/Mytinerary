const mongoose = require('mongoose');
const URI ='mongodb+srv://mongosuper:mongosuper@nachosdb-2yntm.gcp.mongodb.net/mytinerary?retryWrites=true&w=majority';

mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopo: true} )
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));

    
module.exports = mongoose;  