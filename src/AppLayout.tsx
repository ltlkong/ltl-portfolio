import React, { ReactElement, useEffect } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { toggleLoading, startLoading, stopLoading } from './actions/loadingActions';
import { reloadInfoData, emptyAllInfoData } from './actions/myInfoActions';
import { IRootState } from './store';
import { connect } from 'react-redux';
import styles from './styles/AppLayoutStyle';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import routes from './routes';
import links from './routes/links';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/navBar';
import Loading from './components/loading';
import combineClasses from './utils/combineClasses';
import scrollToTheTop from './utils/scrollToTheTop';
import NotFoundPage from './pages/NotFoundPage';

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = typeof mapDispatchToProps;
type Classes = WithStylesProps<typeof styles>;

interface IAppLayoutProps extends StateToProps, DispatchToProps, Classes {}

const AppLayout = ({ isLoading, loadingLabel, stopLoading, classes, startLoading, reloadInfoData }: IAppLayoutProps): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    startLoading();
    reloadInfoData();

    setTimeout(() => {
      stopLoading();
    }, 3000);
  }, []);

  useEffect(() => {
    scrollToTheTop();
  }, [location]);

  if (isLoading) return <Loading />;

  if (!links.find(link => link.to === location.pathname && link.active)) return <NotFoundPage />;

  return (
    <>
      <NavBar className={classes.Nav}>
        {links.map((props, key) => {
          const isCurrentRoute = props.to === location.pathname;
          const activeClassName = isCurrentRoute ? 'active' : '';
          const animationClassName = 'animate__animated animate__slideInDown';
          const className = combineClasses(activeClassName, animationClassName);

          return (
            <Link key={key} to={props.to} className={className}>
              {props.name}
            </Link>
          );
        })}
      </NavBar>
      <TransitionGroup component={null}>
        <CSSTransition classNames={'fade'} key={location.key} timeout={1000}>
          <Routes location={location}>
            {routes.map((props, key) => {
              return <Route key={key} {...props} />;
            })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

const mapDispatchToProps = {
  stopLoading,
  startLoading,
  reloadInfoData,
};

const mapStateToProps = ({ loading: { isLoading, label } }: IRootState) => ({
  isLoading,
  loadingLabel: label,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppLayout));
