// destructured data from readmeData

// function to render email if true
const generateEmail = emailText => {
  // if email confirmation is false, render empty string
  if (!emailText) {
    return '';
  }

  // if email confirmation is true, render section
  return `
    [Email: ${data.email}](mailto:${data.email})
  `;
}


// function to render contributors if true
const generateContributors = contributorsText => {
  if (!contributorsText) {
    return '';
  }

  return `
    [GitHub](https://github.com/${data.contributors})
  `;
}




// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
  * [Additional Information](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Tests:
  ${data.test}

  ## Contributions:
  ${generateContributors}

  ## Additional Information:
  [GitHub](https://github.com/${data.github})
  ${generateEmail}

`;
}

module.exports = generateMarkdown;
