import React from 'react';
import ReactDOM from 'react-dom';
import HomeCook from './Components/HomeCook';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HomeCook></HomeCook>,
  document.getElementById('root')
);

serviceWorker.unregister();