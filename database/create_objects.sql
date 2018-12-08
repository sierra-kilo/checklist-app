CREATE TABLE IF NOT EXISTS checklist (
  id SERIAL NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS item (
  id SERIAL NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS checklist_item (
  checklist_id INT NOT NULL,
  item_id INT NOT NULL,
  FOREIGN KEY (checklist_id) REFERENCES checklist(id),
  FOREIGN KEY (item_id) REFERENCES item(id),
  PRIMARY KEY (checklist_id, item_id)
);

CREATE TYPE response_type AS ENUM('YES', 'NO', 'N/A');

CREATE TABLE IF NOT EXISTS response (
  id SERIAL NOT NULL UNIQUE,
  response response_type NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE IF NOT EXISTS submitted_item (
--   id SERIAL NOT NULL UNIQUE,
--   submitted_checklist_id INT NOT NULL,
--   item_id INT NOT NULL,
--   response_id INT NOT NULL,
--   FOREIGN KEY (submitted_checklist_id) REFERENCES submitted_checklist(id),
--   FOREIGN KEY (item_id) REFERENCES item(id),
--   FOREIGN KEY (response_id) REFERENCES response(id),
--   PRIMARY KEY (id)
-- );


-- CREATE TABLE IF NOT EXISTS checklist_due (
--   id SERIAL NOT NULL UNIQUE,
--   checklist_id INT NOT NULL,
--   date_due DATE NOT NULL,
--   time_due TIME NOT NULL,
--   FOREIGN KEY (checklist_id) REFERENCES checklist(id),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS submitted_checklist (
--   id SERIAL NOT NULL UNIQUE,
--   checklist_id INT NOT NULL,
--   time_submitted TIMESTAMP NOT NULL,
--   FOREIGN KEY (checklist_id) REFERENCES checklist(id),
--   PRIMARY KEY (id)
-- );
