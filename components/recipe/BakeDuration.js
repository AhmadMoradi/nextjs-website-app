import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        margin: '2rem 0 1rem',
        '& > * + *': {
            marginLeft: theme.spacing(5),
        },
    },
}));

export default function BakeDuration() {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="center"
            className={classes.box}
        >
            <Grid item >
                <Box>
                    <Typography variant="caption">PREP</Typography>
                    <Typography variant="subtitle1">10 mins</Typography>
                </Box>
            </Grid>

            <Grid item>
                <Box>
                    <Typography variant="caption">BAKE</Typography>
                    <Typography variant="subtitle1">1 hr</Typography>
                </Box>
            </Grid>

            <Grid item>
                <Box>
                    <Typography variant="caption">TOTAL</Typography>
                    <Typography variant="subtitle1">1 hr 10 min</Typography>
                </Box>

            </Grid>
        </Grid>
    );
}