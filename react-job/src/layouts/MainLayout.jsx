import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default MainLayout