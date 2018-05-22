const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const app = express();

//middleware 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('hello we are deployed');
});

const weddingRoutes = require('./routes/weddingRoutes');
app.use('/wedding', weddingRoutes);

// const gameRoutes = require('./routes/game-routes');
// app.use('/game', gameRoutes);

module.exports = app;