import React from 'react';
import ReactDOM from 'react-dom';
import HomeCook from './Components/HomeCook';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HomeCook></HomeCook>,
  document.getElementById('root')
);

serviceWorker.unregister();