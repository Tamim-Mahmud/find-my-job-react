import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/statistics',
        element:<Statistics/>,
      },
      {
        path : "/applied-jobs",
        element : <AppliedJobs />
      },
      {
        path:'/blogs',
        element : <Blog />
      },
      {
        path:'/job-details/:id',
        element : <JobDetails />,
        loader: () => fetch('/jobs.json'),
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
