import React, {useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';

export default () => {
    const [memoryState, setMemoryState] = useState<{ numBytes: number, numTensors: number }>({
        numBytes: tf.memory().numBytes,
        numTensors: tf.memory().numTensors
    });

    useEffect(() => {
        setMemoryState(() => ({
            numBytes: tf.memory().numBytes,
            numTensors: tf.memory().numTensors
        }));
    });

    return (
        <div style={{
            background: '#F9C153',
            padding: 10
        }}>
            <div>Count of tensors: <b>{memoryState.numTensors}</b></div>
            <div>Tensors in bytes: <b>{memoryState.numBytes}</b></div>
        </div>
    )
}