import React from "react";
import ReactDOM from "react-dom";

var utils = require("./utils.js");

const Intro = utils.Intro;
const BulletSlide = utils.BulletSlide;
const ImageSlide = utils.ImageSlide;


const presentation = [
    <Intro />,

    // Attention grabber
    <ImageSlide src="http://localhost:5000/static/frameworks-map.png" />,
    <ImageSlide src="http://localhost:5000/static/frameworks.png" />,

    <div><br /><br /><br />
    <ImageSlide src="http://localhost:5000/static/pytorch-tensorflow-trends.png" extras="wide"/>
    </div>,

    // Subject/agenda
    <BulletSlide title="Agenda" items={[]} />,
    <BulletSlide title="Agenda" items={["Basics: From Numpy to low level PyTorch"]} />,
    <BulletSlide title="Agenda" items={["Basics: From Numpy to low level PyTorch", "High level PyTorch - making ourselves comfortable"]} />,
    <BulletSlide title="Agenda" items={["Basics: From Numpy to low level PyTorch", "High level PyTorch - making ourselves comfortable", "Scaling up to production"]} />,

    // Objective
    
    // Build ethos

    // Practical info

    // Begin

    <br />,
    <center><br /><h1><i>What makes deep learning hard?</i></h1></center>,

    <BulletSlide title="DL Frameworks consist of" items={[]} />,
    <BulletSlide title="DL Frameworks consist of" items={["Tensors"]} />,
    <BulletSlide title="DL Frameworks consist of" items={["Tensors", "GPU Acceleration"]} />,
    <BulletSlide title="DL Frameworks consist of" items={["Tensors", "GPU Acceleration", "Gradients"]} />,

    <BulletSlide title="Tensors" items={[]}/>,
    <BulletSlide title="Tensors" items={["Similar to Numpy arrays"]}/>,
    <BulletSlide title="Tensors" items={["Similar to Numpy arrays", "np.ndarray -> torch.Tensor"]}/>,

    <BulletSlide title="GPU acceleration" items={[]}/>,
    <BulletSlide title="GPU acceleration" items={["Explicit: .cuda()"]}/>,
    <BulletSlide title="GPU acceleration" items={["Explicit: .cuda()", "Upon construction: torch.<some function>(..., device='cuda:0')"]}/>,
    <BulletSlide title="GPU acceleration" items={["Explicit: .cuda()", "Upon construction: torch.<some function>(..., device='cuda:0')", "User responsible for writing device-agnostic code"]}/>,

    <BulletSlide title="Gradients" items={[]} />,
    <BulletSlide title="Gradients" items={["Single most important component of a DL framework"]} />,
    <BulletSlide title="Gradients" items={["Single most important component of a DL framework", "Difficult to implement"]} />,
    <BulletSlide title="Gradients" items={["Single most important component of a DL framework", "Difficult to implement", "A nightmare to debug"]} />,

    <BulletSlide title="Gradients in PyTorch" items={[]} />,
    <BulletSlide title="Gradients in PyTorch" items={["Scalar valued functions"]} />,
    <BulletSlide title="Gradients in PyTorch" items={["Scalar valued functions", "Computational graph"]} />,
    <BulletSlide title="Gradients in PyTorch" items={["Scalar valued functions", "Computational graph", '"Define by run"']} />,
    <ImageSlide src="http://localhost:5000/static/static-vs-dynamic.jpg" />,

    // Example
    <center><br /><h1><i>Demo: Building a perceptron with two layers</i></h1></center>,

    // Convenience
    <div><br /><br /><ImageSlide src="http://localhost:5000/static/inception.png" extras="wide" /></div>,
    <BulletSlide title="Making our lives easier" items={[]}/>,
    <BulletSlide title="Making our lives easier" items={["Composable models: torch.nn"]} />,
    <BulletSlide title="Making our lives easier" items={["Composable models: torch.nn", "Optimizers: torch.optim"]} />,
    <BulletSlide title="Making our lives easier" items={["Composable models: torch.nn", "Optimizers: torch.optim", "Multi threaded data loaders: torch.utils.data"]} />,
    <center><br /><h1><i>Demo: PyTorch in the real world</i></h1></center>,
    <ImageSlide src="http://localhost:5000/static/convenient.jpg" />,

    // Final notes
    <BulletSlide title="Scaling up" items={[]}/>,
    <BulletSlide title="Scaling up" items={["Native ONNX support"]}/>,  // One framework is not always the answer
    <BulletSlide title="Scaling up" items={["Native ONNX support", "Distributed training"]}/>,
    <BulletSlide title="Scaling up" items={["Native ONNX support", "Distributed training", "C++ front-end"]}/>,

    // Summary
    <BulletSlide title="Summary" items={[]}/>,
    <BulletSlide title="Summary" items={["Easy transition from numpy"]}/>,
    <BulletSlide title="Summary" items={["Easy transition from numpy", "High control over implementation details"]}/>,
    <BulletSlide title="Summary" items={["Easy transition from numpy", "High control over implementation details", "State of the art networks in just a few lines of code"]}/>,

    <div><br /><br /><br />
    <ImageSlide src="http://localhost:5000/static/pytorch-tensorflow-trends.png" extras="wide"/>
    </div>,

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
