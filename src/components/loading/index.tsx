import React, { ReactElement, useEffect, useRef } from 'react';
import PersonSleepFun from '../personSleepFun';
import { connect } from 'react-redux';
import withStyles, { WithStylesProps, createUseStyles } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes {
    label?: string;
}

const Loading = ({ label, classes }: IProps): ReactElement => {
    const loadingLabel = label;

    return (
        <div className={classes.Loading}>
            <div className={classes.Label}>{label}</div>
            <PersonSleepFun className={classes.SleepPerson} />
        </div>
    );
};

export default withStyles(styles)(Loading);
