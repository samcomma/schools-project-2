import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import AllSchools from './AllSchools'
import School from './School'
import AllStudents from './AllStudents'
import Student from './Student'
import Footer from './Footer'


export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <Navbar />
          </div>
          <Route exact path='/schools' component={AllSchools} />
          <Route exact path='/schools/:schoolId' component={School} />
          <Route exact path='/students' component={AllStudents} />
          <Route exact path='/students/:studentId' component={Student} />
          <br />
          <div id='footer'>
            <Footer />
          </div>
        </div>
      </Router>
      
    )
  }
}
