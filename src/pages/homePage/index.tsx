import React, { ReactElement, useState } from 'react';
import styles from '../../styles/HomePageStyle';
import withStyles, { WithStylesProps } from 'react-jss';
import { toggleLoading } from '../../actions/loadingActions';
import { IRootState } from '../../store';
import { connect } from 'react-redux';
import Markdown from '../../components/markdown';
import FlipChars from '../../components/flipChars';
import combineClasses from '../../utils/combineClasses';
import Loading from '../../components/loading';
import PageLayout, { Main } from '../../components/pageLayout';
import Bookmark from '../../components/bookmark';
import CustomFooter from '../components/customFooter';
import CareerTimeline from './components/career-timeline';
import ScrollAnimation from 'react-animate-on-scroll';
import SocialAccountsBar from './components/socialAccountsBar';

type DispatchToProps = typeof mapDispatchToProps;
type StateToProps = ReturnType<typeof mapStateToProps>;
type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, DispatchToProps, StateToProps {}

const HomePage = ({
    classes,
    toggleLoading,
    isLoading,
    loadingLabel,
    homePageData,
}: IProps): ReactElement => {
    return (
        <PageLayout>
            <Bookmark className={classes.Bookmark} />
            <Main className={classes.Home}>
                <section className={combineClasses(classes.Banner)}>
                    <ScrollAnimation
                        animateIn="animate__animated animate__slideInLeft"
                        animateOnce={true}
                        delay={300}
                    >
                        <div className={classes.Introduction}>
                            <h1>
                                <FlipChars>L</FlipChars>
                            </h1>
                            <div>
                                <Markdown>{homePageData.introShort}</Markdown>
                                <p className={classes.EmploymentStatus}>
                                    Currently an{' '}
                                    {homePageData.employeeStatus.title} at{' '}
                                    <strong>
                                        <a
                                            href={
                                                homePageData.employeeStatus
                                                    .company.link
                                            }
                                            target="_blank"
                                        >
                                            {
                                                homePageData.employeeStatus
                                                    .company.name
                                            }
                                        </a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
                <section>
                    <div className={classes.About}>
                        <ScrollAnimation
                            animateIn="animate__animated animate__slideInLeft"
                            animateOnce={true}
                            className={classes.AboutMeImgContainer}
                        >
                            <img src={homePageData.myPicture} />
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="animate__animated animate__slideInRight"
                            animateOnce={true}
                            className={'col-md-6 mt-4'}
                        >
                            <h3>A BIT ABOUT ME</h3>
                            <Markdown>{homePageData.aboutMe}</Markdown>
                        </ScrollAnimation>
                    </div>
                </section>
                <section className={'p-4'}>
                    <h2>My Career path</h2>
                    <CareerTimeline className={classes.CareerTimeline} />
                </section>
            </Main>
            <SocialAccountsBar className={classes.SocialAccountsBar} />
            <CustomFooter className={classes.Footer} />
        </PageLayout>
    );
};

const mapStateToProps = ({
    loading: { isLoading, label },
    myInfo: { basicInfo },
}: IRootState) => ({
    isLoading,
    loadingLabel: label,
    homePageData: basicInfo,
});

const mapDispatchToProps = {
    toggleLoading,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(HomePage));
