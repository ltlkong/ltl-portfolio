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
    myPicture: 'https://i.redd.it/1pmsjnk8f1g01.jpg',
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
                <section
                    className={combineClasses(classes.Section, classes.Banner)}
                >
                    <div className={classes.Introduction}>
                        <h1>
                            <FlipChars>L</FlipChars>
                        </h1>
                        <div>
                            <Markdown>{homePageData.introShort}</Markdown>
                            <p className={classes.EmploymentStatus}>
                                Currently an {homePageData.employeeStatus.title}{' '}
                                at{' '}
                                <strong>
                                    <a
                                        href={
                                            homePageData.employeeStatus.company
                                                .link
                                        }
                                        target="_blank"
                                    >
                                        {
                                            homePageData.employeeStatus.company
                                                .name
                                        }
                                    </a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className={combineClasses(
                        classes.Section,
                        classes.AboutSection
                    )}
                >
                    <div className={classes.AboutMeImgContainer}>
                        <img src={homePageData.myPicture} />
                    </div>
                    <div className={classes.AboutMeIntro}>
                        <h3>A BIT ABOUT ME</h3>
                        <Markdown>{homePageData.aboutMe}</Markdown>
                    </div>
                </section>
                <section className={combineClasses(classes.Section)}>
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
