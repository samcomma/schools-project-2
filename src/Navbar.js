import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {
  return (
    <div id='navbar' className='row'>
      <Link to='/'>Home</Link>
      <Link to='/schools'>Schools</Link>
      <Link to='/students'>Students</Link>
    </div>
  )
}

export default Navbar