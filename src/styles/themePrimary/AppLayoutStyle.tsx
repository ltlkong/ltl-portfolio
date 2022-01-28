import { ThemePrimary } from './';

const styles = (theme: ThemePrimary) => ({
    Button: {
        backgroundColor: theme.colorPrimary,
    },
    Container: {
        display: 'flex',
        justifyContent: 'center',
    },
});

export default styles;
