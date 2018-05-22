const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);
const DATABASE_URL = 'postgres://ijvtkjytuniwbx:bb35cb7bc9650cfad7d580762619ffe87850eacbe1d8ea2a39d350c77d716b35@ec2-23-23-130-158.compute-1.amazonaws.com:5432/desl8omprsf28a'
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'wedding',
      port: 5432,
      host: 'localhost',
      user: 'joey.diperi',
      pass: 'matrix8'
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;