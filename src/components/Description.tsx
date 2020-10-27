import React from 'react';
import {Box, Typography} from '@material-ui/core';
export default () => {
    return (
        <Box style={{
            maxWidth: 1000,
            margin: '10px auto'
        }}>
            <Typography
                align="center"
                variant="h4">
                MobileNet model converted from Keras model
            </Typography>
        </Box>
    )
}