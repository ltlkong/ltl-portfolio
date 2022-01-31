import { ThemePrimary } from './themePrimary';
import meW from '../assets/imgs/meW.png';

const styles = (theme: ThemePrimary) => ({
    Home: {
        backgroundColor: theme.backgroundColorHome,
        color: theme.textColorPrimary,

        '& h1': {
            margin: 0,
        },

        '& *::selection': {
            color: theme.colorPrimary,
            backgroundColor: theme.textColorPrimary,
        },
    },
    Section: {
        width: '100vw',
        height: '100vh',
    },
    Banner: {
        composes: 'd-flex align-items-center position-relative',
        height: '100vh',
        zIndex: 0,

        '&:after': {
            content: '""',
            backgroundImage: `url("${meW}")`,
            backgroundSize: '60vh',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            opacity: 0.7,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
        },
    },
    Introduction: {
        composes: 'col-md-6 ms-md-5 mb-sm-4',
        lineHeight: '1.5',
        fontSize: '1.6em',
        padding: '0 16px 0 16px',
        color: theme.textColorPrimary,
        fontFamily: theme.fontFamily,
    },
    EmploymentStatus: {
        fontSize: '.5em',
        color: 'rgb(33,53,90)',

        '& a': {
            ...theme.textMagic,
            color: 'inherit',
            backgroundImage:
                'linear-gradient(90deg, rgba(33,53,90,0.9) 100%, rgba(0,212,255,1) 100%)',
            padding: '.2em',
        },
        '& a:hover': {
            color: 'ghostwhite',
        },
    },
});

export default styles;
