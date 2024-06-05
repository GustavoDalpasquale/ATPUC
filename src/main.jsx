import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import PageTwo from './routes/PageTwo.jsx';

/* In main.jsx: 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pagetwo', element: <PageTwo /> },
    ],
  },
]); 

<RouterProvider router={router} />

Just in app.jsx: <Outlet />

This option has been removed because there is a bug in vercel when refresh page on different page as home ("/").
*/

import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
