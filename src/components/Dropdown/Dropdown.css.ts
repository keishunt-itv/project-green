import { makeStyles } from '@material-ui/styles';

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/no-explicit-any
export const useDropDownStyles = makeStyles((theme: any) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));
