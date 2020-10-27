import React from 'react';
import {Box, CircularProgress} from '@material-ui/core';

export default ({text}: { text?: string }) => {
    return (
        <Box style={{
            textAlign: 'center',
        }}>
            <CircularProgress/>
            {text && <div>{text}</div>}
        </Box>
    );
}
