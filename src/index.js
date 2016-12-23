import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.scss';
import './assets/libs/bootstrap/js/bootstrap.min.js';

import reducers from './reducers';
import routes from './routes';

import applyMiddlewar from 'react-router-apply-middleware'
import { useRelativeLinks, RelativeLink } from 'react-router-relative-links'

const logger = createLogger({ collapsed: true });

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

/*function subscribe(serviceWorkerReg) {  
    serviceWorkerReg.pushManager.subscribe({userVisibleOnly: true})

    .then(function(sub) { console.log('endpoint:', sub.endpoint); });
}*/

/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker3.js')
             .then(function(reg) { subscribe(reg) })
             .then(function() { console.log('Service Worker Registered'); });
}
*/


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router render={applyMiddlewar(useRelativeLinks())} history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#root'));

/*APA91bHIvG3tI82Y9XAut4EG5sFO8fO1j36HHGWk0BAst6-6Ay3lVAiOqEopUA58mG5RESzRNq59xabYWdIK0MHUIaBY06jxmtqHBKl2Im37XvCKm37Ncba4zZkGX6HryX9yHr2ArfNw*/