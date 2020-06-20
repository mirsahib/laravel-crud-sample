import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'
    import Header from './Header'
    import EmployeeList from './employee'
    import SingleEmployee from './singleEmployee'
    import NewEmployee from './newEmployee'
    import EditEmployee from './editEmployee'

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={EmployeeList} />
                <Route exact path='/create' component={NewEmployee} />
                <Route exact path='/edit/:id' component={EditEmployee} />
                <Route exact path='/:id' component={SingleEmployee} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))