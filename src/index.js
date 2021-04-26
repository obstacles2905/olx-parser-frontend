import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

console.log('OFFLINE_MODE => ', typeof process.env.REACT_APP_OFFLINE);
console.log('OFFLINE_MODE2 => ', typeof process.env.REACT_APP_OFFLINE);
console.log('OFFLINE_MODE3 => ', typeof process.env.REACT_APP_OFFLINE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// if (
//   process.env.NODE_ENV === 'production' ||
//   process.env.REACT_APP_OFFLINE === 'true'
// ) {
//   serviceWorker.register();
// } else {
//   serviceWorker.unregister();
// }

serviceWorker.unregister();