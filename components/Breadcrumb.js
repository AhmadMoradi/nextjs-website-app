import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    test: {
        fontSize: '0.7rem'
    }
}));

export default function Breadcrumb({recipe}) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box p={2} pt={4}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    className={classes.test}
                >
                    <Link color="inherit" href="/recipes" >
                        RECIPES
                    </Link>
                    <Typography color="textPrimary" className={classes.test}>{recipe.title.toUpperCase()}</Typography>
                </Breadcrumbs>
            </Box>
        </Container>
    );
}
