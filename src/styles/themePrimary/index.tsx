const themePrimary = {
    colorPrimary: 'rgb(213, 217, 224)',
    colorSecondary: 'rgb(74, 109, 136)',
    colorNight: 'rgb(1, 12, 30)',
    colorDark: 'rgb(0, 30, 56)',
    textColorPrimary: 'rgb(0, 30, 56)',
    textMagic: {
        backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 0.2em',
        backgroundPosition: '0 88%',
        transition: 'background-size 0.12s ease-in',
        '&:hover': {
            backgroundSize: '100% 88%',
        },
    },
    fontFamily: ` 'IBM Plex Sans Thai Looped', sans-serif`,
};

export default themePrimary;

export type ThemePrimary = typeof themePrimary;
