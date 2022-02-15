import React, { ReactElement, HTMLProps } from 'react';
import styles from './Style';
import withStyles, { WithStylesProps } from 'react-jss';

interface IProps extends WithStylesProps<typeof styles>, HTMLProps<ReactElement> {
  children: any;
}

const NavBar = ({ children, classes, className }: IProps): ReactElement => {
  if (children.length <= 1) return <></>;
  return <nav className={[classes.Nav, className].join(' ')}>{children}</nav>;
};

export default withStyles(styles)(NavBar);
