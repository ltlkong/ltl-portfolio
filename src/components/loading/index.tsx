import React, { ReactElement, useEffect, useRef } from 'react';
import PersonSleepFun from '../personSleepFun';
import { connect } from 'react-redux';
import withStyles, { WithStylesProps } from 'react-jss';

interface IProps {
    label?: string;
}

const Loading = ({ label }: IProps): ReactElement => {
    const loadingLabel = label || 'Loading';

    return (
        <div
            id="loading-page"
            className="lex hh"
            style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className="text">Loading...</div>
            <PersonSleepFun />
        </div>
    );
};

export default Loading;
