import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    active: {
        borderBottom: '3px solid tomato',
    }
}));


const recipeList = [
    {id: 'snay65tgm0k', title: "Spice Cookies", path: "/recipes/granny-s-spice-cookies", isActive: false,},
    {id: 'p03xr7xde5', title: "Potato Cake", path: "/recipes/contest-winning-chocolate-potato-cake", isActive: false,},
    {id: 'a57k15or3sc', title: "Blackberry Cake", path: "/recipes/blackberry-orange-cake", isActive: true,},
];


export default function HeaderBottom(props) {
    const classes = useStyles();
    const {recipe} = props;
    const menuItems = recipeList.map(menu => (
        <Link
            href={menu.path}
            variant="body2"
            color="inherit"
            key={menu.id}
            className={recipe.id === menu.id ? classes.active : ''}
        >{menu.title}</Link>
    ));

    return (
        <Box py={1} {...props}>
            <Typography className={classes.root}>
                {menuItems}
            </Typography>
        </Box>
    );
}