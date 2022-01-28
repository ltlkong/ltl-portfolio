import React, { ReactElement } from 'react';
import styles from './Style';
import withStyles, { WithStylesProps } from 'react-jss';

interface IProps extends WithStylesProps<typeof styles> {
    children: any;
}

const NavBar = ({ children, classes }: IProps): ReactElement => {
    return <nav className={classes.nav}>{children}</nav>;
};

export default withStyles(styles)(NavBar);
