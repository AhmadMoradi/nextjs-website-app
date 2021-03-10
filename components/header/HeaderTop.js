import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        '& > *': {
            padding: '0.3rem 0.5rem',
        }
    },
    active: {
        borderBottom: '3px solid tomato',
    }
}));


const menuList = [
    {id: "45timvnzjcy", title: "HOME", path: "/", isActive: false,},
    {id: "vqz81agpn9n", title: "SHOP", path: "#", isActive: false,},
    {id: "jg7xmh1dvbd", title: "RECIPES", path: "/recipes", isActive: true,},
    {id: "q8mxrl47qwq", title: "ABOUT", path: "#", isActive: false,}
];


export default function HeaderTop(props) {
    const classes = useStyles();

    const listItems = menuList.map(menu => (
        <Link
            href={menu.path}
            key={menu.id}
            variant="subtitle2"
            className={menu.isActive ? classes.active : ''}
        >{menu.title}</Link>
    ));

    return (
        <Box pb={1} pt={3} {...props}>
            <Typography className={classes.root}>
                {listItems}
            </Typography>
        </Box>
    );
}