import React from "react";
import ReactDOM from "react-dom";

var utils = require("./utils.js");

const Intro = utils.Intro;
const BulletSlide = utils.BulletSlide;
const ImageSlide = utils.ImageSlide;


const presentation = [
    <Intro />,

    <ImageSlide src="http://localhost:5000/static/frameworks-map.png" />,
    <ImageSlide src="http://localhost:5000/static/frameworks.png" />,

    <div><br /><br /><br />
    <ImageSlide src="http://localhost:5000/static/pytorch-tensorflow-trends.png" extras="wide"/>
    </div>,

    <center><br /><h1><i>Fundamentals</i></h1></center>,

    <BulletSlide title="Ingredients" items={[]} />,
    <BulletSlide title="Ingredients" items={["Tensors"]} />,
    <BulletSlide title="Ingredients" items={["Tensors", "GPU Acceleration"]} />,
    <BulletSlide title="Ingredients" items={["Tensors", "GPU Acceleration", "Gradients"]} />,

    <ImageSlide src="http://localhost:5000/static/static-vs-dynamic.jpg" />,

    <ImageSlide src="http://localhost:5000/static/karpathy.png" extras="wide"/>,
];

function displaySlide(index){
    ReactDOM.render(
      <div>{presentation[index]}</div>,
      document.getElementById('root')
    );

};

var index = 0
displaySlide(index)

function onKeyDown(e){
    const keyName = e.key;

    if (keyName === 'ArrowRight'){
        index = Math.min(index + 1, presentation.length - 1);
    }

    if (keyName === 'ArrowLeft'){
        index = Math.max(index - 1, 0);
    }
    displaySlide(index);
};

document.addEventListener('keydown', onKeyDown, false);
