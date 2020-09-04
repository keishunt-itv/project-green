import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';

export function PieChart({ region }: { region: CarbonIntensityRegion }) : ReactElement {
    return (
        <Paper>
            <Typography variant="h6">Fuel Mix for {region.region} </Typography>
            <Chart
                data={region.generationMix}
            >
                <PieSeries
                    valueField="perc"
                    argumentField="fuel"
                    innerRadius={0.6}
                />
                <Animation />
            </Chart>
        </Paper>
    );
}
