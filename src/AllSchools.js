import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
      <div id='stories' className='column'>
        {
          schools.map(school => (
            <div className='story' key={school.id}>
              <Link to={`/schools/${school.id}`}> 
                <h4>{school.name}     (Students: {school.students.length}) </h4>
              </Link>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}



