import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { fetchAllRegions } from '../../api/fetchCIData';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';

export interface InfoBoxProps {
  region: string;
  intensity: string;
}
function InfoBox({ region, intensity }: InfoBoxProps): ReactElement {
    async function getRegionalInfo(regionName: string): Promise<CarbonIntensityRegion[]> {
        const regionData = await fetchAllRegions();
        console.log(regionData);
        return regionData.filter(value => value.shortname === regionName);
    }
    return (
        <div>
            <Typography>
        Hello {region} at the moment your carbon emissions are {intensity} !
            </Typography>
        </div>
    );
}

export { InfoBox };
