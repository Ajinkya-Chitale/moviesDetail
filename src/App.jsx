import './App.css'
import React from 'react'
import Home from '../src/components/Home'
import MovieDetails from '../src/components/MovieDetails'
import PageNotFound from '../src/components/PageNotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/movie_details/:id' Component={MovieDetails}></Route>
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  )
}

export default App