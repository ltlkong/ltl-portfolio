import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    Layout: {
        composes: 'position-relative',
    },
    Main: {
        composes: 'position-relative',
        '&:before': {
            content: '"ltl-main"',
            position: 'absolute',
            opacity: '.2',
            top: 0,
            left: 0,
        },
    },
    Footer: {
        composes: 'position-relative',
        '&:before': {
            content: '"ltl-footer"',
            position: 'absolute',
            opacity: '.2',
            top: 0,
            left: 0,
        },
    },
});

export default styles;
