import React, { ReactElement, HTMLProps } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import ReactMarkdown from 'react-markdown';

interface IProps extends HTMLProps<HTMLDivElement> {
    children?: string;
}

const Markdown = ({ className, children = '' }: IProps): ReactElement => {
    return (
        <div className={className}>
            <ReactMarkdown>{children}</ReactMarkdown>
        </div>
    );
};

export default Markdown;
