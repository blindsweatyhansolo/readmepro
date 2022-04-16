// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const promptUser = () => {
const questions = () => {
    console.log(`
    =====================
    Welcome to ReadMe Pro
    =====================
    `);

    return inquirer
        .prompt([
            // prompts for user github name, email (if confirmed)
            {
                // type is default input
                // type: 'input',
                name: 'github',
                message: 'GitHub Username (Required):',
                // if input is true (not left blank), return turn, else run message
                validate: input => input ? true : 'Please enter your GitHub username.'
            },
            {
                // confirm if user wants to include email info (privacy issue)
                type: 'confirm',
                name: 'confirmEmail',
                message: 'Would you like to include your e-mail?',
                // false will not render email to 'additional info' section
                default: true
            },
            {
                name: 'email',
                message: 'What is your e-mail?',
                validate: input => input ? true : 'Please enter your e-mail address.',
                when: ({ confirmEmail }) => confirmEmail
            },

            // prompts for project info
            {
                // title of project, used as readme title
                name: 'title',
                message: 'What is your project title? (Required)',
                validate: input => input ? true : 'Please enter a project title.'
            },
            {
                // project description
                name: 'description',
                message: 'Provide a description for your project:',
                validate: input => input ? true : 'A description must be provided.'
            },
            {
                // license confirmation, then checkbox to select possible licenses
                type: 'confirm',
                name: 'confirmLicense',
                message: 'Would you like to include license information?',
                // false will not render license badge or 'license info' section
                default: true
            },
            {
                // this question only appears when confirmLicense is true
                type: 'checkbox',
                name: 'license',
                message: 'Which licenses does your project have? (Check all that apply)',
                choices: [
                    'MIT',
                    'Apache 2.0',
                    'GPLv3',
                    'BSD-3-Clause'
                ],
                when: ({ confirmLicense }) => confirmLicense
            },
            {
                // installation instructions
                name: 'install',
                message: 'Please provide clear installation instructions for your project.',
                validate: input => input ? true : 'You must provide installation instructions.'
            },
            {
                // usage instructions, message to add more content later (out of scope)
                name: 'usage',
                message: 'Provide examples for use of your project. Recommended: add screenshots and live demos after completion.',
                validate: input => input ? true : 'Please provide usage information.'
            },
        ])
};

const promptContributors = contributorsArr => {
    // create array for contributors
    if (!contributorsArr.contributors){
        contributorsArr.contributors = [];
    }

    return inquirer
        .prompt([
            {
                // confirm if there were any contributors
                type: 'confirm',
                name: 'confirmContributors',
                message: 'Were there contributors to this project?',
                // false will not render 'contributors' section 
                default: true
            },
            {
                name: 'contributors',
                message: 'Please provide contributor GitHub username:',
                when: ({ confirmContributors }) => confirmContributors
            },
            {
                type: 'confirm',
                name: 'confirmAddContributor',
                message: 'Would you like to add another contributor?',
                default: false
            }
        ])
        .then(contributorsData => {
            // place data from inquirer prompt into new contributors array
            contributorsArr.contributors.push(contributorsData);
            // recall promptContributors on true, otherwise return object data
            if (contributorsData.confirmAddContributor){
                return promptContributors(contributorsArr);
            } else {
                return contributorsArr;
            }
        })
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
questions()
    .then(promptContributors);
