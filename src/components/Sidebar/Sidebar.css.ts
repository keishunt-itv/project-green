import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 250;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3)
        },
        logo: {
            height: '100px',
            width: '100px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        infoDisplay: {
            borderRadius: '25px',
            padding: '5px'
        }
    }));
