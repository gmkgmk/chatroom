import React from "react";
import ReactDOM from 'react-dom';
import createHistory from "history/createBrowserHistory";

window._history = createHistory({
  basename: "/",
});

import Router from './router';
async function render() {
  const App = (await import('./App.js')).default;
  ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(Router)
  ), document.getElementById('app'));
}

render();