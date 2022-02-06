import { Theme } from '../../../styles/themePrimary';

const styles = (theme: Theme) => ({
    Footer: {
        composes: 'd-flex flex-wrap justify-content-center align-items-center',
        fontSize: '.7em',
        height: '10vh',

        '& div': {
            textAlign: 'center',
            width: '40%',
        },

        '& a': {
            color: theme.textColorPrimary,
            ...theme.textMagic,
        },
    },
});

export default styles;
