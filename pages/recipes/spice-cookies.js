import RecipeLayout from "../../components/recipe/RecipeLayout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import RecipeImage from "../../components/recipe/RecipeImage";
import BakeDuration from "../../components/recipe/BakeDuration";
import BakeMakes from '../../components/recipe/BakeMakes';

export default function SpiceCookies(){
    return (
        <RecipeLayout>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Box mb={6}>
                            <Typography variant="h3" component="h1">Granny’s Spice Cookies</Typography>
                        </Box>

                        <Box mb={2}>
                            <Typography variant="body1" component="p">
                                This blueberry buckle recipe came from my grandmother. As children, my sister and I remember going to Pennsylvania for blueberry picking. Mother taught us to pick only perfect berries, and those gems went into this wonderful recipe. —Carol Dolan Mt. Laurel, New Jersey
                            </Typography>
                        </Box>

                        <BakeDuration />

                        <hr />

                        <Grid container spacing={2} alignItems="center">
                            <Grid container item xs="6"> <BakeMakes /></Grid>
                            <Grid container item xs justify="space-around">
                                <Grid item> <Button size="small" variant="outlined">SAVE RECIPE</Button> </Grid>
                                <Grid item> <Button size="small" variant="outlined">PRINT</Button> </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={6}>
                        <RecipeImage />
                    </Grid>
                </Grid>
            </Container>
        </RecipeLayout>
    );
}