import React, {ReactElement} from 'react';
import {Box} from '@material-ui/core';

export type ResultType = {
    probability: Number,
    label: String
};

export default ({results}: { results: ResultType[] | null }): ReactElement => {
    return (
        <Box style={{
            maxWidth: 600,
            margin: '10px auto 0 auto'
        }}>
            {results
            && results.length > 0
            && results.map((item, i) => (
                <div key={i}>
                    <span style={{fontWeight:'bold'}}>{item.label}</span> with probability {item.probability.toFixed(5)}
                </div>
            ))}
        </Box>
    );
}