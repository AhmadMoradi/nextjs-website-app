import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const useStyle = makeStyles({
    header: {
        position: 'relative'
    },
    logoCon: {
        position: 'absolute'
    },
    leftSpaced: {
        paddingLeft: '101px'
    },
    headerBottom: {
        backgroundColor: '#f8f5f0'
    }
});

export default function Header({recipe}) {
    const classes = useStyle();

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.logoCon}>
                    <Logo />
                </div>
                <HeaderTop className={classes.leftSpaced} />
            </Container>

            <div className={classes.headerBottom}>
                <Container>
                    <HeaderBottom className={classes.leftSpaced} recipe={recipe} />
                </Container>
            </div>
        </header>
    );
}