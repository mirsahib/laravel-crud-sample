import React, { Component } from 'react'
import axios from 'axios'
class NewEmployee extends Component {
    constructor (props) {
        super(props)
        this.state = {
          person_name: '',
          company_name: '',
          jobtitle: '',
          bio: '',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCreateNewProject (event) {
        event.preventDefault()
        console.log('hello')

        const { history } = this.props

        const company = {
          person_name: this.state.person_name,
          company_name:this.state.company_name,
          jobtitle:this.state.jobtitle,
          bio: this.state.bio
        }

        axios.post('/api/company', company)
          .then(response => {
            // redirect to the homepage
            console.log(response)
            history.push('/')
          })
          .catch(error => {
            this.setState({
              errors: error.response.data.errors
            })
          })
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new Employee</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewProject}>
                      <div className='form-group'>
                        <label htmlFor='name'>Employee name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('person_name') ? 'is-invalid' : ''}`}
                          name='person_name'
                          value={this.state.person_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('person_name')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Company name</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('company_name') ? 'is-invalid' : ''}`}
                          name='company_name'
                          value={this.state.company_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('company_name')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Job title</label>
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('jobtitle') ? 'is-invalid' : ''}`}
                          name='jobtitle'
                          value={this.state.jobtitle}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jobtitle')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='description'>Bio</label>
                        <textarea
                          id='description'
                          className={`form-control ${this.hasErrorFor('bio') ? 'is-invalid' : ''}`}
                          name='bio'
                          rows='10'
                          value={this.state.bio}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('bio')}
                      </div>
                      <button className='btn btn-primary'>Create</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}
export default NewEmployee
