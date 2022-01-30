import { ThemePrimary } from './';

const styles = (theme: ThemePrimary) => ({
    Button: {
        backgroundColor: theme.colorPrimary,
    },
    Main: {},
    Nav: {
        right: '10%',
        top: '10%',
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bolder',

        '& a': {
            padding: '0.1em',
            fontSize: '1.2em',
            color: theme.textColorPrimary,
            '&:hover': {
                color: theme.colorSecondary,
            },
        },
    },
    Bookmark: {
        position: 'absolute',
        top: '-3vh',
        left: '8vw',
        backgroundColor: theme.colorNight,
        width: '50px',
        height: '15vh',
    },
});

export default styles;
