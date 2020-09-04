import React, { ReactElement } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './Sidebar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { useCarbonResponseStateHook } from '../../hooks/CarbonResponseStateHook';
import { InfoBox } from '../InfoBox/InfoBox';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';
import { PieChart } from '../PieChart/PieChart';

export default function Sidebar(): ReactElement {
    const classes = useStyles();

    const {
        state,
        regionData,
        handleRegionChange
    } = useCarbonResponseStateHook();

    function filterByRegion(regionName : string) : CarbonIntensityRegion {
        const filteredRegion = regionData.filter(value => value.region === regionName);
        return filteredRegion[0];
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Project Green
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <Dropdown regName={state.selectedRegion.region} valueChanged={handleRegionChange}/>
                {state.selectedRegion.region.length > 0 ? <InfoBox region={state.selectedRegion.region} intensity={filterByRegion(state.selectedRegion.region).intensity.index} /> : null}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {state.selectedRegion.region.length > 0 ? <PieChart region={state.selectedRegion}/> : null}
                <Typography paragraph>Bar graph will go here</Typography>
                <Typography paragraph>Regional Map will go here</Typography>
            </main>
        </div>
    );
}
