import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// rendering App component to the element with id "root"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
