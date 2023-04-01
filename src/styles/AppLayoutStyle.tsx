import { Theme } from "./themePrimary";

const styles = (theme: Theme) => ({
  Nav: {
    composes: "d-flex flex-column fw-bolder",
    right: "10%",
    top: "10%",

    "& a": {
      display: "list-item",
      padding: ".1em",
      fontSize: ".9em",
      color: theme.textColorPrimary,
      transition: "color .3s",
      "&:hover": {
        color: theme.colorSecondary,
      },
    },

    "& .active": {
      color: theme.colorSecondary,
      listStyle: "square",
    },
  },
});

export default styles;
