import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createStudent } from './store'

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gpa: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  

  handleSubmit (evt) {
    //evt.preventDefault()
    store.dispatch(createStudent(this.state))
  }

  render() {
    const { schools } = this.props
    return (
      <div>
        <h3>Create Student:</h3>
        <hr />
        <br />
        <form id='createForm' onSubmit={this.handleSubmit}>
          <label>First Name:
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>Second Name:
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>GPA:
            <input type='number' step='0.1' min='0' max='4' name='gpa' value={this.state.gpa} onChange={this.handleChange} />
          </label>
          <label>Attending:
          <select name='school'>
              {/*MUST ONLY ALLOW CURRENT SCHOOLS TO BE CHOSEN USING schools PROP*/}
          </select>
          </label>
          <button value='submit' onClick={() => createStudent(this.state)}>Create</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = ({ students, schools }) => ({
    students,
    schools
  })

const mapDispatchToProps = dispatch => ({
    createStudent: student => dispatch(createStudent(student))
  })

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
