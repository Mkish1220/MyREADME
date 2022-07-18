// TODO: Include packages needed for this application
// fs,inquirer,path,generatemarkdown-require
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const promptsArray = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
    },
    {
        type: 'input',
        name: 'tablecontents',
        message: 'give a table of contents for your project.',
    },
{
        type: 'input',
        name: 'install',
        message: 'What installations are needed for your project?',
    },
    {
        type: `input`,
        name: `usage`,
        message: `what is the usage for your project`
    },
    {
        type: `input`,
        name: `license`,
        message: `what type of liscense is needed?`,
    },
    {
        type: `input`,
        name: `contributing`,
        message: `who are the contributors on project?`,
    },
    {
        type: `input`,
        name: `tests`,
        message:   `what tests are needed?`,
    },
    {
        type: `input`,
        name: `questions`,
        message: `what questions?`
    },
  ]
//const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input




 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // if (process.cwd())
    fs.writeFileSync(path.join(process.cwd(), fileName), data ,"utf8") 
}
function init() {
    inquirer
  .prompt(promptsArray)
  .then((input) => {
  writeToFile("./README2.md", generateMarkdown({...input}))
  })
}

init()
// fs to write file,psth 
// activity 13

// TODO: Create a function to initialize app
// function init() {}
// use inquirer to prompt questions take in responses write to file
// activity 20 
// call the writeToFile function to write to file and call the markdown function to generate the markdown pass in respponse from questions

// Function call to initialize app
//init();

