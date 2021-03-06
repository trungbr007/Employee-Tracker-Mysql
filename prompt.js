const inquirer = require('inquirer');
const db = require('./db/connection');


const mainPrompts = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to?',
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

//Prompting User questions for adding new employee
function employeePrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is first name of Employee?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is last name of Employee?'
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'What position does the employee play? Choose 1 for Full Stack DEV, 2 for Front-End DEV, 3 for Back-End DEV, 4 for IT Helper, 5 for Recruiter, 6 for HR information specialist , 7 for Digital Marketer, 8 for Content Marketing, 9 for Creative Director,10 for Accoutant,11 for CPA,12 for Business Analyst,13 for Sale Consultant,14 for Sales Representative, or 15 for Sales manager.',
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15]

        },
        {
            type: 'list',
            name: 'employeeManager',
            message: "Who is Employee's Manager? Choose 1 for Ronald Firbank, 2 for Mansfield, 3 for Piers Gaveston, 4 for Dora Carrington, 5 for Edward Bellamy, 6 for Paul Scholes,or 7 for Peter Nguyen.",
            choices: [1, 2, 3, 4, 5, 6, 7]
        }
    ])
    .then( function (ans) {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?);`;
    db.query(sql, [ans.firstName, ans.lastName, ans.roleId, ans.employeeManager], (err, res) => {
        if (err) throw err;
        console.log('New employee has been added.');
        mainPrompts();
    });
    });
};



//prompting to update role
function updateRole() {
   
    db.query(`SELECT * FROM employee`, (err, res) => {
        if(err) throw err
    
    const employeeList = res.map((employee) => ({name: employee.last_name + ", " + employee.first_name, value: employee.id}))
    inquirer
    .prompt([
        {
        type:'list',
        name: 'updateEmployee',
        message: 'Which employee would you like to update?',
        choices: employeeList
        },
        {
        type: 'list',
        name: 'oldRole',
        message: "What is employee's old role id?",
        choices: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        },
        {
        type: 'list',
        name: 'newRole',
        message: "What is employee's new role id?",
        choices: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }  
    
    ])
    .then(function (ans) {
    const sql = `UPDATE employee SET role_id = ?;`;
    db.query(sql, [ans.newRole, ans.oldRole], (err, res) => {
        if (err) throw err;
        console.log("Employee's role has been changed.");
        mainPrompts();
    });
    });
});
    

};

//Add new department
function departmentPrompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What department would you like to add?'
        }
    ])
    .then(function (ans) {
            const sql = `INSERT INTO department(name)
            VALUES (?);`;
            db.query(sql, ans.departmentName, (err, res) => {
                if (err) throw err;
                console.log('New department has been added.');
                mainPrompts();
            });
        
    });
};

//view list of all employees
function viewEmployees() {
    const sql = `SELECT * FROM employee ORDER BY last_name`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log('All employees listed alphabetically by last name');
        console.table(results)
    })
    mainPrompts();
};

//view List of all Roles
function viewRoles() {
const sql = `SELECT * FROM role`;
db.query(sql, (err, results) => {
    if (err) throw err;
    console.log('All roles listed.');
    console.table(results)
})
mainPrompts();
};

//view list of all Departments
function viewDepartments() {
const sql = `SELECT * FROM department`;
db.query(sql, (err, results) => {
    if (err) throw err;
    console.log('Departments listed')
    console.table(results)
})
mainPrompts();
}; 



//Start the application
mainPrompts();