import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (!window.location.host.includes('localhost')) {
  serviceWorker.register();
}
