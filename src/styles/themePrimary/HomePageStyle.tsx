import { ThemePrimary } from './';

const styles = (theme: ThemePrimary) => ({
    Home: {
        backgroundColor: theme.colorSecondary,
        height: '100vh',
        '& h1': {
            margin: 0,
        },
    },
});

export default styles;
