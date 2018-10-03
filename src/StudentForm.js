import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createStudent } from './store'

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gpa: ''
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
    evt.preventDefault()
    store.dispatch(createStudent(this.state))
  }

  render(){
    return(
      <div>Hey</div>
    )
  }
}


export default connect()(StudentForm)