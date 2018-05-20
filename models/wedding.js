const db = require('../db/config');

const wedding = {};

wedding.getImages = () => {
  return db.query(`
    SELECT * FROM images
  `);
};

// wedding.create = (wedding) => {
//   return db.one(`
//     INSERT INTO wedding
//     (incorrect_answer)
//     VALUES ($1)
//     RETURNING *
//   `, [wedding.incorrect_answer]);
// };

module.exports = wedding;