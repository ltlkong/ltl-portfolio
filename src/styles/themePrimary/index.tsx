const themePrimary = {
    colorPrimary: 'rgb(213, 217, 224)',
    colorSecondary: 'rgb(74, 109, 136)',
    colorNight: 'rgb(1, 12, 30)',
    colorDark: 'rgb(0, 30, 56)',
    backgroundHome: 'linear-gradient(to right, #00416a, #e4e5e6)',
    textColorPrimary: 'rgb(0, 30, 56)',
    textMagic: {
        backgroundImage: 'linear-gradient(to right, #abbaab, #ffffff)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.2em',
        backgroundPosition: '0 88%',
        transition: 'background-size 0.12s ease-in',
        padding: '0.5em',
        '&:hover': {
            backgroundSize: '100% 88%',
        },
    },
    fontFamily: ` 'IBM Plex Sans Thai Looped', sans-serif`,
};

export default themePrimary;

export type Theme = typeof themePrimary;
