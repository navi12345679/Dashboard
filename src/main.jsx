import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change to 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
