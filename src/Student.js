import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudents, deleteStudent } from './store'
//import StudentForm from './StudentForm'

class Student extends Component {

  render () {
    const { student, deleteStudent } = this.props
    return (
      <div id='single-story' className='column'>
        <h2>{ student.firstName } { student.lastName }</h2>
        <hr />
        <h3>Information</h3>
        <div>Attending: {/*{ student.school.name }*/}</div>
        <br />
        <div>GPA: { student.gpa }</div>
        <br />
        <button className="button" onClick={() => deleteStudent(student)}>
            Remove
        </button>
      </div>
    )
  }
}



const mapStateToProps = ({ schools, students }, { match }) => {
  const student = students.find(student => student.id === match.params.id * 1);
  return {
    student,
    schools
  }
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: student => dispatch(deleteStudent(student))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(Student)
