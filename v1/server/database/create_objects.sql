CREATE TABLE checklist (
  checklist_id INT NOT NULL UNIQUE SERIAL,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (checklist_id)
);

CREATE TABLE item (
  item_id INT NOT NULL UNIQUE SERIAL,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(128) NOT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE checklist_had_item (
  FOREIGN KEY fk_checklist_checklist_id INT NOT NULL,
  FOREIGN KEY fk_item_item_id INT, NOT NULL,
  PRIMARY KEY (fk_checklist_checklist_id, fk_item_item_id)
);

CREATE TABLE checklist_due (
  checklist_due_id INT NOT NULL UNIQUE SERIAL,
  FOREIGN KEY fk_checklist_checklist_id INT NOT NULL,
  due_date DATETIME NOT NULL,
  PRIMARY KEY (checklist_due_id)
);

CREATE TABLE submitted_checklist (
  submitted_checklist_id INT NOT NULL UNIQUE SERIAL,
  FOREIGN KEY fk_checklist_checklist_id INT NOT NULL,
  time_submitted TIMESTAMP,
  PRIMARY KEY (submitted_checklist_id)
);

CREATE TABLE submitted_item (
  submitted_item_id INT NOT NULL UNIQUE SERIAL,
  FOREIGN KEY fk_submitted_checklist_submitted_checklist_id INT NOT NULL,
  FOREIGN KEY fk_item_item_id INT NOT NULL,
  FOREIGN KEY fk_response_response_id INT NOT NULL,
  PRIMARY KEY (submitted_item_id)
);

CREATE TABLE response (
  response_id INT NOT NULL UNIQUE SERIAL,
  response ENUM('YES', 'NO', 'N/A'),
  PRIMARY KEY (response_id)
);
