class Shape {
  constructor(initials, fontColor, bgColor) {
    this.initials = initials;
    this.fontColor = fontColor;
    this.bgColor = bgColor;
  }

  generateSVG() {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${this.shape} fill="${this.bgColor}" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.initials}</text>

</svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(initials, fontColor, bgColor) {
    super(initials, fontColor, bgColor);
    this.shape = `polygon points="150, 18 244, 182 56, 182"`;
  }
}

class Square extends Shape {
  constructor(initials, fontColor, bgColor) {
    super(initials, fontColor, bgColor);
    this.shape = `rect x="90" y="40" width="120" height="120"`;
  }
}

class Circle extends Shape {
  constructor(initials, fontColor, bgColor) {
    super(initials, fontColor, bgColor);
    this.shape = `circle cx="150" cy="100" r="80"`;
  }
}

module.exports = { Triangle, Square, Circle };