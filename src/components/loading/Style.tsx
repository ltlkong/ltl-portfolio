import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    '@keyframes flip': {
        '0%,80%': {
            transform: 'rotateY(360deg) ',
        },
    },

    Loading: {
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
