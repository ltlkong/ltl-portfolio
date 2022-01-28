import React, { ReactElement, useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ThemePrimary } from './styles/theme-primary';
import {
    toggleLoading,
    startLoading,
    stopLoading,
} from './actions/loadingActions';
import { IRootState } from './store';
import { connect } from 'react-redux';

interface IStyles {
    theme: ThemePrimary;
}

type StateToProps = ReturnType<typeof mapStateToProps>;
type DispatchToProps = typeof mapDispatchToProps;

const useStyles = createUseStyles({
    button: {
        backgroundColor: ({ theme }: IStyles) => theme.colorPrimary,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
});

interface IAppLayoutProps extends StateToProps, DispatchToProps {}

const AppLayout = ({
    isLoading,
    loadingLabel,
    toggleLoading,
    startLoading,
    stopLoading,
}: IAppLayoutProps): ReactElement => {
    const theme = useTheme<ThemePrimary>();
    const classes = useStyles({ theme });

    return (
        <div>
            <h1>{isLoading ? loadingLabel : 'Done'}</h1>
            <div className={classes.container}>
                <button
                    className={classes.button}
                    onClick={() => toggleLoading()}
                >
                    Toggle
                </button>
                <button
                    className={classes.button}
                    onClick={() => startLoading()}
                >
                    Start
                </button>
                <button
                    className={classes.button}
                    onClick={() => stopLoading()}
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    toggleLoading,
    startLoading,
    stopLoading,
};

const mapStateToProps = ({ loading: { isLoading, label } }: IRootState) => ({
    isLoading,
    loadingLabel: label,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
