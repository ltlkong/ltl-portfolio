import { ThemePrimary } from '../../styles/themePrimary';

const styles = (theme: ThemePrimary) => ({
    '@keyframes flip': {
        '0%,80%': {
            transform: 'rotateY(360deg) ',
        },
    },
    FlipItem: {
        display: 'inline-block',
        animation: '$flip 2s infinite',
    },
});

export default styles;
