import React, {Component} from 'react'
import axios from 'axios'
//import Students from './Students'

export default class School extends Component {
  constructor () {
    super()
    this.state = {
      school: {}
    }
  }

  async componentDidMount () {
    const schoolId = this.props.match.params.schoolId // or { storyId } = this.props.match.params
    const res = await axios.get(`/api/schools/${schoolId}`) // this makes a request to our server/api/stories.js (the second get request in that file)
    const school = res.data
    this.setState({
      school
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
    const school = this.state.school
    const students = this.state.school.students
    console.log(students)
    return (
      <div id='single-story' className='column'>
        <h2>{ school.name }</h2>
        <hr />
        <h3>Address:</h3>
        <div>{ school.address }</div>
        <br />
        <h3>Information:</h3>
        <div>{ school.description }</div>
        <br />
        <h3>Students:</h3>
        {/*<Students students={students}/>*/}
      </div>
    )
  }
}





/*
const School = ({ school, selectSchool })=> {
  return (
    <div>
      <h2>{ school.name }</h2>
      <hr />
      <h3>Address:</h3>
      <div>{ school.address }</div>
      <br />
      <h3>Information:</h3>
      <div>{ school.description }</div>
      <br />
      <h3>Students:</h3>
      <ul>
        {
          school.students.map(student => <li key={ student.id }>{ student.firstName } { student.lastName }</li>)
        }
      </ul>
      <a href='#' onClick={()=> selectSchool(-1)}>Back</a>
    </div>
  )
}


export default School
*/