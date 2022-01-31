import { ThemePrimary } from './themePrimary';

const styles = (theme: ThemePrimary) => ({
    Nav: {
        composes: 'd-flex flex-column fw-bolder',
        right: '10%',
        top: '10%',

        '& a': {
            display: 'list-item',
            padding: '.1em',
            fontSize: '.8em',
            color: theme.textColorPrimary,
            '&:hover': {
                color: theme.colorSecondary,
            },
        },

        '& .active': {
            color: theme.colorSecondary,
            listStyle: 'square',
        },
    },
    Bookmark: {
        composes: 'position-absolute',
        top: '-3vh',
        left: '8vw',
        backgroundColor: theme.colorNight,
        width: '50px',
        height: '15vh',
        '& h1': {
            fontSize: '35px',
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            width: '100%',
            marginBottom: '2vh',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundColor: theme.backgroundColorHome,
        },
    },
});

export default styles;
