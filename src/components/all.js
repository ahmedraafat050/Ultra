import React, { Component } from 'react'
import Home from './Home'
import Protfolio from './Protfolio'
import Profile from './Profile'
import About from './About'
import Work  from './Work'
import Media from './Media'

import Footer  from './Footer'

export default class all extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Protfolio />
        <Profile />
        <About />
        <Media />
        
        <Footer />
      </div>
    )
  }
}
