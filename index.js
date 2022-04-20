// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    // banner message
    console.log(`
        =====================
        Welcome to ReadMe Pro
        =====================
    Thank you for using ReadMe Pro!
    Please answer all required fields.
    Your ReadMe file will be generated in the 'dist' folder.
    `);

    return inquirer
        .prompt([
            // PROMPTS FOR USER INFO //
            {
                // input default type is input
                // type: 'input',
                name: 'github',
                message: 'GitHub Username (Required):',
                // if input is true (not left blank), return turn, else run message
                validate: input => input ? true : 'Please enter your GitHub username.'
            },
            {
                name: 'email',
                message: 'E=mail Address (Required):',
                validate: input => input ? true : 'Please enter your e-mail address. You can always remove it later.',
            },

            // PROMPTS FOR PROJECT INFO //
            {
                // title of project, used as readme title
                name: 'title',
                message: 'What is your project title? (Required)',
                validate: input => input ? true : 'Please enter a project title.'
            },
            {
                // project description
                name: 'description',
                message: 'Provide a description for your project (Required)',
                validate: input => input ? true : 'A description must be provided.'
            },
            {
                // this question only appears when: confirmLicense is true
                type: 'list',
                name: 'license',
                message: 'Please select the license used for this project:',
                choices: [
                    'MIT',
                    'Apache 2.0',
                    'GPLv3',
                    'BSD-3',
                    'none'
                ]
            },
            {
                // ask to set "npm i inquirer" as the default install instructions
                type: 'confirm',
                name: 'defaultInstall',
                message: 'Use the default installation instructions (npm i to install dependencies)?',
                default: true
            },
            {
                // input custom installation instructions if defaultInstall is false
                name: 'install',
                message: 'Please provide custom installation instructions:',
                validate: input => input ? true : 'Please provide installation instructions.',
                when: ({ defaultInstall }) => !defaultInstall
            },
            {
                // usage instructions, message to add more content later (out of scope)
                name: 'usage',
                message: 'Provide examples of/for use of your project. Recommended: add screenshots and live demos after completion (Required)',
                validate: input => input ? true : 'Please provide usage information.'
            },
            {
                // testing instructions
                name: 'test',
                message: 'Please provide project testing instructions (Required)',
                validate: input => input ? true : 'You must provide testing instructions.'
            },
            {
                name: 'contributors',
                message: 'Please include any contribution guidelines:',
                validate: input => input ? true : 'You must include contribution guidelines.'
            }
        ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            // if error occurs, reject promise and send error to .catch method
            if (err) {
                reject(err);
                // return out of function
                return;
            }
            // on success, resolve Promise and send data to .then method
            resolve({
                ok: true,
                message: 'Success! Check the dist folder for your generated readme file!'
            })
        })
    })
}

// TODO: Create a function to initialize app
// function to prompt questions, store user inputs as readmeData
const init = () => {
    return questions()
    .then(readmeData => {
        return readmeData;
    })
};

// Function call to initialize app
init()
    .then(readmeData => {
        // console.log(readmeData);
        // send readmeData to generateMarkdown
        return generateMarkdown(readmeData);
    })
    // then send page data (pageMd) to writeFile
    .then(pageMd => {
        return writeFile(pageMd);
    })
    // then log message from writeFileReponse (successful resolve message)
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    // catch errors
    .catch(err => {
        console.log(err);
    });
    