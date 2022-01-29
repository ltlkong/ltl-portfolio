import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const ThreeDCard = (): ReactElement => {
    return <div></div>;
};

export default withStyles(styles)(ThreeDCard);
