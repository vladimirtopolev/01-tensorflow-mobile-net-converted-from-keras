import {useEffect, useState} from 'react';
import {GraphModel} from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';

export default function useUploadModel() {
    const [model, setModel] = useState<{ model: GraphModel | null, isLoading: boolean }>({
        model: null,
        isLoading: false
    });
    useEffect(() => {
        setModel(state => ({...state, isLoading: true}));
        (async () => {
            const model = await tf.loadGraphModel('/models/mobileNetV2/tfjs_graph_model/model.json');
            setModel(state => ({isLoading: false, model}));
        })();
    }, []);

    return model;
};