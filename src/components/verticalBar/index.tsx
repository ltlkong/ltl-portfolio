import React, { ReactElement, HTMLProps } from 'react';
import styles from './Style';
import withStyles, { WithStylesProps } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Classes = WithStylesProps<typeof styles>;

interface IContainerProps extends Classes, HTMLProps<ReactElement> {
  children: ReactElement[];
}

const Container = ({ children, classes, className }: IContainerProps): ReactElement => {
  return (
    <div className={[classes.Bar, className].join(' ')}>
      <ul>{children}</ul>
      <div className={classes.Line}></div>
    </div>
  );
};

interface IItemProps {
  icon?: string;
  link?: string;
}

const Item = ({ icon, link }: IItemProps): ReactElement => {
  return (
    <li>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={icon as any} />
      </a>
    </li>
  );
};

export default {
  Container: withStyles(styles)(Container),
  Item,
};
