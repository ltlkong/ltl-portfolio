import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './Style';
import { Footer } from '../../../components/pageLayout';
import PersonSleepFun from '../../../components/personSleepFun';
import combineClasses from '../../../utils/combineClasses';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<ReactElement> {}

const CustomFooter = ({ classes, className = '' }: IProps): ReactElement => {
    const mailto = 'tielinli@yahoo.com';

    return (
        <Footer className={combineClasses('position-relative', className)}>
            <div className={classes.FooterContent}>
                <div>
                    Contact me: <a href={`mailto:${mailto}`}>Tielin Li</a> or{' '}
                    <Link to="/contact">Contact page</Link>
                </div>
                <div>Last Updated At 2022</div>
            </div>
            <PersonSleepFun className={classes.Person} />
        </Footer>
    );
};

export default withStyles(styles)(CustomFooter);
