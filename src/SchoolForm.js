import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createSchool } from './store'

export default class SchoolForm extends Component {
  /*
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      description: '',
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
*/
  render(){
    return(
      <div>Hey</div>
    )
  }
}

/*
const mapDispatchToProps = dispatch => ({
    createSchool: school => dispatch(createSchool(school))
})

export default connect(null, mapDispatchToProps)(SchoolForm)
*/