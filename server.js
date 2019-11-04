const express= require('express');
const morgan = require('morgan');
const path = require('path'); 
const cors = require('cors');
const {mongoose} = require ('./database');

const app = express();

//setings
app.set('port', process.env.PORT || 4000);

//Middlwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/test',require('./routes'));  

//static files

app.use(express.static(path.join(__dirname, 'client','my-app','public')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client','my-app','public'));
//   });

//strating server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});