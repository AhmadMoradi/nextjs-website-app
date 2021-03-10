import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        '& > *': {
            padding: '0.3rem 0.5rem',
        }
    },
    active: {
        borderBottom: '3px solid tomato',
    }
}));


export default function HeaderTop(props) {

    const classes = useStyles();
    return (
        <Box pb={1} pt={3} {...props}>
            <Typography className={classes.root} >
                <Link href="/" variant="subtitle2">HOME</Link>
                <Link href="#" variant="subtitle2">SHOP</Link>
                <Link href="/recipes" variant="subtitle2" className={classes.active}>RECIPES</Link>
                <Link href="#" variant="subtitle2">ABOUT</Link>
            </Typography>
        </Box>
    );
}