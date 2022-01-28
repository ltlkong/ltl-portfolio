import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

function PersonSleepFun({ classes, className }: IProps): ReactElement {
    return (
        <div className={[classes.PersonSleepFun, className].join(' ')}>
            {[...Array(9)].map((v, key) => (
                <div key={key}></div>
            ))}
        </div>
    );
}

export default withStyles(styles)(PersonSleepFun);
