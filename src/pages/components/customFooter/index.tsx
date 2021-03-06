import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './Style';
import { Footer } from '../../../components/pageLayout';
import PersonSleepFun from '../../../components/personSleepFun';
import combineClasses from '../../../utils/combineClasses';
import { connect } from 'react-redux';
import { IRootState } from '../../../store';

type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, HTMLProps<ReactElement>, ReturnType<typeof mapStateToProps> {}

const CustomFooter = ({ classes, className = '', myName, email }: IProps): ReactElement => {
  return (
    <Footer className={combineClasses('position-relative', className)}>
      <div className={classes.FooterContent}>
        <div>
          Contact me: <a href={`mailto:${email}`}>{myName}</a> or <Link to="/contact">Contact page</Link>
        </div>
        <div>Last Updated At 2022</div>
      </div>
      <PersonSleepFun className={classes.Person} />
    </Footer>
  );
};

const mapStateToProps = ({
  myInfo: {
    basicInfo: { name, emails },
  },
}: IRootState) => ({
  myName: name,
  email: emails.length > 0 ? emails[0] : '',
});

export default connect(mapStateToProps)(withStyles(styles)(CustomFooter));
