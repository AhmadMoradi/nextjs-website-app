import RecipeLayout from "../../components/recipe/RecipeLayout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RecipeImage from "../../components/recipe/RecipeImage";

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

                        <hr />
                    </Grid>

                    <Grid item md={6}>
                        <RecipeImage />
                    </Grid>
                </Grid>
            </Container>
        </RecipeLayout>
    );
}