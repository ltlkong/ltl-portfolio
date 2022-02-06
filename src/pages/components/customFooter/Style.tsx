import { Theme } from '../../../styles/themePrimary';

const styles = (theme: Theme) => ({
    Footer: {
        composes: 'd-flex flex-wrap justify-content-center align-items-center',
        backgroundColor: theme.backgroundColorHome,
        fontSize: '.7em',
        height: '10vh',
        borderTop: '3px solid #bbb',

        '& div': {
            textAlign: 'center',
            width: '40%',
        },
    },
});

export default styles;
