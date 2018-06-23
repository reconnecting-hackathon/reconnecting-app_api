const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);
const DATABASE_URL = 'postgres://zushqswnnzloyw:deaea9162648a7dbd1b285baf3916f9c743f80fe7e38520f26ef244e0d6a8009@ec2-54-163-229-212.compute-1.amazonaws.com:5432/d5fcfo9rap8tb1'
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'reconnect',
      port: 5432,
      host: 'localhost',
      user: 'zushqswnnzloyw',
      pass: 'deaea9162648a7dbd1b285baf3916f9c743f80fe7e38520f26ef244e0d6a8009'
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;