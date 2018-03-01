import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
  LoginWrapper,
  UserFormHeader,
  UserFormBody,
  GlobalFormInputButton,
  UserFormInput,
  UserFormButton
} from './styled-components/LoginFormStyle'



class DriverLogin extends Component {
  state = {
    driver_username: "",
    login : false
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    event.preventDefault()
  }

  handleLogin = (driver_username)=>{
    this.props.logInDriver(driver_username)
    this.setState({login: true})
}



  render() {

    if (this.state.login === true) {
      return (<Redirect to="/" />)   
    }

    return (

      <LoginWrapper>
        <UserFormBody>
          <UserFormHeader>
            Welcome Drivers!
          </UserFormHeader>

          <form onSubmit={() => this.handleLogin(this.state.driver_username)}>
            <UserFormInput
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.driver_username}
              onChange={this.handleChange}/>
            <br/>
            <UserFormButton>
              <GlobalFormInputButton className="input-button" type="submit" value="login"/>
            </UserFormButton>
          </form>

        </UserFormBody>
      </LoginWrapper>
    )
  }
}

export default DriverLogin