import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBatteryHalf,
    faBurn,
    faSolarPanel
} from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './InfoBox.css';
import { InfoBoxProps } from './InfoBox.props';
import { isClassifiedHigh, isClassifiedLow } from '../../utils/IntensityCheck';
import greenLogo from '../../resources/images/icon_green_48.png';
import redLogo from '../../resources/images/icon_red_48.png';
import amberLogo from '../../resources/images/icon_amber_48.png';


function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
    const classes = useStyles();

    return (
        isClassifiedHigh(intensity) ?
            <div className={classes.highBox}>
                <img src={redLogo} alt="high-intensity-flash" />
                <Typography>
                    Carbon emissions are currently {intensity} in {region}...
                </Typography>
                <FontAwesomeIcon icon={faBurn} size="6x" className={classes.highIcon} />
                <Typography> Now might be a good time to unplug your laptop and use candles instead of lights!</Typography>
            </div> :
            isClassifiedLow(intensity) ?
                <div className={classes.lowBox}>
                    <img src={greenLogo} alt="low-intensity-flash" />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faSolarPanel} size="6x" className={classes.lowIcon} />
                    <Typography>
                        Now would be a great time to charge your devices or put the dishwasher on!
                    </Typography>
                </div> :
                <div className={classes.moderateBox}>
                    <img src={amberLogo} alt="moderate-intensity-flash" />
                    <Typography>
                        Carbon emissions are currently {intensity} in {region}...
                    </Typography>
                    <FontAwesomeIcon icon={faBatteryHalf} size="6x" className={classes.moderateIcon} />
                    <Typography>
                        Just keep doing what you are doing - maybe unplug if you are fully charged!
                    </Typography>
                </div>
    );
}

export { InfoBox };
