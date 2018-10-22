import * as React from 'react';
import * as ReactDOM from 'react-dom'; // tslint:disable-line
import { App } from './app';
import registerServiceWorker from './register-service-worker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
