import React, { ReactElement } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './Sidebar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { useCarbonResponseStateHook } from '../../hooks/CarbonResponseStateHook';
import { InfoBox } from '../InfoBox/InfoBox';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';
import { DonutChart } from '../DonutChart/DonutChart';
import { IntensityDisplay } from '../IntensityDisplay/IntensityDisplay';
import  projectGreenLogo from '../../resources/images/energy.png';

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
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <img src={projectGreenLogo} alt="project-green-logo" className={classes.logo}/>
                <Divider/>
                <Dropdown regName={state.selectedRegion.region} valueChanged={handleRegionChange}/>
                {state.selectedRegion.region.length > 0 ?
                    <div className={classes.infoDisplay}>
                        <IntensityDisplay intensity={filterByRegion(state.selectedRegion.region).intensity.index} />
                        <Divider/>
                        <InfoBox region={state.selectedRegion.region} intensity={filterByRegion(state.selectedRegion.region).intensity.index} />
                    </div> :
                    <Divider/>
                }
            </Drawer>
            <main className={classes.content}>
                {state.selectedRegion.region.length > 0 ? <DonutChart region={state.selectedRegion}/> : null}
            </main>
        </div>
    );
}
