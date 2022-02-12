import React, { ReactElement, useState, useEffect } from 'react';
import styles from '../../styles/ContactPageStyle';
import withStyles, { WithStylesProps } from 'react-jss';
import { toggleLoading } from '../../actions/loadingActions';
import { IRootState } from '../../store';
import { connect } from 'react-redux';
import Markdown from '../../components/markdown';
import FlipChars from '../../components/flipChars';
import combineClasses from '../../utils/combineClasses';
import Loading from '../../components/loading';
import myPic from '../../assets/imgs/mypic.jpeg';
import PageLayout, { Main } from '../../components/pageLayout';
import Bookmark from '../../components/bookmark';
import CustomFooter from '../components/customFooter';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactForm from './components/contactForm';
import scrollToTheTop from '../../utils/scrollToTheTop';

type DispatchToProps = typeof mapDispatchToProps;
type StateToProps = ReturnType<typeof mapStateToProps>;
type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, DispatchToProps, StateToProps {}

const ContactPage = ({ classes, toggleLoading, isLoading, loadingLabel }: IProps): ReactElement => {
  useEffect(() => {
    scrollToTheTop();
  }, []);
  return (
    <PageLayout>
      <Bookmark className={classes.Bookmark} />
      <Main className={classes.Contact}>
        <section className={'d-flex justify-content-center align-items-center'}>
          <ContactForm />
        </section>
      </Main>
      <CustomFooter className={classes.Footer} />
    </PageLayout>
  );
};

const mapStateToProps = ({ loading: { isLoading, label } }: IRootState) => ({
  isLoading,
  loadingLabel: label,
});

const mapDispatchToProps = {
  toggleLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContactPage));
