import React, { ReactElement, useEffect } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import {
    toggleLoading,
    startLoading,
    stopLoading,
} from './actions/loadingActions';
import { IRootState } from './store';
import { connect } from 'react-redux';
import styles from './styles/AppLayoutStyle';
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
    stopLoading,
    classes,
}: IAppLayoutProps): ReactElement => {
    const location = useLocation();

    return (
        <>
            <TransitionGroup component={null}>
                <CSSTransition
                    classNames={'fade'}
                    key={location.key}
                    timeout={1000}
                >
                    <Routes location={location}>
                        {routes.map((props, key) => (
                            <Route key={key} {...props} />
                        ))}
                    </Routes>
                </CSSTransition>
            </TransitionGroup>

            <NavBar className={classes.Nav}>
                {links.map((props, key) => {
                    const isCurrentRoute = props.to === location.pathname;

                    return (
                        <Link
                            key={key}
                            to={props.to}
                            className={isCurrentRoute ? 'active' : ''}
                        >
                            {props.name}
                        </Link>
                    );
                })}
            </NavBar>
        </>
    );
};

const mapDispatchToProps = {
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
