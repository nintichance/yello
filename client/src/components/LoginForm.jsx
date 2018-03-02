import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
    username: "",
    login: false,
    currentParent: {}
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    event.preventDefault()
  }

  handleLogin = (username) => {
    this.props.logInParent(username)
    this.setState({ login: true })
  }

  render() {

    if (this.state.login === true) {
      return (<Redirect to="/login" />)
    }
    if (this.props.currentParent.username) {
      return (<Redirect to={`/parents/${this.props.currentParent.id}`} />)
    }

    return (

      <LoginWrapper>
        <UserFormBody>
          <UserFormHeader>
            Welcome Parents
          </UserFormHeader>

          <form onSubmit={() => this.handleLogin(this.state.username)}>
            <UserFormInput
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.username}
              onChange={this.handleChange} />
            <br />
            <UserFormButton>
              <GlobalFormInputButton className="input-button" type="submit" value="login" />
            </UserFormButton>
            <Link to="/login/driver"><UserFormButton>Login as Driver</UserFormButton></Link>
          </form>

        </UserFormBody>
      </LoginWrapper>
    )
  }
}

export default LoginForm