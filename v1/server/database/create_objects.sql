CREATE TABLE IF NOT EXISTS checklist (
  checklist_id SERIAL NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (checklist_id)
);

CREATE TABLE IF NOT EXISTS item (
  item_id SERIAL NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE IF NOT EXISTS checklist_has_item (
  fk_checklist_checklist_id INT NOT NULL,
  fk_item_item_id INT NOT NULL,
  FOREIGN KEY (fk_checklist_checklist_id) REFERENCES checklist(checklist_id),
  FOREIGN KEY (fk_item_item_id) REFERENCES item(item_id),
  PRIMARY KEY (fk_checklist_checklist_id, fk_item_item_id)
);

CREATE TABLE IF NOT EXISTS checklist_due (
  checklist_due_id SERIAL NOT NULL UNIQUE,
  fk_checklist_checklist_id INT NOT NULL,
  date_due DATE NOT NULL,
  time_due TIME NOT NULL,
  FOREIGN KEY (fk_checklist_checklist_id) REFERENCES checklist(checklist_id),
  PRIMARY KEY (checklist_due_id)
);

CREATE TABLE IF NOT EXISTS submitted_checklist (
  submitted_checklist_id SERIAL NOT NULL UNIQUE,
  fk_checklist_checklist_id INT NOT NULL,
  time_submitted TIMESTAMP NOT NULL,
  FOREIGN KEY (fk_checklist_checklist_id) REFERENCES checklist(checklist_id),
  PRIMARY KEY (submitted_checklist_id)
);

CREATE TYPE response_type AS ENUM('YES', 'NO', 'N/A');

CREATE TABLE IF NOT EXISTS response (
  response_id SERIAL NOT NULL UNIQUE,
  response response_type NOT NULL,
  PRIMARY KEY (response_id)
);

CREATE TABLE IF NOT EXISTS submitted_item (
  submitted_item_id SERIAL NOT NULL UNIQUE,
  fk_submitted_checklist_submitted_checklist_id INT NOT NULL,
  fk_item_item_id INT NOT NULL,
  fk_response_response_id INT NOT NULL,
  FOREIGN KEY (fk_submitted_checklist_submitted_checklist_id) REFERENCES submitted_checklist(submitted_checklist_id),
  FOREIGN KEY (fk_item_item_id) REFERENCES item(item_id),
  FOREIGN KEY (fk_response_response_id) REFERENCES response(response_id),
  PRIMARY KEY (submitted_item_id)
);
