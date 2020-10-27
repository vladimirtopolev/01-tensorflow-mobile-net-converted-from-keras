# Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Project shows how you can utilize in TensorFlow.js
model converted from Keras model to compatable for Web version
using [convertor](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter) 

As an example it's a MobileNetV2 model. 
Since this model is supposed to be used only for inferring 
(without retraining basing on new train set and without any changes in model topology)
therefore it was converted in `tfjs-graph-model` (not in `tfjs-layers-model`) it helps
to reduce inferring time.

UX is very simple: app offers to upload any image which contents one
object and show 5 the most relevant predictions for this object.