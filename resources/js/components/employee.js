import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

class Employee extends Component {

    constructor () {
        super()
        this.state = {
          list: []
        }
        //this.handleDeleteEmployee = this.handleDeleteEmployee(this)
      }

      componentDidMount () {
        axios.get('/api/company').then(response => {
          this.setState({
            list: [...response.data.company]
          })
        //   this.state.list.map(
        //       item=>{
        //         console.log(item)
        //       }
        //   )
        })
      }
      handleDeleteEmployee = (e)=>{
          const employeeId = e.target.value
          let employeeList = Array.from(this.state.list)
          //console.log('before',employeeList)
          for (let index = 0; index < employeeList.length; index++) {
              if(employeeList[index].id==employeeId){
                  employeeList.splice(index,1)
              }
          }
          axios.delete(`/api/company/${employeeId}`).then(response => {
            console.log(response.data.msg)
          })
          this.setState({list:employeeList})
      }


    render () {
        const {list} =this.state ; 
      return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All Employee</div>
                  <div className='card-body'>
                    <Link className='btn btn-success btn-sm mb-3' to='/create'>
                      Create new employee
                    </Link>
                   {/* 
                    <ul className='list-group list-group-flush'>
                      {list.map(item => (
                        <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`/${item.id}`}
                          key={item.id}
                        >
                            <div className="row">
                                <div className="col">
                                    {item.person_name}
                                </div>
                                <div className="col">
                                    {item.company_name}
                                </div>
                                <div className="col">
                                    {item.jobtitle}
                                </div>
                            </div>
                        </Link>
                      ))}
                    </ul>
                    */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Jobtitle</th>
                            <th width="220px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.person_name}</td>
                                    <td>{item.company_name}</td>
                                    <td>{item.jobtitle}</td>
                                    <td><Link to={`/${item.id}`} className="btn btn-info">Show</Link>
                                        <Link to={`/edit/${item.id}`} className="btn btn-primary">Edit</Link>
                                        <Button value= {item.id} onClick={this.handleDeleteEmployee} className="btn btn-danger">Delete</Button>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }

  export default Employee