import React from 'react';
import ReactDOM from 'react-dom/client';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Store from './Components/Investor/Redux/Store.js';
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <App />
</Provider>

);




