INSERT INTO department (name)
VALUES
  ('IT'),
  ('Human Resources'),
  ('Marketing'),
  ('Accounting'),
  ('Sales' );
  
 
 INSERT INTO role (title,salary,department_id)
 VALUES
  ('Full Stack Developer',99000,1),
  ('Front-End Dev',70000,1),
  ('Back-End Dev',75000,1),
  ('IT helper',50000,1),
  ('Recruiter',65000,2),
  ('HR information specialist',60000,2),
  ('Digital Marketer',72000,3),
  ('Content marketing specialist',70000,3),
  ('Creative Director',100000,3),
  ('Accoutant',80000,4),
  ('CPA',88000,4),
  ('Business Analyst',100000,4),
  ('Sales consultant',60000,5),
  ('Sales representative',65000,5),
  ('Sales manager',90000,5);
  
  
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, NULL),
  ('Piers', 'Gaveston', 3, 3),
  ('Charles', 'LeRoi', 4, NULL),
  ('Katherine', 'Mansfield', 5, 2),
  ('Dora', 'Carrington', 6, 4),
  ('Edward', 'Bellamy', 7, 5),
  ('Montague', 'Summers', 9,NULL),
  ('Octavia', 'Butler', 9, NULL),
  ('Unica', 'Zurn', 1, NULL),
  ('Paul', 'Scholes', 10, 6),
  ('Lionel', 'Messi', 11, NULL),
  ('Heung', 'Son', 13, NULL),
  ('Peter', 'Nguyen', 14, 7),
  ('Kylian', 'Mbape', 2, NULL);

  
  