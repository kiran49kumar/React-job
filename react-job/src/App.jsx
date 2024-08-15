import React from 'react';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element= {<HomePage />} />)
);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App