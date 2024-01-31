const { Triangle, Square, Circle } = require('../lib/shapes.js');

// Test each shape for the first word in the {this.shape} string

describe('Shape', () => {
  describe('Triangle', () => {
    it('Should return the shape of "polygon"', () => {
      const shape = new Triangle()
      expect(shape.shape.split(' ')[0]).toEqual('polygon');
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
}) ;