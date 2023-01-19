
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Do you have an installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your usage information?',
        },
        {
            type: 'list',
            name: 'license',
            choices: ["BSD", "MIT", "GPL"]
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your testing requirements?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email for additional questions',
        },
    ])

    .then((answers) => {
        const readmePageContent = generateReadme(answers);
        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created ReadMe.md !')
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("You have an error!!!!!!!")
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log("Blue Screen of Death !!!!")
            // Something else went wrong
        }
    });
// below -  generation of the read me file, layout of the md language to create the read me. 
const generateReadme = ({ title, description, installation, usage, license, contribution, test, github, questions }) =>
    `# ${title} 
## Description
${description}
## Table of Contents
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contribution Guidelines
${contribution}
## Testing
${test}
## Questions
${github}
For questions about this repository and project contact Jennilee Messenger @ ${questions}
`