import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom'
import App from './App.jsx';
import { Provider } from "react-redux";
import './global.css';
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout/Layout.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Layout>
    <App />
    </Layout>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
