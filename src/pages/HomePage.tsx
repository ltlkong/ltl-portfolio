import React, { ReactElement, useState } from 'react';
import styles from '../styles/themePrimary/HomePageStyle';
import withStyles, { WithStylesProps } from 'react-jss';
import { toggleLoading } from '../actions/loadingActions';
import { IRootState } from '../store';
import { connect } from 'react-redux';
import Markdown from '../components/markdown';

type DispatchToProps = typeof mapDispatchToProps;
type StateToProps = ReturnType<typeof mapStateToProps>;
type Classes = WithStylesProps<typeof styles>;

interface IProps extends Classes, DispatchToProps, StateToProps {}

const HomePage = ({
    classes,
    toggleLoading,
    isLoading,
    loadingLabel,
}: IProps): ReactElement => {
    const [inputValue, setInputValue] = useState('');

    return (
        <main className={classes.Home}>
            <h1>Home Page</h1>
            <input
                placeholder={'Enter loading label'}
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
            />
            <button
                onClick={() => {
                    toggleLoading({ label: inputValue });
                }}
            >
                Toggle Loading
            </button>
            <Markdown>
                Hey, I'm **Tielin Li**. I'm a **developer** working on Pollard
                Banknote.
            </Markdown>
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
