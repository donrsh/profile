import React, { Component } from 'react'

import './App.css'

import SelfIntro from './components/SelfIntro/SelfIntro'
import CVBlock from './components/CVBlock/CVBlock'

class App extends Component {
  render () {
    return (
      <div id='App'>
        <SelfIntro />
        <CVBlock />
      </div>
    )
  }
}

export default App
