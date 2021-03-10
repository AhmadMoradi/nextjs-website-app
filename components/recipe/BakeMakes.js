import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function BakeMakes({makes}) {
    return (
        <>
            <Box>
                <Typography variant="caption">YIELD</Typography>
                <Typography variant="subtitle1">{makes}</Typography>
            </Box>
        </>
    );
}