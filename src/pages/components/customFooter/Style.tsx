import { Theme } from '../../../styles/themePrimary';

const styles = (theme: Theme) => ({
    FooterContent: {
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
    Person: {
        composes: 'start-0 bottom-0',
        fontSize: '5px',
    },
});

export default styles;
