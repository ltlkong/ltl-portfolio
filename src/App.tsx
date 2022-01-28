import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './AppLayout';
import { store, persistor } from './store';
import themePrimary from './styles/themePrimary';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <JssProvider classNamePrefix="ltl-">
                    <ThemeProvider theme={themePrimary}>
                        <Router>
                            <AppLayout />
                        </Router>
                    </ThemeProvider>
                </JssProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
