const SVG = require('./lib/svg')
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    inquirer
    .prompt([
        {
        type: 'input',
        message: 'What would you like the text to be in your logo? (3 characters)',
        name: 'text',
        },
        {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textcolor',
        },
        {
        type: 'list',
        message: 'What shape would you like for your logo?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
        },
        {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapecolor',
        },
    ])
    .then((response) =>
        writeToFile(response))
};

function writeToFile(data) {

    const svg = new SVG();
    svg.setText(data.text, data.textcolor);
    let createdShape;
    if (data.shape === "circle") {
        createdShape = new Circle(data.shapecolor);
    } else if (data.shape === "triangle") {
        createdShape = new Triangle(data.shapecolor);
    } else if (data.shape === "square") {
        createdShape = new Square(data.shapecolor);
    }

    createdShape.setColor(data.shapecolor);
    svg.setShape(createdShape)
    fs.writeFile('logo.svg', svg.render(), (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Logo generated successfully');
        }
    });
}

init();
