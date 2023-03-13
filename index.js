// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Name of Repository: ',
    name: 'title',
},
{
    type: 'input',
    message: 'Repository Description',
    name: 'description',
},
{
    type: 'input',
    message: 'Steps required to install repository? (Optional)',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use',
    name: 'usage',
},
{
    type: 'list',
    message: 'Choose your license for your project.',
    name: 'license',
    choices: [
        { value: 'Apache' },   //Apache 2.0 License
        { value: 'BSD3' },  //BSD 3-Clause License
        { value: 'LGPL' },  //GNU LGPL v3
        { value: 'MIT' },  //The MIT License
        { value: 'MPL' }, //Mozilla Public License 2.0
        { value: 'None' }, 
    ]
},
{
    type: 'input',
    message: 'Explain how users can contribute to your project (Optional).',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Provide tests for project, and explain how to test (Optional).',
    name: 'test',
},
{
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username",
},
{
    type: "input",
    message: "Enter your email: ",
    name: "email",
}];

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Professional ReadME has been generated!"))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("File Name:")
        console.log(data.title)
        const filename = data.title.replace(' ', "").toLowerCase()
        writeToFile(filename, data)
    })
 }

// Function call to initialize app
init();