# Something something PyTorch

# Polite phrase + respect phrase
Hi, and welcome to my talk entitled "Fantastic gradients and where to find them". I am happy to see all of you here, and that you also find deep learning enough faschinating to spend your tuesday evening hopefully improving your skills withing the field. Are anyone of you currently working on a deep learning project, on your spare time or for your studies/work? 

# Attention grabber

...great, who are already working in PyTorch? Who are working in TensorFlow? Any other frameworks? Keras?

Cool, choosing the right framework for your task might be an important factor for your success, and there are many frameworks to choose from. (pic). (some comments, these are mainly frameworks backed by big corporations. And Theano for some reason.)

...okay but the choice should be easy - just stick with the market leader, right? See here, it's TensorFlow (stats pic). These are all probably microsoft employees right? (Point to CNTK bar).

And yet this is what happened since PyTorch was introduced (trends pic). This is why I am here.

# Subject/agenda
The purpose of this session is to get familiar with Pytorch

# Objective

- Get properly introduced to PyTorch

Before we begin, perhaps I should introduce myself. I am Mårten Nilsson.

# Build ethos
I currently work with deep learning systems at Tobii, a computer vision company doing eye tracking in VR/AR/Real reality. Since I discovered PyTorch one and a half year ago, I've used it in many projects. I have trained LSTMs for predicting scores of yelp reviews, bult GANs and VAEs for image generation systems. I have trained gaze prediction systems in Torch at Tobii, even though my current project uses TensorFlow, and I have done some other minor projects and prototypes in it.

# Practical info
This is a small informal introduction to PyTorch. I will refer a lot to TensorFlow for comparisons as it is the current market leader. Pleas ask any questions as we go.

So the first question we need to ask ourselves before digging down is, why do we even need a library for deep learning. What is it that makes deep learning hard?

# Content #1: Basics - fantastic gradients and where to find them (or from Numpy to Torch)
_Going from building a neural network in numpy to doing the same thing in Torch, emphasize that the only real difference is that the gradients are easier to get and you can do stuff on the gpu_
_Nag about how some deep learning frameworks (TensorFlow, TF.js, CNTK etc.) hide gradients from you. This is a bad abstraction, since gradients are the one thing (litteraly the ONE THING, except for some linear algebra and stuff of course) you need to build amazing neural networks_

# Content #2: Building complex models - best practices and utilities
_Go through modules, optimizers, data loaders and existing models_

# Content #3: Going crazy, try doing this in tensorflow
_Show what you get with the freedom of torch. Candidate: FC network with random depth and masked out gradients_
# Content #4: Making it real, going C++ and/or distributed
_Yeh this seems nice but I need it to go fast and distributed! -Mention the C++ api and the support for distributed training. Facebook uses PyTorch in production. (Quote Yann LeCun to get some extra ethos?)_
_Also mention portability/ONNX_

# Questions
Before I summarize, do we have any questions?

# Summary

# Confirm objectives

# Final (limbic uppercut)
With a core team smaller than the Google team maintaining TensorBoard, PyTorch have emerged as an amazing deep learning tool that have already knocked out TensorFlow as the clear market leader despite their first-move-advantage. Isn't that the perfect underdog story?

