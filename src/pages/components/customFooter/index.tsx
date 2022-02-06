import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './Style';
import { Footer } from '../../../components/pageLayout';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const CustomFooter = ({ classes }: IProps): ReactElement => {
    const mailto = 'tielinli@yahoo.com';

    return (
        <Footer className={classes.Footer}>
            <div>
                Contact me: <a href={`mailto:${mailto}`}>Tielin Li</a> or{' '}
                <Link to="/contact">Contact page</Link>
            </div>
            <div>Last Updated At 2022</div>
        </Footer>
    );
};

export default withStyles(styles)(CustomFooter);
