// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //conditional statement, chech whether or not there is a license
  //if so, return the license badge - link provided
  // if not, return empty string

  //link  provided -  template literal with license instead of MIT
  //return `[!text to be display] {link itself}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //same patter that was used above (conditional statement)
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //same pattern
  //return `## License
  //this repository has the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //## table of contents

  //## description 
`;
}

module.exports = generateMarkdown;
