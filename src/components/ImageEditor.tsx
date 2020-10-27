import React from 'react';
import {Box} from '@material-ui/core';
import InputFile, {ImageType} from './InputFile';
import styles from './ImageEditor.module.scss';

type ImageEditorProps = {
    image: ImageType | undefined,
    setImage: (image: ImageType) => void
}

export default ({image, setImage}: ImageEditorProps) => {
    return (
        <Box className={styles.Image}>
            <Box className={styles.Image__button}>
                <InputFile setImage={setImage}/>
            </Box>
            {!image && (
                <div className={styles.Image__textPlaceholder}>
                    Upload image....
                </div>)
            }
            {image && image.src && (
                <img
                    src={image.src}
                    alt="For model prediction"
                    className={styles.Image__image}
                />)
            }
        </Box>
    );
}