const inquirer = require('inquirer');
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
    console.log('data pre-conditional', data);
    if (data.initials.length > 3 || data.initials.length < 1 ) {
      console.log('Invalid number of initials. Try again.')
    };

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

    console.log(logo)
    console.log(logo.generateSVG());
  });
}


// const triangle = new Triangle('CGT', 'Blue', 'White');
// console.log(triangle)
// console.log(triangle.generateSVG());

init();