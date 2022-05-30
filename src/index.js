import React from 'react';
import ReactDOM from 'react-dom/client';
import { browserHistory } from 'react-router';
import './index.css';
// import App from './containers/App';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './utils/registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // historyプロップを渡すことでRoutesが履歴を追跡できる
  <Routes history ={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();
reportWebVitals();
