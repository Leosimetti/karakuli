import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';

import App from './App';

const mountNode = document.getElementById('app');

ReactDOM.render(<App />, mountNode);
