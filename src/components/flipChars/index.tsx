import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './Style';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<HTMLDivElement> {
    children: string;
}

const FlipChars = ({ children, classes, className }: IProps): ReactElement => {
    return (
        <div className={[className].join(' ')}>
            {children.split('').map((value, i) => (
                <span
                    className={classes.FlipItem}
                    key={i}
                    style={{
                        animationDelay: (0.25 * i).toFixed(2) + 's',
                    }}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

export default withStyles(styles)(FlipChars);
