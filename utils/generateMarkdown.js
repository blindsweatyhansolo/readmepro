// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license !== 'none'){
    return `
![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return '';
  }
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === "MIT"){
    return `
    [${license}](https://opensource.org/licenses/MIT)
    `
  }
  
  if (license === "Apache 2.0"){
    return `
  [${license}](https://opensource.org/licenses/Apache-2.0)  
    `
  }

  if (license === "GPLv3"){
    return `
  [${license}](https://spdx.org/licenses/GPL-3.0-or-later.html)
    `
  }

  if (license === "BSD-3"){
    return `
  [${license}](https://spdx.org/licenses/BSD-3-Clause.html)
    `
  }

  if (license === 'none'){
    return '';
  }
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if (license !== 'none'){
    return `
## [License](#table-of-contents)

_This application is covered under the following license, see link for more details:_
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
    `
  } else {
    return '';
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributions](#contributions)
  * [Additional Information](#additional-information)
 
  ***  

  ## [Description:](#table-of-contents)
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## [Installation:](#table-of-contents)
  ${data.install}

  ## [Usage:](#table-of-contents)
  ${data.usage}

  _For more help on how to add screenshots or demos for usage examples, check out this useful tutorial:_
  [Mark Down Tutorial](ttps://agea.github.io/tutorial.md/)

  ${renderLicenseSection(data.license)}

  ## [Tests:](#table-of-contents)
  ${data.test}

  ***

  ## Contributions:

  ## [Additional Information:](#table-of-contents)
  _If you have any questions about the application, or would like to become a contributor, please contact me using the information below:_

  [GitHub](https://github.com/${data.github})

  [Email](mailto:${data.email})

`;
};

module.exports = generateMarkdown;
