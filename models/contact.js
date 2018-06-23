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
  first_name,
  last_name,
  email,
  phone,
  preferred_contact_method,
  frequency,
  user_id);
};
