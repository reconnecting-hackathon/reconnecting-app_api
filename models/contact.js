const db = require('../db/config');

const contact = {};

contact.addContact = (contactInfo) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    preferred_contact_method,
    frequency,
    user_id
  } = contactInfo;

  return db.query(`
      INSERT INTO contacts
        (first_name, last_name, email, phone, preferred_contact_method, frequency, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [first_name,
    last_name,
    email,
    phone,
    preferred_contact_method,
    frequency,
    user_id]);
};

contact.addActivities = (contact_id, activity_ids) => {
  activity_ids.forEach(activity_id => {
    db.query(`INSERT INTO activities_contacts_join (activity_id, contacts_id)
    VALUES ($1, $2)`, [activity_id, contact_id]);
  });
};

contact.getContactsForUser = (user_id) => {
  return db.query(`
    SELECT *
    FROM contacts
    WHERE user_id = $1`, [user_id]);
};

// Questions.create = (game_id, triviaData) => {
//   return Promise.all(triviaData.map(questions => {
//     return db.one(`INSERT INTO question
//                     (question,correct_answer,game_id)
//                     VALUES
//                     ($1,$2,$3)
//                     RETURNING *`,

//       [questions.question, questions.correct_answer,game_id])
//     .then(questionInDatabase => {
//       return Promise.all(questions.incorrect_answers.map(incorrectAnswer => {
//         return db.one(`INSERT INTO wrong_answer
//                     (incorrect_answer,question_id)
//                     VALUES
//                     ($1,$2)
//                     RETURNING *`,
//           [incorrectAnswer, questionInDatabase.id]);
//       }));
//     });
//   }));
// }

module.exports = contact;
