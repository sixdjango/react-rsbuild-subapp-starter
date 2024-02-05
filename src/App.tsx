import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { StaticRouters } from './router'

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter basename="/bkp/subapp">
        <Routes>{StaticRouters}</Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
