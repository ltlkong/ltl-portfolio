import React, { ReactElement } from 'react';
import styles from '../styles/themePrimary/HomePageStyle';
import withStyles, { WithStylesProps } from 'react-jss';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes {}

const HomePage = ({ classes }: IProps): ReactElement => {
    return <div className={classes.Home}>Home Page</div>;
};

export default withStyles(styles)(HomePage);
