import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        highIcon: {
            color: 'red'
        },
        lowIcon: {
            color: 'green'
        },
        moderateIcon: {
            color: 'orange'
        },
        highBox: {
            backgroundColor: '#fcd7d7',
            borderRadius: '25px',
            border: '2px solid #cf928f',
            padding: '2px',
            marginTop: '5px'
        },
        lowBox: {
            backgroundColor: '#ebfcd9',
            borderRadius: '25px',
            border: '2px solid #80bd85',
            padding: '2px',
            marginTop: '5px'
        },
        moderateBox: {
            backgroundColor: '#fff0d1',
            borderRadius: '25px',
            border: '2px solid #e6c585',
            padding: '2px',
            marginTop: '5px'
        }
    }));
