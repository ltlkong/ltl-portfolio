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
        color: theme.colorPrimary,
        '& h1': {
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            width: '100%',
            marginBottom: '2vh',
        },
    },
});

export default styles;
