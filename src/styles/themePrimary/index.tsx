import generateGradient from "../../utils/generateGradient";

const themePrimary = {
  colorPrimary: "rgb(213, 217, 224)",
  colorSecondary: "rgb(74, 109, 136)",
  colorNight: "rgb(1, 12, 30)",
  colorDark: "rgb(0, 30, 56)",
  backgroundHome:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(144,166,213,1) 0%, rgba(230,239,241,1) 100%);",
  backgroundContact:
    "linear-gradient(90deg, rgba(110,130,160,0.8), rgba(48,105,143,0.2))",
  textColorPrimary: "rgb(0, 30, 56)",
  fontFamily: ` 'IBM Plex Sans Thai Looped', sans-serif`,
};

export default themePrimary;

export type Theme = typeof themePrimary;
