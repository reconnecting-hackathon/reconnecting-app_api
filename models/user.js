const db = require('../db/config');

const user = {};

user.getUser = (email, password_name) => {
  return db.query(`
    SELECT id
      , first_name
      , last_name
    FROM user
    WHERE email = $1 AND password_name = $2
  `, [email, password_name]);
};

user.updateUser = (userInfo) => {
  const { id, first_name, last_name, email, password_name } = userInfo;

  return db.query(`
    UPDATE user
    SET first_name = $1,
        last_name = $2,
        email = $3,
        password_name = $4
    WHERE id = $5`,
    first_name,
    last_name,
    email,
    password_name,
    id);
};

module.exports = user;
