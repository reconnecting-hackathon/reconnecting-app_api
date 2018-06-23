const db = require('../db/config');

const action = {};

action.getActionsForUser = (user_id) => {
  return db.query(
    `SELECT a.id
      , a.action_complete
      , a.start_time
    FROM actions a
    INNER JOIN contacts c
      ON c.id = a.contacts_id
    WHERE c.user_id = $1`, [user_id]);
};


action.completeAction = (action_id, updated_start_time) => {
  return db.query(`
    UPDATE actions
      SET start_time = $1
    WHERE id = $2
  `, [updated_start_time, action_id]);
}
