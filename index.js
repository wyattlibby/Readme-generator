// TODO: Include packages needed for this application
const fs= require ("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message:"what is the name of your project",
        name:"name"
    },
    {
        message:"description",
        name:"description"
    },
    {
        message:"installation",
        name:"installation"
    },
    {
        message:"usage",
        name:"usage"
    },{
        message:"testing",
        name:"testing"
    },{
        message:"contact",
        name:"contact"
    },
    {
        message:"license",
        name:"license",
        type:"list",
        choices:["apache","mit","gnu"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    console.log("welcome to my readme app");
    const response= await inquirer.prompt(questions);
    const markdown= generateMarkdown(response);
    fs.writeFileSync("./dist/readme.md",markdown);
    console.log("thank you for using my app");
    process.exit();
}

// Function call to initialize app
init ()
