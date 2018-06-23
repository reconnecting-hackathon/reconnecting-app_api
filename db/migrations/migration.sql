
CREATE TABLE IF NOT EXISTS user
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS contacts
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  prefered_contact_method VARCHAR(255),
  frequency VARCHAR(255),
  user_id INT REFERENCES user(id),
);

CREATE TABLE IF NOT EXISTS activities
(
  id SERIAL PRIMARY KEY,
  activity_name VARCHAR(255),
  image_url VARCHAR(255) ,
);

CREATE TABLE IF NOT EXISTS activities_contacts_join
(
  id SERIAL PRIMARY KEY,
  activity_id INT REFERENCES activities(id),
  contacts_id INT REFERENCES contacts(id),
);

CREATE TABLE IF NOT EXISTS actions
(
  id SERIAL PRIMARY KEY,
  action_complete boolean,
  start_time date
  contacts_id INT REFERENCES contacts(id)
);


`
