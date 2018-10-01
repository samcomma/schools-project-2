import React, {Component} from 'react'
import axios from 'axios'
import Schools from './Schools'

export default class AllSchools extends Component {
  constructor () {
    super()
    this.state = {
      schools: []
    }
  }

  componentDidMount () {
    axios.get('/api/schools')
      .then(res => res.data)
      .then(schools => this.setState({schools}))
      .catch(console.log.bind(console))
  }

  render () {
    const schools = this.state.schools
    return (
      <Schools schools={schools} /> // the prop for this stories is the state.stories
    )
  }
}



/*
const Schools = ({ schools, selectSchool })=> {
  return (
    <div>
      <h2>Schools:</h2>
      <ul>
        {
          schools.map(school => <SchoolRow key={ school.id } school={ school } selectSchool={ selectSchool }/>)
        }
      </ul>
    </div>
  )
}


export default Schools
*/