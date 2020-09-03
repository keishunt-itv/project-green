import React, { ReactElement } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import { useDropDownStyles } from './Dropdown.css';
import { useCarbonResponseStateHook } from '../../hooks/CarbonResponseStateHook';

function Dropdown({ regName, valueChanged }: { regName: string, valueChanged: (regName: string) => void }): ReactElement {
    const classes = useDropDownStyles();
    const { regionNames } = useCarbonResponseStateHook();
    const regionNamesMapped = (regionName: string) => (
        <MenuItem key={regionName} value={regionName}>
            {regionName}
        </MenuItem>
    );
    const handleChange = (event: any) => {
        valueChanged(event.target.value);
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
            </div>
        </>
    );
}

export { Dropdown };
