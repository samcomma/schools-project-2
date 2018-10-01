import React, {Component} from 'react'
import axios from 'axios'
import Students from './Students'

export default class AllStudents extends Component {
  constructor () {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({students}))
      .catch(console.log.bind(console))
  }

  render () {
    const students = this.state.students
    return (
      <Students students={students} /> // the prop for this stories is the state.stories
    )
  }
}