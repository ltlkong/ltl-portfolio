import React, { ReactElement, useEffect } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import {
    toggleLoading,
    startLoading,
    stopLoading,
} from './actions/loadingActions';
import { IRootState } from './store';
import { connect } from 'react-redux';
import styles from './styles/themePrimary/AppLayoutStyle';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import routes from './routes';
import links from './routes/links';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/navBar';
import Loading from './components/loading';

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = typeof mapDispatchToProps;
type Classes = WithStylesProps<typeof styles>;

interface IAppLayoutProps extends StateToProps, DispatchToProps, Classes {}

const AppLayout = ({
    isLoading,
    loadingLabel,
    startLoading,
    stopLoading,
    classes,
}: IAppLayoutProps): ReactElement => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            stopLoading();
        }, 1000);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <>
            <NavBar>
                {links.map((props, key) => (
                    <Link key={key} to={props.to}>
                        {props.name}
                    </Link>
                ))}
            </NavBar>
            <TransitionGroup component={null}>
                <CSSTransition
                    classNames={'fade'}
                    key={location.key}
                    timeout={300}
                >
                    <Routes location={location}>
                        {routes.map((props, key) => (
                            <Route key={key} {...props} />
                        ))}
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

const mapDispatchToProps = {
    startLoading,
    stopLoading,
};

const mapStateToProps = ({ loading: { isLoading, label } }: IRootState) => ({
    isLoading,
    loadingLabel: label,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AppLayout));
