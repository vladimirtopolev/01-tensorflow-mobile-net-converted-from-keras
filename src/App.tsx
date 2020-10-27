import React, {ReactElement, useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import {Tensor2D} from '@tensorflow/tfjs';
import {ImageType} from './components/InputFile';
import {labels} from './labels';
import useUploadModel from './hooks/useUploadModel';
import ModelLayout from './components/ModelLayout';
import RenderResults, {ResultType} from './components/RenderResults';
import ImageEditor from './components/ImageEditor';
import Description from './components/Description';
import TensorflowMemoryState from './components/TensorflowMemoryState';

export default function App(): ReactElement {
    const {isLoading, model} = useUploadModel();
    const [image, setImage] = useState<ImageType>();
    const [results, setResults] = useState<ResultType[]>([]);

    useEffect(() => {
        tf.tidy(() => {
            if (image?.image && model) {
                (async () => {
                    const offset = tf.scalar(127.5);
                    const input = tf.browser.fromPixels(image.image)
                        .resizeNearestNeighbor([224, 224])  // make image compatable with model input
                        .sub(offset).div(offset)  // feature scale tensor image to range [-1, 1]
                        .toFloat()
                        .expandDims();
                    const output = model.predict(input) as Tensor2D;
                    const results = Array.from(await output.data())
                        .map((item, i) => ({probability: item, label: labels[i]}))
                        .sort((a1, a2) => a2.probability - a1.probability)
                        .slice(0, 5);
                    setResults(results);
                })();
            }
        });
    }, [image, model]);

    return (
        <>
            <Description/>
            <ModelLayout isLoading={isLoading} textDuringUploadModel="Uploading Model">
                <>
                    <ImageEditor image={image} setImage={setImage}/>
                    <RenderResults results={results}/>
                    <TensorflowMemoryState/>
                </>
            </ModelLayout>
        </>
    );
};