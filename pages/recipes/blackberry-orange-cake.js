import RecipeLayout from "../../components/recipe/RecipeLayout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import RecipeImage from "../../components/recipe/RecipeImage";
import BakeDuration from "../../components/recipe/BakeDuration";
import BakeMakes from '../../components/recipe/BakeMakes';
import Head from "next/head";


const recipe = {
    id: 'a57k15or3sc',
    title: `Blackberry-Orange Cake`,
    body: `My grandmother made luscious fruit pies and cobblers using blackberries from her garden. I decided to follow her lead and create a blackberry cake that's always lovely with a summer meal. —Lisa M. Varner, El Paso, Texas`,
    duration: {
        prep: '20 min',
        bake: '40 min',
        total: '1 hr'
    },
    makes: '10 servings',
    src: '/images/recipes/blackberry-orange-cake.jpg'
}

export default function ContestWinningChocolatePotatoCake() {
    return (
        <>
            <Head>
                <title>{recipe.title}</title>
            </Head>
            <RecipeLayout recipe={recipe}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <Box mb={6}>
                                <Typography variant="h3" component="h1">{recipe.title}</Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="body1" component="p">
                                    {recipe.body}
                                </Typography>
                            </Box>

                            <BakeDuration duration={recipe.duration}/>

                            <hr/>

                            <Grid container spacing={2} alignItems="center">
                                <Grid container item xs={6}> <BakeMakes makes={recipe.makes}/></Grid>
                                <Grid container item xs justify="space-around">
                                    <Grid item> <Button size="small" variant="outlined">SAVE RECIPE</Button> </Grid>
                                    <Grid item> <Button size="small" variant="outlined">PRINT</Button> </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6}>
                            <RecipeImage src={recipe.src}/>
                        </Grid>
                    </Grid>
                </Container>
            </RecipeLayout>
        </>
    );
}