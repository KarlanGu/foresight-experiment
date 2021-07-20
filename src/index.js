import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

import "leaflet/dist/leaflet.css";
import "leaflet-timedimension/dist/leaflet.timedimension.control.min.css";
import "leaflet/dist/leaflet.js";


const store = configureStore();


render(
  //<React.StrictMode>
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  //</React.StrictMode>,
  document.getElementById('root')
);


