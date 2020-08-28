import React, { ReactElement, useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { useDropDownStyles } from './Dropdown.css';
import { InfoBox } from '../InfoBox/InfoBox';
import { fetchAllRegions } from '../../api/fetchCIData';
import { ciResponse, mockRegionNames } from '../../mocks/MockCarbonResponse';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';

function Dropdown(): ReactElement {
    const initialRegionData : CarbonIntensityRegion[] = ciResponse;
    const classes = useDropDownStyles();
    const [regionNames, setRegionNames] = useState(['']);
    const [regName, setRegion] = useState('');
    const [regionData, setRegionData] = useState(initialRegionData);
    const regionNamesMapped = (regionName: string) => (
        <MenuItem key={regionName} value={regionName}>
            {regionName}
        </MenuItem>
    );
    const handleChange = (event: any) => {
        setRegion(event.target.value);
    };

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        (async () => {
            try {
                const regionsApi = await fetchAllRegions();
                if (regionsApi) {
                    const newRegions : Array<string> = regionsApi.map(( { region }) => region);
                    setRegionNames(newRegions);
                    setRegionData(regionsApi);
                }
            } catch (error) {
                setRegionNames(mockRegionNames);
                throw new Error(error);
            }
        })();
    }, []);

    function sortAlphabetically(regionArray : Array<string>) : Array<string> {
        return regionArray.sort((a, b) => a.localeCompare(b));
    }
    function filterByRegion(regionName : string) : CarbonIntensityRegion {
        const filteredRegion = regionData.filter(value => value.region === regionName);
        return filteredRegion[0];
    }

    return (
        <>
            <FormControl className={classes.formControl}>
                <Select
                    value={regName}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled>
          Select a Region:
                    </MenuItem>
                    {sortAlphabetically(regionNames).map(regionNamesMapped)}
                </Select>
            </FormControl>
            <Divider />
            <div>
                {regName.length > 0 ? <InfoBox region={regName} intensity={filterByRegion(regName).intensity.index} /> : null}
            </div>
        </>
    );
}

export { Dropdown };
