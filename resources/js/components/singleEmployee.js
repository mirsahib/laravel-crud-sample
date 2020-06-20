import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SingleEmployee extends Component {

    constructor (props) {
        super(props)
        this.state = {
          employee:{}
        }
      }
      componentDidMount () {
        const employeeId = this.props.match.params.id

        axios.get(`/api/company/${employeeId}`).then(response => {
          this.setState({
            employee: response.data.company,
          })
          console.log(this.state.employee)
        })
      }

    render(){
        const { employee } = this.state
        return(
            <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>{employee.company_name}</div>
                  <div className='card-body'>
                    <h5 className="card-title">{employee.person_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{employee.jobtitle}</h6>
                    <p className="card-text">{employee.bio}</p>
                    <Link to='/' className="btn btn-primary">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default SingleEmployee
