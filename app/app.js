/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

// Import root app
import Game from 'game/Game';

import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';

const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(<Game />, MOUNT_NODE);
};

render();

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
