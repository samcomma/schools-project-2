import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteSchool } from './store'

class AllSchools extends Component {

  render () {
    const { schools, deleteSchool } = this.props
    console.log(this.props)
    return (
      <div id='schools' className='column'>
        <ul>
            {
            schools.map(school => (
                <li className='school' key={school.id}>
                    <Link to={`/schools/${school.id}`}> 
                        <h4>{school.name} (Students: {school.students.length}) </h4>
                    </Link>
                    <button className="button" onClick={() => deleteSchool(school)}>
                        Remove
                    </button>
                    <hr />
                </li>
            ))
            }
        </ul>
        <Link to='/schools/create'>
          <button>Add School</button>
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