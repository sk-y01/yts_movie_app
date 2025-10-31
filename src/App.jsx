import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './router/Home'
import About from './router/about'
import Layout from './Layout'
import Detail from './router/Detail'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        {/* <Route path={'/home'} element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path={'/about'} element={<About />} />
      </Route>
      <Route path={'/detail'} element={<Detail />} />
    </Routes>
  )
}

export default App
