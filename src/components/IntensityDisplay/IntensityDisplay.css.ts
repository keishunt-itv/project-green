import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        high: {
            color: '#6b2b28'
        },
        low: {
            color: '#286b2f'
        },
        moderate: {
            color: '#b08204'
        }
    }));
