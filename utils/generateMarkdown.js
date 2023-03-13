// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Test](#Test)
- [Questions](#questions)
## Installation
  ${data.installation}
## Usage
  ${data.usage}
${renderLicenseSection(data.license)}
## Contributing
  ${data.contributing}
## Test
  ${data.test}
## Questions
If you have any question, Email me at: ${data.email} 
  
  Find me on GitHub: [${data.username}](https://github.com/${data.username})   
  
  ---
  _This README was generated with ❤️ by [README-generator](https://github.com/Lauracejas/Professional-README-Generator) © 2021_
`;
}

module.exports = generateMarkdown;
