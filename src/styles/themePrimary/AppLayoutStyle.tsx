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
        },
    },
});

export default styles;
