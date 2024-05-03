
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

${data.table}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.install}

## Usage

$${data.usage}

## Credits

${data.guide}

${data.testing}

## Badges

![license](https://img.shields.io/badge/License-${data.license}-blue.svg)

`
};

module.exports = generateMarkdown;