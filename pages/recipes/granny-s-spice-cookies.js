import RecipeLayout from "../../components/recipe/RecipeLayout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Head from 'next/head';

import RecipeImage from "../../components/recipe/RecipeImage";
import BakeDuration from "../../components/recipe/BakeDuration";
import BakeMakes from '../../components/recipe/BakeMakes';


const  recipe = {
    id: 'snay65tgm0k',
    title: `Granny’s Spice Cookies`,
    body: `This blueberry buckle recipe came from my grandmother. As children, my sister and I remember going to Pennsylvania for blueberry picking. Mother taught us to pick only perfect berries, and those gems went into this wonderful recipe. —Carol Dolan Mt. Laurel, New Jersey`,
    duration: {
        prep: '10 min',
        bake: '1 hr',
        total: '1 hr 10 min'
    },
    makes: '4 dozen',
    src: '/images/recipes/spice-cookies.jpg'
}

export default function GrannySSpiceCookies(){
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

                            <BakeDuration duration={recipe.duration} />

                            <hr />

                            <Grid container spacing={2} alignItems="center">
                                <Grid container item xs={6}> <BakeMakes makes={recipe.makes} /></Grid>
                                <Grid container item xs justify="space-around">
                                    <Grid item> <Button size="small" variant="outlined">SAVE RECIPE</Button> </Grid>
                                    <Grid item> <Button size="small" variant="outlined">PRINT</Button> </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={6}>
                            <RecipeImage src={recipe.src} />
                        </Grid>
                    </Grid>
                </Container>
            </RecipeLayout>
        </>
    );
}