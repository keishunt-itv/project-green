import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { InfoBoxProps } from './InfoBox.props';

function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
    return (
        <div>
            <Typography>
                Hello {region} at the moment your carbon emissions are {intensity} !
            </Typography>
        </div>
    );
}

export { InfoBox };
