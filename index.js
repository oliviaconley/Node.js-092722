const inquirer = require('inquirer');
const fs = require('fs'); 

const generateReadme = (answers) => 
`# ${answers.title}

## ${answers.description}
    
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${answers.installation}

## Usage
${answers.usage}

## License  
![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.github}
${answers.email}`


inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'Please provide your application title. '
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your application.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Instructions on how to install your application.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license from the dropdown menu.',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to this project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can other developers report issues with this project?'
      }, 
      {     
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub link.'
      },
      {     
        type: 'input',
        name: 'email',
        message: 'Please provide your email.'
      }
      
])
.then((answers) => {
    const readMeContent = generateReadme(answers)
    fs.writeFile('README.md', readMeContent, (err)=>
    err ? console.log(err) : console.log('')
    );
})





