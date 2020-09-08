import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        highBox: {
            backgroundImage: 'linear-gradient(MistyRose, #d1a8a3)',
            borderRadius: '25px',
            border: '2px solid #cf928f',
            padding: '2px',
            marginTop: '5px'
        },
        lowBox: {
            backgroundImage: 'linear-gradient(Honeydew, LightGreen)',
            borderRadius: '25px',
            border: '2px solid #80bd85',
            padding: '2px',
            marginTop: '5px'
        },
        moderateBox: {
            backgroundImage: 'linear-gradient(antiquewhite, Moccasin)',
            borderRadius: '25px',
            border: '2px solid #e6c585',
            padding: '2px',
            marginTop: '5px'
        }
    }));
