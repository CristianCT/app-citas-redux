import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = 'https://citas-reactiva.herokuapp.com/citasReactivas';
axios.defaults.headers.get['Content-Type'] = 'application/json';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);