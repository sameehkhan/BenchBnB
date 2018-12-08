import React from 'react';
import ReactDOM from 'react-dom';
import * as AU from './util/session_api_util';

window.postUser = AU.postUser;
window.postSession= AU.postSession;
window.deleteSession= AU.deleteSession;

document.addEventListener("DOMContentLoaded" , () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>React</h1>, root);
});
