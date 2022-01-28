import React, { ReactElement } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes {}

function PersonSleepFun({ classes }: IProps): ReactElement {
    return (
        <div className={classes.PersonSleepFun}>
            {[...Array(9)].map((v, key) => (
                <div key={key}></div>
            ))}
        </div>
    );
}

export default withStyles(styles)(PersonSleepFun);
