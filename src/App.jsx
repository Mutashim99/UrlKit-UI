import React from 'react'
import Home from './pages/Home'
import { Toaster } from "@/components/ui/sonner"
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
    <Toaster />
    {/* <Home /> */}
    <Dashboard />
    </>
  )
}

export default App