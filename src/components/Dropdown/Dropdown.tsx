import React, { ReactElement } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { useDropDownStyles } from './Dropdown.css';
import { InfoBox } from '../InfoBox/InfoBox';
import { useCarbonResponseStateHook } from '../../hooks/CarbonResponseStateHook';

function Dropdown(): ReactElement {
    const classes = useDropDownStyles();
    const {
        state,
        regionNames,
        regName,
        setRegion,
        handleRegionChange
    } = useCarbonResponseStateHook();
    const regionNamesMapped = (regionName: string) => (
        <MenuItem key={regionName} value={regionName}>
            {regionName}
        </MenuItem>
    );
    const handleChange = (event: any) => {
        setRegion(event.target.value);
        handleRegionChange(event.target.value);
    };

    function sortAlphabetically(regionNameArray: Array<string>): Array<string> {
        return regionNameArray.sort((a, b) => a.localeCompare(b));
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
            <Divider/>
            <div>
                {/* these work in here but not in sidebar... */}
                {/* {regName.length > 0 ? <InfoBox region={regName} intensity={filterByRegion(regName).intensity.index} /> : null} */}
                {state.selectedRegion != null ? <InfoBox region={state.selectedRegion?.region}
                    intensity={state.selectedRegion?.intensity.index}/> : null}
            </div>
        </>
    );
}

export { Dropdown };
