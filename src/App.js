import React from 'react'
import "./App.css"
import LoginForm from './pages/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FilmForm from './pages/film'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/film" element={<FilmForm />} />

        </Routes>
      </Router>
    </div>
  )
}


