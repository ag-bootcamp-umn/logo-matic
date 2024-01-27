const inquirer = require('inquirer');

// Utilizing an NPM package to validate user input of color fields
// The package includes methods to check strings and validate whether they are valid HTML colors or hexadecimal color values
// Credit to Wallace Sidhree for the NPM package. https://github.com/dreamyguy/validate-color
const {validateHTMLColorName, validateHTMLColorHex} = require('validate-color');

const fs = require("fs");
const { Triangle, Square, Circle } = require('./lib/shapes.js')

const prompts = [
  {
    type: 'input',
    message: 'Enter up to 3 letters.',
    name: 'initials'
  },
  {
    type: 'input',
    message: 'Enter your prefered text colour (either as a keyword of a hexadecimal preceded by a hashtag).',
    name: 'fontColor'
  },
  {
    type: 'list',
    message: 'What shape logo would you like?',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle']
  },
  {
    type: 'input',
    message: 'Enter your prefered background colour (either as a keyword of a hexadecimal preceded by a hashtag).',
    name: 'bgColor'
  }
];

function init() {
  const logoData = inquirer.prompt(prompts)
  .then(data => {
    // Validate User Input: 1 - 3 initials, and valid color values:
    if ( !initsOK(data.initials) ) {
      throw new Error('Invalid number of initials. Try again.')
    } else if ( !isColor(data.fontColor) || !isColor(data.bgColor)) {
      throw new Error('You must enter valid color properties');
    } else if ( initsOK(data.initials) && isColor(data.fontColor) && isColor(data.bgColor) ) {
      return data;
    } else {
      throw new Error("Something isn't right here. But it's not you - it's me.")
    }
  
  })
  .then( data => {
    // Get the bespoke text of the SVG file 
    const logoCode = getLogoCode(data);
    return logoCode;

  })
  .then( logo => {
    // Now write it to a file...
    const svgText = logo.generateSVG();
    fs.writeFile(
      `examples/logo${logo.initials}.svg`,
      svgText,
      err => {
        if (err) return console.log(err);
      }
    )
  })
  .catch(error => {
    console.log(error.message);
    init();
  });
}

// HELPER FUNCTIONS

// Generate a bespoke SVG, calling methods from methods required in from "lib/shapes"
function getLogoCode(data) {
  let logo;
  switch (data.shape) {
    case "Triangle":
      logo = new Triangle(data.initials, data.fontColor, data.bgColor)
      break;
    case "Square":
      logo = new Square(data.initials, data.fontColor, data.bgColor)
      break;
    case "Circle":
      logo = new Circle(data.initials, data.fontColor, data.bgColor)
      break;
  
    default: console.log('Error: no shape');
      break;
  }
  return logo;
}

// Verify initials is up to 3 characters
function initsOK ( str ) {
  return str.length > 0 && str.length < 4;
}

// Verify colors are valid CSS values 
// Credit to Wallace Sidhree for the NPM package. https://github.com/dreamyguy/validate-color
function isColor( color ) {
  return validateHTMLColorHex(color) || validateHTMLColorName(color);
}

// Let's get started...
init();
