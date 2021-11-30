// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        message:"what is the name of your project",
        name:"name"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    console.log("welcome to my readme app");
    const response= await inquirer.prompt(questions);
    console.log("project name:",response.name);
}

// Function call to initialize app
init ()
