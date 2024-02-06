const { Triangle, Square, Circle } = require('../lib/shapes.js');

// Test each shape for the first word in the {this.shape} string

describe('Shape', () => {
  describe('Triangle', () => {
    it('Should return the shape of "polygon"', () => {
      const shape = new Triangle('BFG', 'red', 'green')
      expect(shape.shape.split(' ')[0]).toEqual('polygon')
    });
  });
}) ;

describe('Shape', () => {
  describe('Square', () => {
    it('Should return the shape of "rect"', () => {
      const shape = new Square()
      expect(shape.shape.split(' ')[0]).toEqual('rect');
    });
  });
}) ;

describe('Shape', () => {
  describe('Circle', () => {
    it('Should return the shape of "circle"', () => {
      const shape = new Circle()
      expect(shape.shape.split(' ')[0]).toEqual('circle');
    });
  });
});

describe('Shape', () => {
  describe('Background Color', () => {
    it('Should return the background color "#d9de6e"', () => {
      const shape = new Circle('BFG', '#381a6b', '#d9de6e');
      expect(shape.bgColor).toEqual('#d9de6e');
    });
  });
});

describe('Shape', () => {
  describe('Font Color', () => {
    it('Should return the font color "#381a6b"', () => {
      const shape = new Circle('BFG', '#381a6b', '#d9de6e');
      expect(shape.fontColor).toEqual('#381a6b');
    });
  });
});