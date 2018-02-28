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



class LoginForm extends Component {
  state = {
    username: "",
    login : false
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    event.preventDefault()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.get(`/api/users/retrieve/${this.state.username}`)
      .then((res) => {
        if(res.data) {
          console.log(res.data[0].id)
          localStorage.setItem("userId", res.data[0].id)
          this.setState({login: true})
        }
        
      
      })
      .catch((error) => {console.log(error)})  
  }

  render() {

    if (this.state.login === true) {
      this.props.isLoggedIn()
      return (<Redirect to="/" />)   
    }

    return (

      <LoginWrapper>
        <UserFormBody>
          <UserFormHeader>
            Welcome to Yello
          </UserFormHeader>

          <form onSubmit={this.handleSubmit}>
            <UserFormInput
              name="username"
              type="text"
              placeholder="enter username"
              value={this.state.username}
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

export default LoginForm