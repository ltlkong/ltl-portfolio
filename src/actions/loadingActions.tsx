interface IToggleLoadingProps {
    label?: string;
}

const toggleLoading = (props?: IToggleLoadingProps) => {
    return {
        type: 'TOGGLE',
        payload: props?.label,
    };
};
const startLoading = (props?: IToggleLoadingProps) => {
    return {
        type: 'START',
        payload: props?.label,
    };
};
const stopLoading = (props?: IToggleLoadingProps) => {
    return {
        type: 'STOP',
        payload: props?.label,
    };
};

export { toggleLoading, startLoading, stopLoading };
