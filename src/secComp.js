import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'second component';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app1')
);

module.hot.accept();