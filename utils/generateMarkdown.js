// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}
// condtional statement is there a liscense
// if so return license badge
// if not return empty string
//return `!text to be displayed as a badge![License](${renderLicenseLink(license)})`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  if(license !== 'None'){
    return `\n*[License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.toLowerCase() !== 'None'){
    return `This Application is License under ${license} \n`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  ### ${data.description}

  ### ${data.tablecontents}

  ### ${data.install}

  ### ${data.usage}

  ### ${renderLicenseLink(data.license)}

  ### ${data.contributing}

  ### ${data.tests}

  ### ${data.questions}

`;
}

module.exports = generateMarkdown;
