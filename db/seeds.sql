INSERT INTO department (names)
VALUES  ("Sales"), ("Marketing"), ("Management");

INSERT INTO roles(title, salary, department_id)
VALUES  ("Sales Manager", 80000.00, 1), ("Marketing Manager", 75000.00, 2), ("COO", 99000.00, 3);

INSERT INTO employee(first_name, Last_name, roles_id)
VALUES  ("Orion", "Johnson", 1),
        ("Zander", "Janey", 2),
        ("Ivette", "Ramos", 3);