import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const footer = ({ children, classes }: IProps): ReactElement => {
    return <footer className={classes.Footer}>{children}</footer>;
};

export default withStyles(styles)(footer);
