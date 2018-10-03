import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createSchool } from './store'

class SchoolForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      description: ''
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
    store.dispatch(createSchool(this.state))
  }

  render(){
    return(
      <div>Hey</div>
    )
  }
}


export default connect()(SchoolForm)
