
CREATE TABLE IF NOT EXISTS images
(
  id SERIAL PRIMARY KEY,
  image_name VARCHAR(255) NOT NULL,
  location_name VARCHAR(255) NOT NULL,
  descriptions TEXT,
  featured_image boolean,
  vertical boolean
);

CREATE TABLE IF NOT EXISTS people
(
  id SERIAL PRIMARY KEY,
  person_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS image_person_join
(
  id SERIAL PRIMARY KEY,
  people_id INT REFERENCES people(id) NOT NULL,
  image_id INT REFERENCES images(id) NOT NULL 
);



