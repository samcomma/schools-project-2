import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
        <div id='navbar'>
        <Link to='/'><button className='button-nav'>Home</button></Link>
        <Link to='/schools'><button className='button-nav'>Schools</button></Link>
        <Link to='/students'><button className='button-nav'>Students</button></Link>
        </div>
    )
  }
}

export default connect()(Navbar)