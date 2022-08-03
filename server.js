const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctables = require("console.table");

const sqlconnection = mysql.createConnection({

    host: "localhost",
    port: 3001,
    user: "root",
    Password: 'YourPassword',
    database: "employee_db"

});

function runProgram() {
    inquirer.prompt([
        {
            type: "list",
            name: 'firstQuestion',
            message: "What would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee", "exit"]
        }
    ])
        .then(function (res) {
            switch (res.runProgram) {
                case "view all departments":
                    viewDepartments();
                    break;
                case "view all roles":
                    viewRoles();
                    break;
                case "view all employees":
                    viewEmployees();
                    break;
                case "add a department":
                    addDepartment();
                    break;
                case "add a role":
                    addRole();
                    break;
                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee":
                    updateEmployee();
                    break;
                case "exit":
                    exit();
                    break;
                default:
                    console.log("default");
            };

        });
};

runProgram()