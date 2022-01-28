import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './AppLayout';
import { store, persistor } from './store';
import themePrimary from './styles/theme-primary';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <JssProvider classNamePrefix="ltl-">
                    <ThemeProvider theme={themePrimary}>
                        <AppLayout />
                    </ThemeProvider>
                </JssProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
