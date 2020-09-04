import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBalanceScale,
    faBatteryHalf,
    faBurn,
    faFrown,
    faLaughBeam,
    faSolarPanel
} from '@fortawesome/free-solid-svg-icons';
import { InfoBoxProps } from './InfoBox.props';
import { isClassifiedHigh, isClassifiedLow } from '../../utils/IntensityCheck';

function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
    return (
        isClassifiedHigh(intensity) ?
            <div>
                <FontAwesomeIcon icon={faBurn} size="6x" style={{ color: 'red' }} />
                <Typography>
                    Carbon emissions are currently {intensity} in {region}...
                </Typography>
                <FontAwesomeIcon icon={faFrown} size="6x" style={{ color: 'red' }} />
                <Typography> Now might be a good time to unplug your laptop and use candles instead of lights!</Typography>
            </div> :
            isClassifiedLow(intensity) ?
                <div>
                    <FontAwesomeIcon icon={faSolarPanel} size="6x" style={{ color: 'green' }} />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faLaughBeam} size="6x" style={{ color: 'green' }} />
                    <Typography>
                        Now would be a great time to charge your devices or put the dishwasher on!
                    </Typography>
                </div> :
                <div>
                    <FontAwesomeIcon icon={faBatteryHalf} size="6x" style={{ color: 'orange' }} />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faBalanceScale} size="6x" style={{ color: 'orange' }} />
                    <Typography>
                        Just keep doing what you are doing!
                    </Typography>
                </div>
    );
}

export { InfoBox };
