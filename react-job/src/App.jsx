import React from 'react';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/Jobpage';
import AddJobpage from './pages/AddJobpage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element= {<HomePage />} />
    <Route path='/jobs' element= {<JobsPage />} />
    <Route path='/add-job' element= {<AddJobpage />} />
    <Route path='/jobs/:id' element= {<JobPage />} loader={jobLoader} />
    <Route path='*' element= {<NotFoundPage />} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App