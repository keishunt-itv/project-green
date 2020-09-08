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
import { useStyles } from './InfoBox.css';
import { InfoBoxProps } from './InfoBox.props';
import { isClassifiedHigh, isClassifiedLow } from '../../utils/IntensityCheck';

function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
    const classes = useStyles();

    return (
        isClassifiedHigh(intensity) ?
            <div className={classes.highBox}>
                <FontAwesomeIcon icon={faBurn} size="6x" className={classes.highIcon} />
                <Typography>
                    Carbon emissions are currently {intensity} in {region}...
                </Typography>
                <FontAwesomeIcon icon={faFrown} size="6x" className={classes.highIcon} />
                <Typography> Now might be a good time to unplug your laptop and use candles instead of lights!</Typography>
            </div> :
            isClassifiedLow(intensity) ?
                <div className={classes.lowBox}>
                    <FontAwesomeIcon icon={faSolarPanel} size="6x" className={classes.lowIcon} />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faLaughBeam} size="6x" className={classes.lowIcon}/>
                    <Typography>
                        Now would be a great time to charge your devices or put the dishwasher on!
                    </Typography>
                </div> :
                <div className={classes.moderateBox}>
                    <FontAwesomeIcon icon={faBatteryHalf} size="6x" className={classes.moderateIcon} />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faBalanceScale} size="6x" className={classes.moderateIcon} />
                    <Typography>
                        Just keep doing what you are doing - maybe unplug if you are fully charged!
                    </Typography>
                </div>
    );
}

export { InfoBox };
