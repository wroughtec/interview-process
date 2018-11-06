// @flow
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No Valid html element with ID root');
}

render(<App />, rootElement);
