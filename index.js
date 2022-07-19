// TODO: Include packages needed for this application
// fs,inquirer,path,generatemarkdown-require
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const promptsArray = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What installations are needed for your project? What are the steps required to install your project?',
    },
    {
        type: `input`,
        name: `Usage`,
        message: `What is the usage for your project?`,
    },
    {
        type: `list`,
        name: `License`,
        message: `What type of license is needed?`,
        choices: [
                'Apache',
                'MIT',
                'Mozilla',
                'Open'
        ]
    },
    {
        type: `input`,
        name: `Contributing`,
        message: `Who are the contributors on project? List your collaborators, if any, with links to their GitHub profiles.`,
    },
    {
        type: `input`,
        name: `Tests`,
        message: `Are any test included in this project?`,
    },
    {
        type: `input`,
        name: `Questions`,
        message: `What do I do if I have any questions.`,
    },
    {
        type: `input`,
        name: `Username`,
        message: `What is your GitHub UserName?`,
    },
    {
        type: `input`,
        name: `Contact`,
        message: `What is your email or way of contact?`,
    },
]
//const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input/ TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // if (process.cwd())
    fs.writeFileSync(path.join(process.cwd(), fileName), data, "utf8")
}
function init() {
    inquirer
        .prompt(promptsArray)
        .then((input) => {
            writeToFile("./README.md", generateMarkdown({ ...input }))
        })
}
// Function call to initialize app
init()