import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouteApp from "./routeApp";

ReactDOM.render(<RouteApp/>, document.getElementById('root'));

serviceWorker.unregister();
