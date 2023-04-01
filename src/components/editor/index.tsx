import React, {
    ReactElement,
    ChangeEvent,
    KeyboardEvent,
    useState,
    useEffect,
} from 'react';

interface IEditorState {
    textValue: string;
    isPopupShowed: boolean;
    cursorPosition: number;
    searchText: string;
    searchResult: string;
}

const Editor = (): ReactElement => {
    const [state, setState] = useState<IEditorState>({
        textValue: '',
        isPopupShowed: false,
        cursorPosition: 0,
        searchText: '',
        searchResult: '',
    });

    useEffect(() => {
        showPopup();
    });

    function handleTextarea(event: ChangeEvent) {
        const value = (event.target as HTMLTextAreaElement).value;

        setState({
            ...state,
            textValue: value,
        });
    }

    function handleKeyup(event: KeyboardEvent) {
        const { textValue } = state;
        const cursorPosition = (event.target as HTMLTextAreaElement)
            .selectionStart;
        const atKeyPosition = textValue.lastIndexOf('@');

        setState({
            ...state,
            cursorPosition,
        });

        if (atKeyPosition === -1) {
            setState({
                ...state,
                cursorPosition,
                isPopupShowed: false,
            });
        }
    }

    function handleKeypress(event: KeyboardEvent) {
        const { textValue, searchResult, cursorPosition, isPopupShowed } =
            state;
        // Select from popup
        if (event.key === 'Enter' && isPopupShowed) {
            event.preventDefault();

            const atKeyPosition = textValue.lastIndexOf('@');
            const searchState = {
                ...state,
                isPopupShowed: false,
                textValue,
                searchText: textValue.substring(
                    atKeyPosition + 1,
                    cursorPosition
                ),
            };

            if (searchResult !== '') {
                // Insert search result string
                searchState.textValue =
                    textValue.slice(0, atKeyPosition + 1) +
                    searchResult +
                    textValue.slice(cursorPosition + 1);
            }

            setState({ ...searchState });
        }
    }

    function showPopup() {
        const { textValue, cursorPosition, isPopupShowed } = state;
        const isPrevCharIsAt = textValue[cursorPosition - 1] === '@';

        if (isPrevCharIsAt && !isPopupShowed) {
            setState({ ...state, isPopupShowed: true });
        }
    }

    function getSearchResult(result: string) {
        setState({ ...state, searchResult: result });
    }

    console.log(state);
    return (
        <div>
            {state.isPopupShowed && (
                <Popup
                    searchText={state.searchText}
                    getSearchResult={getSearchResult}
                />
            )}
            <textarea
                value={state.textValue}
                onChange={handleTextarea}
                onKeyUp={handleKeyup}
                onKeyPress={handleKeypress}
            ></textarea>
        </div>
    );
};

interface IPopupProps {
    searchText: string;
    getSearchResult: (result: string) => void;
}

const Popup = ({ searchText, getSearchResult }: IPopupProps): ReactElement => {
    const [result, setResult] = useState('');

    useEffect(() => {
        fetch('https://random-data-api.com/api/name/random_name')
            .then((res) => res.json())
            .then((data) => {
                setResult(data.name);
                getSearchResult(data.name);
            });
    }, []);
    return <div>{':' + result}</div>;
};

export default Editor;
