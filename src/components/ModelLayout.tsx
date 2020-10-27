import React, {ReactElement} from 'react';
import {Box} from '@material-ui/core';
import Loader from './Loader';

export default ({children, isLoading, textDuringUploadModel}: { children: ReactElement, isLoading: boolean, textDuringUploadModel?: string }) => {
    return (
        <Box style={{
            maxWidth: 1000,
            width: '100%',
            margin: '0 auto'
        }}>
            {isLoading && <Loader text={textDuringUploadModel}/>}
            {!isLoading && children}
        </Box>
    );
}