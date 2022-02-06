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
            opacity: '.1',
            top: 0,
            right: '10px',
            fontSize: '16px',
        },
    },
    Footer: {
        composes: 'position-relative',
        '&:before': {
            content: '"ltl-footer"',
            position: 'absolute',
            opacity: '.1',
            top: 0,
            right: '10px',
            fontSize: '16px',
        },
    },
});

export default styles;
