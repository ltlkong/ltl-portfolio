import { Theme } from '../../styles/themePrimary';

const styles = (theme: Theme) => ({
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
