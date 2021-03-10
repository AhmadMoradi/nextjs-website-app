import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '& img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '400px',
        }
    },
});

export default function RecipeImage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src="/images/recipes/spice-cookies.jpg" />
        </div>
    );
}