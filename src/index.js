import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, document.getElementById('root'))


if (module.hot) {
  module.hot.accept();
}
