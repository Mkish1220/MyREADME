// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if(License !== 'None'){
    return `[![License](https://img.shields.io/badge/License-${License}-blue.svg)](https://opensource.org/licenses/${License})`
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  console.log(License)
  if(License !== 'None'){
    return `\n*[License](#License)\n`
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License.toLowerCase() !== 'None'){
    return `This Application is License under ${License}\n`

  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  return `# ${data.Title} 

 ${renderLicenseBadge(data.License)}

  ## Description
  🔍 ${data.Description}

  ## Table of Contents
   * [Installation](#-Installation)
   * [Usage](#-Usage)
   * [Credits](#-Credits)
   * [License](#-License)
   * [Contributing](#-Contributing)
   * [Tests](#-Tests)
   * [Questions](#-Questions)
  
  ## Contributing Parties
  👪 ${data.Contributing}

  ## Tests
  💻 ${data.Tests}

  ## Questions
  ✋ Email me with any questions: ${data.Questions}

  ## Username
  ✏️ Find my project on Github: ${data.Username}

  ## Contact
  ✉️ Email me with any questions or concerns: ${data.Contact}

  ## GitHub Username
   ${data.Username}
  _This README was generated with ❤️ by [README-generator](https://github.com/Mkish420/MyREADME)_
`;
}

module.exports = generateMarkdown;
