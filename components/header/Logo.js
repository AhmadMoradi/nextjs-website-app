import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        'max-height': '80px',
    }
});

export default function Logo() {
    const classes = useStyles();
    return (
        <img className={classes.root} src="/images/monkey.png" alt="logo-monkey"/>
    );
}