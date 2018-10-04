import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteSchool } from './store'

class AllSchools extends Component {

  render () {
    const { schools, students, deleteSchool } = this.props
    return (
      <div id='schools'>
        <h3>Schools:</h3>
        <hr />
        <br />
        <ul>
            {
            schools.map(school => {
              const studentsAttending = students.filter(student => school.id === student.schoolId)
              return (
                <li className='school' key={school.id}>
                    <Link to={`/schools/${school.id}`} style={{ textDecoration: 'none' }}> 
                        <h4>{school.name} (Students: {studentsAttending.length}) </h4>
                    </Link>
                    <button className='button-delete' onClick={() => deleteSchool(school)}>
                        Remove
                    </button>
                    <br />
                </li>
              )
            })
            }
        </ul>
        <Link to='/schools-create'>
          <button className='button'>Add School</button>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = ({ schools, students }) => ({
  schools,
  students
})


const mapDispatchToProps = dispatch => ({
    deleteSchool: school => dispatch(deleteSchool(school))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(AllSchools)