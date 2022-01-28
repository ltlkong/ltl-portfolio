import { ThemePrimary } from './';

const styles = (theme: ThemePrimary) => ({
    Button: {
        backgroundColor: theme.colorPrimary,
    },
    Container: {
        display: 'flex',
        justifyContent: 'center',
    },
    Nav: {
        right: '10%',
        top: '10%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorPrimary,

        '& a': {
            padding: '0.5em',
            fontSize: '1.5em',
        },
    },
});

export default styles;
