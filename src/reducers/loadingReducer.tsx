type LoadingActionTypes = 'TOGGLE' | 'STOP' | 'START';

interface ILoadingAction {
    type: LoadingActionTypes;
    payload?: string;
}

export interface ILoadingState {
    isLoading: boolean;
    label?: string;
}

const initialState = {
    isLoading: true,
    label: 'Loading...',
};

const loadingReducer = (
    state = initialState,
    action: ILoadingAction
): ILoadingState => {
    const { type, payload } = action;

    switch (type) {
        case 'TOGGLE':
            return {
                isLoading: !state.isLoading,
                label: payload || state.label,
            };
            break;
        case 'STOP':
            return {
                isLoading: false,
                label: payload || state.label,
            };
            break;
        case 'START':
            return {
                isLoading: true,
                label: payload || state.label,
            };
            break;
        default:
            return state;
    }
};

export default loadingReducer;
