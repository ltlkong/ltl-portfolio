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
import myPic from '../../assets/imgs/mypic.jpeg';
import PageLayout, { Main } from '../../components/pageLayout';
import Bookmark from '../../components/bookmark';
import CustomFooter from '../components/customFooter';
import CareerTimeline from './components/career-timeline';
import ScrollAnimation from 'react-animate-on-scroll';

type DispatchToProps = typeof mapDispatchToProps;
type StateToProps = ReturnType<typeof mapStateToProps>;
type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, DispatchToProps, StateToProps {}

const homePageData = {
    introShort: `Hey, I'm **Tielin Li**. I'm a **programmer** working on Full-Stack development.`,
    employeeStatus: {
        title: 'Application developer',
        company: {
            name: 'Pollard Banknote Ltd.',
            link: 'https://www.pollardbanknote.com',
        },
    },
    aboutMe: `Currently, I'm an Application developer working on the lottery app and web development at Pollard Banknote Ltd. Previously, I did internship at Rally the Locals as a web developer.`,
    myPicture: myPic,
};

const HomePage = ({
    classes,
    toggleLoading,
    isLoading,
    loadingLabel,
}: IProps): ReactElement => {
    return (
        <PageLayout>
            <Bookmark className={classes.Bookmark} />
            <Main className={classes.Home}>
                <section className={combineClasses(classes.Banner)}>
                    <ScrollAnimation
                        animateIn="animate__animated animate__slideInLeft"
                        animateOnce={true}
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
                    <ScrollAnimation
                        animateIn="animate__animated animate__slideInRight"
                        animateOnce={true}
                    >
                        <div className={classes.About}>
                            <div className={classes.AboutMeImgContainer}>
                                <img src={homePageData.myPicture} />
                            </div>
                            <div className={'col-md-6 mt-4'}>
                                <h3>A BIT ABOUT ME</h3>
                                <Markdown>{homePageData.aboutMe}</Markdown>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
                <section className={'p-4'}>
                    <h2>My Career path</h2>
                    <CareerTimeline />
                </section>
            </Main>
            <CustomFooter />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(HomePage));
