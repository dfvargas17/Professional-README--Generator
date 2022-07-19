// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project's title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please describe your project",
        name: "description",
    },
    {
        type: "input",
        message: "What is the project's title?",
        name: "contents",
    },
    {
        type: "input",
        message: "How to install the app?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use the app?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license was used?",
        name: "license",
        choices: ['MIT', 'GPL', 'Apache', 'Mozila', 'GMU', 'N/A'],
    },
    {
        type: "input",
        message: "Can others contribute to the project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "Is there any test required?",
        name: "test",
    },
    {
        type: "input",
        message: "What is the project's title?",
        name: "questions",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {} //use fs to write the file, path

//reference activity 13

// TODO: Create a function to initialize app
function init() {} //use inquire and prompt to show questions, take in responses, write responses to file

//reference activity 20

// inside of writeToFile - file name, call your generateMarkdown function 
    //and pass in the responses you got from the questions

// Function call to initialize app
init();
