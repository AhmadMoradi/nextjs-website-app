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
    title: `Contest-Winning Chocolate Potato Cake`,
    body: `I won grand champion honors in a potato festival baking contest with this moist chocolate cake. The icing recipe can be doubled for real sweet tooths. A great-grandma, I’ve spent over 85 years on the farm.`,
    duration: {
        prep: '40 min',
        bake: '25 min',
        total: '1 hr 5 min'
    },
    makes: '12 servings',
    src: '/images/recipes/contest-winning-chocolate-potato-cake.jpg'
}

export default function ContestWinningChocolatePotatoCake() {
    return (
        <>
            <Head>
                <title>{recipe.title}</title>
            </Head>
            <RecipeLayout>
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