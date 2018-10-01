import React, {Component} from 'react'
import axios from 'axios'
//import Students from './Students'

export default class Student extends Component {
  constructor () {
    super()
    this.state = {
      student: {}
    }
  }

  async componentDidMount () {
    const studentId = this.props.match.params.studentId // or { storyId } = this.props.match.params
    const res = await axios.get(`/api/students/${studentId}`) // this makes a request to our server/api/stories.js (the second get request in that file)
    const student = res.data
    this.setState({
      student
    })
    /*
    TRY TURN ABOVE IN TO PROMIS CHAIN AS BELOW, NICER THAN USING ASYNC AWAIT
    axios.get('/api/stories')
      .then(res => res.data)
      .then(stories => this.setState({story}))
      .catch(console.log.bind(console))
      */  
  }

  render () {
    const student = this.state.student
    const school = student.school
    console.log(school)
    return (
      <div id='single-story' className='column'>
        <h2>{ student.firstName } { student.lastName }</h2>
        <hr />
        <h3>Information</h3>
        <div>Attending: </div>
        <br />
        <div>GPA: { student.gpa }</div>
      </div>
    )
  }
}
