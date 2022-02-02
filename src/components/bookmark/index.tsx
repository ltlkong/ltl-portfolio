import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';
import { useLocation } from 'react-router-dom';
import { getRouteName } from '../../routes';
import combineClasses from '../../utils/combineClasses';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const Bookmark = ({ classes, className = '' }: IProps): ReactElement => {
    const location = useLocation();
    const firstCharOfRoute = getRouteName(location.pathname).charAt(0);

    return (
        <div className={combineClasses(classes.Bookmark)}>
            <h1 className={className}>{firstCharOfRoute}</h1>
        </div>
    );
};

export default withStyles(styles)(Bookmark);
