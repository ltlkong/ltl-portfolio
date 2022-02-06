const position = (leftV: number, bottomV: number) => ({
    left: leftV + 'em',
    bottom: bottomV + 'em',
});
const size = (widthV: number, heightV: number) => ({
    width: widthV + 'em',
    height: heightV + 'em',
});

const styles = {
    '@keyframes personFunSleepZ ': {
        from: {
            ...position(1.5, 1.5),
            opacity: 1,
        },
        to: {
            ...position(2.5, 2.5),
            opacity: 0,
        },
    },
    PersonSleepFun: {
        ...size(7, 10),
        position: 'absolute',
        '& div': {
            position: 'relative',
            backgroundColor: 'black',
            borderColor: 'black',
        },
        '& div:first-child': {
            ...position(1.8, -0.8),
            ...size(3.3, 3),
            borderWidth: '0.15em',
            borderStyle: 'solid',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            transformOrigin: '40% 90%',
            transform: 'rotate(40deg)',
        },
        '& div:first-child:after ': {
            content: '"Z"',
            fontWeight: 600,
            position: ' relative',
            animation: '$personFunSleepZ 1.5s infinite linear',
        },

        '& div:nth-child(2) ': {
            ...position(2.3, -0.6),
            ...size(0.1, 3.3),
            transform: 'rotate(30deg)',
        },

        '& div:nth-child(3) ': {
            ...position(1.5, -0.3),
            ...size(1, 0.1),
        },

        '& div:nth-child(4) ': {
            ...position(2.4, -0.3),
            ...size(0.1, 3),
            transformOrigin: 'top left',
            transform: 'rotate(-40deg)',
        },

        '& div:nth-child(5) ': {
            ...position(0.7, 2.7),
            ...size(1.5, 0.1),
        },

        '& div:nth-child(6) ': {
            ...position(0.6, 5.8),
            ...size(0.1, 3),
        },

        '& div:nth-child(7) ': {
            ...position(3, 8.4),
            ...size(2.5, 0.1),
            transform: 'rotate(10deg)',
            transformOrigin: 'left',
        },

        '& div:nth-child(8) ': {
            ...position(3.5, 8),
            ...size(2, 0.1),
        },

        '& div:nth-child(9) ': {
            ...position(3.5, 8.2),
            ...size(1.8, 0.1),
            transformOrigin: 'left',
            transform: 'rotate(0deg)',
        },
    },
};

export default styles;
