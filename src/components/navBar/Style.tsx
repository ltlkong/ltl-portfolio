import { Theme } from '../../styles/themePrimary';

const styles = (theme: Theme) => ({
    Nav: {
        position: 'fixed',
        zIndex: 100,
        '& a': {
            color: theme.textColorPrimary,
            textDecoraion: 'none',
        },
    },
});

export default styles;
