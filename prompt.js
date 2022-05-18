const inquirer = require('inquirer');
const db = require('./db/connection');


const mainPrompts = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['Add Employee', 'Add Role', 'Add Department', 'Update Role', 'View all Employees', 'View all Roles', 'View all Departments'
            ]
        }
    ])
    .then(function (ans) {
        switch(ans.choice) {

            case 'View all Departments':
                viewDepartments();
                break;
            case 'View all Roles':
                viewRoles();
                break;
            case 'View all Employees':
                viewEmployees();
                break;
            case 'Add Department':
                departmentPrompts();
                break;
            case 'Add Role':
                rolePrompts();
                break;
            case 'Add Employee':
                employeePrompts();  
                break;
            case 'Update Role': 
                updateRole();
                break;   
        }
    })
};   