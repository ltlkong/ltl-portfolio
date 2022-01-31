import React, { ReactElement, useState } from 'react';
import styles from '../styles/HomePageStyle';
import withStyles, { WithStylesProps } from 'react-jss';
import { toggleLoading } from '../actions/loadingActions';
import { IRootState } from '../store';
import { connect } from 'react-redux';
import Markdown from '../components/markdown';
import FlipChars from '../components/flipChars';
import combineClasses from '../utils/combineClasses';
import Loading from '../components/loading';

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
};

const HomePage = ({
    classes,
    toggleLoading,
    isLoading,
    loadingLabel,
}: IProps): ReactElement => {
    return (
        <main className={classes.Home}>
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
                            Currently an {homePageData.employeeStatus.title} at{' '}
                            <strong>
                                <a
                                    href={
                                        homePageData.employeeStatus.company.link
                                    }
                                    target="_blank"
                                >
                                    {homePageData.employeeStatus.company.name}
                                </a>
                            </strong>
                        </p>
                    </div>
                </div>
            </section>
            <section className={classes.Section}></section>
        </main>
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
