// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if(license==="mit"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";    
  }
  if(license==="gnu"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} ${renderLicenseBadge(data.license)}
  ${data.description}

  * [installation](#installation)
  * [usage](#usage)
  * [testing](#testing)
  * [contact](#contact)


  ##  installation 
  ${data.installation}

  ## usage
  ${data.usage}

  ## testing
  ${data.testing}

  ## contact
  ${data.contact}
`;
}

module.exports = generateMarkdown;
