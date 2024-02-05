import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { StaticRouters } from './router'
import { clientConfig } from './config'

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter basename={clientConfig.baseRoute}>
        <Routes>{StaticRouters}</Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
