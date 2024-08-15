import React from 'react';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListing from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element= {<h1>My App</h1>} />)
);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App