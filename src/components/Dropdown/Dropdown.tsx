import React, {ReactElement, useEffect, useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { useDropDownStyles } from './Dropdown.css';
import { InfoBox } from '../InfoBox/InfoBox';
import {fetchAllRegions, fetchCIData} from "../../api/fetchCIData";

function Dropdown(): ReactElement {
    const classes = useDropDownStyles();
    // const regionNames = [
    //     'North Scotland',
    //     'South Scotland',
    //     'North East England',
    //     'North West England',
    //     'North Wales & Merseyside',
    //     'South Wales',
    //     'West Midlands',
    //     'East Midlands',
    //     'South East England',
    //     'London',
    //     'East England',
    //     'South England',
    //     'South West England',
    //     'Yorkshire'
    // ];

    const [regionNames, setRegionNames] = useState(['']);
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

    // TODO api.regions is returning as undefined weirdly. not sure why because the data is there and mapped

    useEffect(() => {
        (async () => {
            try {
                // const regionsApi = await fetchCIData();
                const regionsApi = await fetchAllRegions();
                if (regionsApi) {
                    debugger;
                    console.log(regionsApi);
                    // const newRegions : Array<string> = regionsApi[0].regions.map(( { shortname }) => shortname);
                    let newRegions : Array<string> = regionsApi.map(( { shortname }) => shortname);
                    debugger;
                    console.log(`new regions ... ${newRegions}`);
                    setRegionNames(newRegions);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    });

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
