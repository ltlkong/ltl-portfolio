import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
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
