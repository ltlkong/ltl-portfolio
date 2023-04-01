import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

interface IProps
    extends WithStylesProps<typeof styles>,
        HTMLProps<HTMLDivElement> {
    bgImageSrc: string;
}

const Container = ({ bgImageSrc, ...props }: IProps): ReactElement => {
    const backgroundImage = `url('${bgImageSrc}')`;

    return <div style={{ backgroundImage }} {...props}></div>;
};

export default withStyles(styles)(Container);
