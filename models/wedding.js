const db = require('../db/config');

const wedding = {};

wedding.getImages = () => {
  return db.query(`
    SELECT * FROM image_person_join i
    join people on people.id = i.people_id
    join images im on im.id=i.image_id;
  `);
};

wedding.getSelectedPictures = (o) => {
  return db.query(`
    SELECT * FROM image_person_join i
    join people p on p.id = i.people_id
    join images im on im.id=i.image_id
    where p.person_name = $1
  `,[o.person]);
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