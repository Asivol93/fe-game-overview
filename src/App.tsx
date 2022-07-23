import React from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './SignIn'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Helvete vad stökigt detta kommer bli</p>

        <SignIn />
      </header>
    </div>
  )
}

export default App
