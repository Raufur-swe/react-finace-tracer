import React from 'react'
import { ExpenceContextProvider } from '../context/ExpenceContext'
import DashboardLayout from '../layouts/DashboardLayout'

const Home = () => {
  return (
   <ExpenceContextProvider>
    <DashboardLayout>
      
    </DashboardLayout>
   </ExpenceContextProvider>
  )
}

export default Home