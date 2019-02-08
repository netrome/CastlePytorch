import React from "react";
import ReactDOM from "react-dom";

var utils = require("./utils.js");

const Intro = utils.Intro;
const BulletSlide = utils.BulletSlide;
const ImageSlide = utils.ImageSlide;


const presentation = [
    <Intro />,
    <BulletSlide title="Yo" items={["Hej", "Haj"]} />,
    <BulletSlide title="Yo flo sho" items={["Hej sho", "Haj"]} />,
    <ImageSlide src="http://res.cloudinary.com/sagacity/image/upload/c_crop,h_800,w_616,x_0,y_0/c_scale,w_640/v1419879339/iVegJ35_xfjlfu.gif"/>,
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
