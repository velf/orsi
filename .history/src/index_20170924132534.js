import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/app';
import './stylesheets/index.s
css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
