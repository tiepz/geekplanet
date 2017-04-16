import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import de from 'react-intl/locale-data/de';
import App from './app.jsx';
import geekplanetTheme from './theme';
import reducers from './reducers';

injectTapEventPlugin();

addLocaleData([...de]);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render((
  <MuiThemeProvider muiTheme={geekplanetTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
), document.getElementsByTagName('main')[0]);
