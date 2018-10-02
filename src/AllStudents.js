import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
      <div id='stories' className='column'>
        <br />
        {
          students.map(student => (
            <div className='story' key={student.id}>
              <Link to={`/students/${student.id}`}> 
                <div>{student.firstName} {student.lastName} (attending: {student.school.name})</div>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}