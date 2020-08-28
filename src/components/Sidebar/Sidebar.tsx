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

export default function Sidebar(): ReactElement {
    const classes = useStyles();

    const { state,
        regionNames,
        regionData,
        regName,
        setRegion,
        handleRegionChange } = useCarbonResponseStateHook();

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
                <Dropdown/>
                {/* {regName.length > 0 ? <InfoBox region={regName} intensity={filterByRegion(regName).intensity.index} /> : null} */}
                {/* {state.selectedRegion != null ? <InfoBox region={filterByRegion(regName).region} intensity={filterByRegion(regName).intensity.index} /> : null} */}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>Pie Chart will go here</Typography>
                <Typography paragraph>Bar graph will go here</Typography>
                <Typography paragraph>Regional Map will go here</Typography>
            </main>
        </div>
    );
}
