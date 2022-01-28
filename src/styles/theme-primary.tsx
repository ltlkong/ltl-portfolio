const themePrimary = () => {
    return {
        colorPrimary: 'green',
    };
};

export default themePrimary;

export type ThemePrimary = ReturnType<typeof themePrimary>;
