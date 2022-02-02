import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { useLocation } from 'react-router-dom';
import styles from './Style';
import { getRouteName } from '../../routes';
import combineClasses from '../../utils/combineClasses';
import Bookmark from '../bookmark';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const PageLayout = ({
    classes,
    children,
    className = 'layout',
    ...props
}: IProps): ReactElement => {
    return (
        <div className={combineClasses(className, classes.Layout)} {...props}>
            {children}
        </div>
    );
};

export default withStyles(styles)(PageLayout);

const main = ({
    children,
    classes,
    className = '',
    ...props
}: IProps): ReactElement => {
    return (
        <main className={combineClasses(className, classes.Main)} {...props}>
            {children}
        </main>
    );
};

export const Main = withStyles(styles)(main);

const footer = ({
    children,
    classes,
    className = '',
    ...props
}: IProps): ReactElement => {
    return (
        <footer
            className={combineClasses(className, classes.Footer)}
            {...props}
        >
            {children}
        </footer>
    );
};

export const Footer = withStyles(styles)(footer);
