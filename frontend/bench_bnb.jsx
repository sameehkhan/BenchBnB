import React from 'react';
import ReactDOM from 'react-dom';
import * as AU from './util/session_api_util';
import configureStore from './store/store';

window.postUser = AU.postUser;
window.postSession= AU.postSession;
window.deleteSession= AU.deleteSession;

document.addEventListener("DOMContentLoaded" , () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  const root = document.getElementById("root");
  ReactDOM.render(<h1>React</h1>, root);
});
