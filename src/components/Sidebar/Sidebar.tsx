import React, {ReactElement, useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './Sidebar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import {fetchAllRegions} from "../../api/fetchCIData";
import {useCarbonResponseStateHook} from "../../hooks/CarbonResponseStateHook";

export default function Sidebar() : ReactElement {
    const classes = useStyles();
    const regionState = useCarbonResponseStateHook();

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                <div className={classes.toolbar} />
                <Divider />
                <Dropdown />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Pie Chart will go here</Typography>
                <Typography paragraph>Bar graph will go here</Typography>
                <Typography paragraph>Regional Map will go here</Typography>
            </main>
        </div>
    );
}
