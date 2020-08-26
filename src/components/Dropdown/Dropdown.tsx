import React, { ReactElement, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { useDropDownStyles } from './Dropdown.css';
import { InfoBox } from '../InfoBox/InfoBox';

function Dropdown(): ReactElement {
    const classes = useDropDownStyles();
    const regionNames = [
        'North Scotland',
        'South Scotland',
        'North East England',
        'North West England',
        'North Wales & Merseyside',
        'South Wales',
        'West Midlands',
        'East Midlands',
        'South East England',
        'London',
        'East England',
        'South England',
        'South West England',
        'Yorkshire'
    ];

    const [region, setRegion] = useState('');
    const regionNamesMapped = (regionName: string) => (
        <MenuItem key={regionName} value={regionName}>
            {regionName}
        </MenuItem>
    );
    const handleChange = (event: any) => {
        setRegion(event.target.value);
    };
    function sortAlphabetically(regionArray : Array<string>) : Array<string> {
        return regionArray.sort((a, b) => a.localeCompare(b));
    }
    // wanted to do this rather than hardcode but electron was not playing nice
    // const fetchRegionNames = () => {
    //   (async () => {
    //     const regions: Array<string> = [];
    //     const getRegionNames = await fetchCIData();
    //     if (getRegionNames) {
    //       getRegionNames.map((value) => regions.concat(value.region));
    //     }
    //   })();
    // useEffect(() => {
    //   (async () => {
    //     try {
    //       let newRegions: Array<string> = [];
    //       const regionsApi = await fetchAllRegions();
    //       if (regionsApi) {
    //         newRegions.concat(regionsApi.map((value) => value.region));
    //         console.log(`new regions ... ${newRegions}`)
    //         setRegionNames(newRegions);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();
    // });

    //   function fetchRegionNames() {
    //       (async () => {
    //         const regions: Array<string> = [];
    //         const getRegionNames = await fetchCIData();
    //         if (getRegionNames) {
    //           getRegionNames.map((value) => regions.concat(value.region));
    //           setRegionNames(regions)
    //         }
    //         return regions
    //       })()
    //   }
    // };

    return (
        <>
            <FormControl className={classes.formControl}>
                <Select
                    value={region}
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
                {region.length > 0 ? <InfoBox region={region} intensity="very high" /> : null}
            </div>
        </>
    );
}

export { Dropdown };
