import React from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './SignIn'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
       

        <SignIn />
      </header>
    </div>
  )
}

export default App
