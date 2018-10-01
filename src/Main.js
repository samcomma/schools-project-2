import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from './Navbar'
import AllSchools from './AllSchools'
import School from './School'
import AllStudents from './AllStudents'
import Student from './Student'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            {/*<div id='header'>
              <h1>Schools and Students</h1>
    </div>*/}
            <Navbar />
          </div>
          <Route exact path='/schools' component={AllSchools} />
          <Route exact path='/schools/:schoolId' component={School} />
          <Route exact path='/students' component={AllStudents} />
          <Route exact path='/students/:studentId' component={Student} />

          {/*
          <Route path='/schools/:schoolId' component={School} />

          
          
          <Route exact path='/' component={Schools} />
          <Route exact path='/stories' component={AllStories} />
          <Route path='/stories/:storyId' component={SingleStory} />
          <Route exact path='/authors' component={Authors} />
          <Route path='/authors/:authorId' component={SingleAuthor} />
          */}
        </div>
      </Router>
    )
  }
}


/*
export default class Main extends Component {

  constructor() {
    super()
    this.state = {
      schools: [],
      school: {}
    }
    this.selectSchool = this.selectSchool.bind(this)
  }

  async componentDidMount() {
    const response = await axios.get('/api/schools')
    this.setState({ schools: response.data})
  }

  async selectSchool(id) {
    if (id === -1) {
      this.setState({ school: {} })
      return
    }
    const response = await axios.get(`/api/schools/${id}`)
    this.setState({ school: response.data })
  }

  render() {
    const { selectSchool } = this
    const { schools, school } = this.state
    return (
    school.id ? (<School school={ school } selectSchool={ selectSchool }/>) :
      (<Schools schools={ schools } selectSchool={ selectSchool }/>)
    )
  }
}
*/

