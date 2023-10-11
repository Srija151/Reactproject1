import React from 'react'
import Other from './Components/Other'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Temperature from './Components/Temperature'
//import NavBar from './Components/Navigation'
import Navigation from './Components/Navigation'

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Other/>} />
          <Route path="/contact" element={<Temperature/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App