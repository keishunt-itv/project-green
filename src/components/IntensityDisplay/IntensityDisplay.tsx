import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

function IntensityDisplay({ intensity }: {intensity: string;}): ReactElement {
    return (
        <div>
            <Typography variant="h5">
                CARBON EMISSIONS ARE {intensity.toUpperCase()}!
            </Typography>
        </div>
    );
}

export { IntensityDisplay };
