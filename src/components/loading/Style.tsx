import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    Loading: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.colorPrimary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Label: {
        fontSize: '3rem',
        color: theme.textColorPrimary,
    },
    SleepPerson: {
        left: 0,
        bottom: 0,
        fontSize: '25px',

        '& div': {
            backgroundColor: theme.textColorPrimary,
            borderColor: theme.textColorPrimary,
            color: theme.textColorPrimary,
        },
    },
});

export default styles;
