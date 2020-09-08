import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { isClassifiedHigh, isClassifiedModerate } from '../../utils/IntensityCheck';
import { useStyles } from './IntensityDisplay.css';

function IntensityDisplay({ intensity }: {intensity: string;}): ReactElement {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" className={isClassifiedHigh(intensity) ? classes.high : isClassifiedModerate(intensity) ? classes.moderate : classes.low}>
                CARBON EMISSIONS ARE {intensity.toUpperCase()}!
            </Typography>
        </div>
    );
}

export { IntensityDisplay };
