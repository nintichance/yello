import React, {Component} from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import {
  LoginWrapper,
  UserFormHeader,
  UserFormBody,
  GlobalFormInputButton,
  UserFormInput,
  UserFormButton
} from './styled-components/LoginFormStyle'



class LoginForm extends Component {
  state = {
    driverUsername: "",
    login : false
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    event.preventDefault()
  }

  handleLogin = (driverUsername)=>{
    this.props.logInDriver(driverUsername)
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
            Welcome Parents
          </UserFormHeader>

          <form onSubmit={() => this.handleLogin(this.state.driver_username)}>
            <UserFormInput
              name="username"
              type="text"
              placeholder="enter username"
              //CAUSING CHANGE TO NOT HAPPEN
            //   value={this.state.driverUsername}
              onChange={this.handleChange}/>
            <br/>
            <UserFormButton>
              <GlobalFormInputButton className="input-button" type="submit" value="login"/>
            </UserFormButton>
            <Link to="/login"><UserFormButton>Login as Parent</UserFormButton></Link>
          </form>

        </UserFormBody>
      </LoginWrapper>
    )
  }
}

export default LoginForm