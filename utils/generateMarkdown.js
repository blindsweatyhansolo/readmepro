// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  // switch case for grabbing license badge based on matching value
  switch(license) {
    case 'MIT': 
      return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache 2.0':
      return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPLv3':
      return `[![License: ${license}](https://img.shields.io/badge/License-GPL3.0-red)](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
      break;
    case 'BSD-3':
      return `[![License: ${license}](https://img.shields.io/badge/License-BSD3-orange)](https://spdx.org/licenses/BSD-3-Clause.html)`;
      break;
    case 'none':
      return "";
      break;
  };
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const renderLicenseLink = license => {
  // switch case for license links based on matching value, starts on new line (\n)
  switch(license) {
    case 'MIT': 
      return `\n[${license}](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache 2.0':
      return `\n[${license}](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPLv3':
      return `\n[${license}](https://spdx.org/licenses/GPL-3.0-or-later.html)`;
      break;
    case 'BSD-3':
      return `\n[${license}](https://spdx.org/licenses/BSD-3-Clause.html)`;
      break;
    case 'none':
      return "";
      break;
  };
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if (license !== 'none'){
    return `
## [License](#table-of-contents)

${renderLicenseBadge(license)}
_This application is covered under the ${renderLicenseLink(license)} license, see link for more details._

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
