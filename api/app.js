const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');
const cors = require('cors')
// database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);
mongoose.connection
  .on('error', (error) => console.log(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => {
    const info = mongoose.connections[0];
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  });
mongoose.connect(config.MONGO_URL, { useMongoClient: true });

const app = express();
app.use(
  cors()
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// routers
app.use('/devices', routes.devices);

app.listen(config.PORT, () =>
  console.log(`app listening on port ${config.PORT}!`)
);
