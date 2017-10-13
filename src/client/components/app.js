import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import Presentation from './presentation';

class App extends React.Component {
  render() {
    const history = createHistory();
    const middleware = routerMiddleware(history);
    const store = createStore(
      combineReducers({
        router: routerReducer
      }),
      applyMiddleware(middleware)
    );    
    
    return (
      <Provider store={store}>      
        <ConnectedRouter history={history}>
          <Presentation />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
