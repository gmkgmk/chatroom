import React from "react";
import ReactDOM from 'react-dom';
import createHistory from "history/createBrowserHistory";
import Router from './router';
import { WebsocketApp, app } from './app.js';

let basename = process.env.NODE_ENV === "production" ? "room/" : "/"

window._history = createHistory({
  basename,
});
async function render() {
  ReactDOM.render(React.createElement(
    WebsocketApp,
    null,
    React.createElement(Router)
  ), document.getElementById('app'));
}
render();


export default app._store;
