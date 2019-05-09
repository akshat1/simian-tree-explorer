import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';

const onWindowFound = () =>
  window.addEventListener(
    'DOMContentLoaded',
    () => ReactDOM.render(<App/>, document.getElementById('appRoot'))
  );

const onWindowNotFound = () => { throw new Error('No Window found.') };

typeof window === 'undefined' ? onWindowNotFound() : onWindowFound();

console.log('blah');
