# Something something PyTorch

# Polite phrase + respect phrase

# Attention grabber
_Google trends? Some quote about TensorFlow being estimated as the market leader for at least five years - yet PyTorch is cathing up and from the looks of it are about to beat the crap out of TensorFlow_

# Subject/agenda
The purpose of this session is to get familiar with Pytorch

# Objectives

- Understand the fundamentals of PyTorch
- Know what utilities there are and when to use them
- Understand when abstractions are bad for you

# Build ethos
I currently work with deep learning systems at Tobii. Since I discovered PyTorch one and a half year ago, I've used it in many projects. I have trained LSTMs for predicting scores of yelp reviews, bult GANs and VAEs for image generation systems. I have trained gaze prediction systems in Torch at Tobii, even though my current project uses TensorFlow, and I have done some other minor projects and prototypes in it.

# Practical info
This is a small informal introduction to PyTorch, pleas ask any questions that come up as we go. Let's begin with some history to get some perspectibe on where we are.

# Content #1: History, Deep Learning Frameworks - a game of thrones
# Content #2: Basics - fantastic gradients and where to find them (or from Numpy to Torch)
_Going from building a neural network in numpy to doing the same thing in Torch, emphasize that the only real difference is that the gradients are easier to get and you can do stuff on the gpu_
_Nag about how some deep learning frameworks (TensorFlow, TF.js, CNTK etc.) hide gradients from you. This is a bad abstraction, since gradients are the one thing (litteraly the ONE THING, except for some linear algebra and stuff of course) you need to build amazing neural networks_
# Content #3: Building complex models - best practices and utilities
# Content #4: Going crazy, try doing this in tensorflow
_Show what you get with the freedom of torch. Candidate: FC network with random depth and masked out gradients_
# Content #5: Making it real, going C++ and/or distributed
_Yeh this seems nice but I need it to go fast and distributed! -Mention the C++ api and the support for distributed training. Facebook uses PyTorch in production. (Quote Yann LeCun to get some extra ethos?)_
_Also mention portability/ONNX_

# Questions
Before I summarize, do we have any questions?

# Summary

# Confirm objectives

# Final (limbic uppercut)
With a core team smaller than the Google team maintaining TensorBoard, PyTorch have emerged as an amazing deep learning tool that have already knocked out TensorFlow as the clear market leader despite their first-move-advantage. Isn't that the perfect underdog story?

