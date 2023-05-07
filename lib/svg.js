const { Circle, Triangle, Square } = require('../lib/shapes');

class SVG {
    constructor(text = '', textColor = '', shape = '', shapeColor = '') {
        this.text = text;
        this.textColor = textColor
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setText(text, textColor) {
        if (text.length > 3){
            throw new Error ("Text must not exceed 3 characters.")
        }
            this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    setShape(shape) {
        console.log(this.shape)
        this.shape = shape.render();
    }
  
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}
module.exports = SVG;