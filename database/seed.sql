DELETE FROM checklist;

INSERT INTO checklist(name, description)
VALUES
  ('checklist 1', 'checklist 1 description'),
  ('checklist 2', 'checklist 2 description'),
  ('checklist 3', 'checklist 3 description'),
  ('checklist 4', 'checklist 4 description'),
  ('checklist 5', 'checklist 5 description'),
  ('checklist 6', 'checklist 6 description'),
  ('checklist 7', 'checklist 7 description');

  DELETE FROM item;

INSERT INTO item(name, description)
VALUES
  ('item 1', 'item 1 description'),
  ('item 2', 'item 2 description'),
  ('item 3', 'item 3 description'),
  ('item 4', 'item 4 description'),
  ('item 5', 'item 5 description'),
  ('item 6', 'item 6 description'),
  ('item 7', 'item 7 description');

INSERT INTO checklist_item(checklist_id, item_id)
VALUES
  (2, 2),
  (2, 3),
  (2, 4),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6);

INSERT INTO response(response)
VALUES
  ('YES'),
  ('NO'),
  ('N/A');

INERT INTO checklist_item_response (checklist_id, item_id, response_id)
