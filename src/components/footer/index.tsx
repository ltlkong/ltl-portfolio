import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';
import combineClasses from '../../utils/combineClasses';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const footer = ({
    children,
    classes,
    className = '',
}: IProps): ReactElement => {
    return (
        <footer className={combineClasses(classes.Footer, className)}>
            {children}
        </footer>
    );
};

export default withStyles(styles)(footer);
