// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const {writeFile} = require('fs').promises
// const text = generateMarkdown(data)
// TODO: Create an array of questions for user input
inquirer 
.prompt([
    {
        type: "input",
        message: "What is the Title of your ReadMe?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a description of your project:",
        name: "description",
    },
    {
        type: "list",
        message: "Add licensing",
        name: "license",
        choices: ['MIT','APACHE','GNU']
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "install",
    },
    {
        type: "input",
        message: "What are some of the ways Users can expect to utilize your app?",
        name: "usage",
    },
    {
        type: "input",
        message: "Create a Guidline for any Contributors:",
        name: "guide",
    },
    {
        type: "input",
        message: "Instructions for testing:",
        name: "testing",
    }
])
// TODO: Create a function to write README file
// .then((inquirerResponse, data) => {
//   fs.writeFileSync('README.md', inquirerResponse, data, (err) =>
// err ? console.log(err) : console.log('Success.'));  
// });

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
    .then((data) => {
        const text = generateMarkdown(data)
        
        writeFile('README.md', text);
        console.log('Success!');
    })
    .catch((err) => {
        console.log(err);
    })
// }

// Function call to initialize app
// init();
