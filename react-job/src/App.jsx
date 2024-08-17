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


const App = () => {
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element= {<HomePage />} />
      <Route path='/jobs' element= {<JobsPage />} />
      <Route path='/add-job' element= {<AddJobpage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element= {<JobPage />} loader={jobLoader} />
      <Route path='*' element= {<NotFoundPage />} />
    </Route>
    )
  );

  return <RouterProvider router={router}/>
};

export default App