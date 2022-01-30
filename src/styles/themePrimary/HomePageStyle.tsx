import { ThemePrimary } from './';
import meW from '../../assets/imgs/meW.png';

const styles = (theme: ThemePrimary) => ({
    Home: {
        position: 'relative',
        backgroundColor: theme.colorPrimary,
        color: theme.textColorPrimary,
        zIndex: 0,

        height: '100vh',
        '&:after': {
            content: '""',
            backgroundImage: `url("${meW}")`,
            backgroundSize: '300px',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            opacity: 0.6,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
        },

        '& h1': {
            margin: 0,
        },
    },
    Introduction: {
        fontSize: '1.5em',
        padding: '80px 16px 0 16px',
        color: theme.textColorPrimary,
        fontFamily: theme.fontFamily,
        '& *::selection': {
            color: theme.colorPrimary,
            backgroundColor: theme.textColorPrimary,
        },
    },
    EmploymentStatus: {
        '& a': {
            ...theme.textMagic,
            color: 'inherit',
            backgroundImage:
                'linear-gradient(90deg, rgba(33,53,90,0.9) 100%, rgba(0,212,255,1) 100%)',
            padding: '.1em',
        },
        fontSize: '0.7em',
        color: 'rgb(33,53,90)',
        '& a:hover': {
            color: 'ghostwhite',
        },
    },
});

export default styles;
