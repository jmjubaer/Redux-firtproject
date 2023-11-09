import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
  </React.StrictMode>
);
