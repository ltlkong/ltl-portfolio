import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    Bookmark: {
        composes: 'position-absolute',
        top: '-3vh',
        left: '8vw',
        backgroundColor: theme.colorNight,
        width: '50px',
        height: '15vh',
        zIndex: 100,

        '& h1': {
            fontSize: '35px',
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            width: '100%',
            marginBottom: '2vh',
            color: 'transparent',
            backgroundClip: 'text',
        },
    },
});

export default styles;
