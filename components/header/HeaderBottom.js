import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


export default function HeaderBottom(props) {

    const classes = useStyles();
    return (
        <Box py={1} {...props}>
            <Typography className={classes.root}>
                <Link href="/recipes/spice-cookies" variant="body2" color="inherit">Spice Cookies</Link>
            </Typography>
        </Box>
    );
}