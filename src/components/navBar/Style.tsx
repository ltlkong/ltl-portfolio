import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    Nav: {
        position: 'fixed',
        '& a': {
            color: theme.textColorPrimary,
            textDecoraion: 'none',
        },
    },
});

export default styles;
