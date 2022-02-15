import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './AppLayout';
import { store, persistor } from './store';
import themePrimary from './styles/themePrimary';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import jss from 'jss';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';
import preset from 'jss-preset-default';

library.add(fab);
jss.setup(preset());
jss.use(vendorPrefixer());

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <JssProvider classNamePrefix="ltl-" jss={jss}>
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
