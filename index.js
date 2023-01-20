
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
            choices: ["BSD", "MIT", "GPL", "Mozilla", "Apache", "Boost", "The Unlicense"]
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
## Table of Contents
1. [Description](https://github.com/JMess87/CreateReadMe/blob/main/README.md#description)
2. [Installation](https://github.com/JMess87/CreateReadMe/blob/main/README.md#installation)
3. [Usage](https://github.com/JMess87/CreateReadMe/blob/main/README.md#installation)
4. [License](https://github.com/JMess87/CreateReadMe/blob/main/README.md#license)
5. [Contribution Guidelines](https://github.com/JMess87/CreateReadMe/blob/main/README.md#license)
6. [Testing](https://github.com/JMess87/CreateReadMe/blob/main/README.md#testing)
7. [Questions](https://github.com/JMess87/CreateReadMe/blob/main/README.md#questions)

## Description
${description}
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
For questions about this repository and project contact Jennilee Messenger @ [github.com/${github}](https://github.com/${github})
 or reach out to them @ ${questions}`