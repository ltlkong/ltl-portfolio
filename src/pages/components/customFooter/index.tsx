import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';
import { Footer } from '../../../components/pageLayout';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {}

const CustomFooter = ({ classes }: IProps): ReactElement => {
    return (
        <Footer className={classes.Footer}>
            <div>Tielin Li</div>
            <div>Last Updated At 2022</div>
        </Footer>
    );
};

export default withStyles(styles)(CustomFooter);
