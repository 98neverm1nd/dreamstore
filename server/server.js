    const express = require ('express'),
    path = require ('path'),
    bodyParser = require ('body-parser'),
    cors = require ('cors'),
    mongoose = require ('mongoose'),
    config = require ('./config/database')



    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.database).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const postroutes = require('./routes/Post/PostRoute');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/posts', postroutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });