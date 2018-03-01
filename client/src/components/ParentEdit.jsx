import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'


class ParentEdit extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            updatedParent: {
                name: " ",
                username: " ",
                address: " ",
                lat: " ",
                lng: " ",
                img: " "
            },
            redirect: false
        }
        this.state = { ...this.defaultState }
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value
        const updatedParent = {...this.state.updatedParent}
        updatedParent[attribute] = value
        this.setState({updatedParent})
    }

    resetForm = () => {
        const updatedParent = {...this.defaultState.updatedParent}
        this.setState({updatedParent, redirect: true})
    }

    updateParent = (event) =>{
        event.preventDefault()
        this.props.updateParent(this.props.parent.id, this.state.updatedParent)
        this.resetForm()
        this.setState({redirctToParent: true})
    }



    render() {
        console.log(this.props.parent.name)
        return (
            <div>
                {this.state.redirect ? <Redirect to={`/parents`}>Parents</Redirect> :
                <FormWrapper>
                      <FormBody onSubmit={this.updateParent}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>Edit Parent</FormHeading>
                        </FormHeader>
                        <FormInput
                            type="string"
                            name="name"
                            placeholder={this.props.parent.name}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.name}/>
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="username"
                            placeholder={this.props.parent.username}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.username}/>
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="img"
                            placeholder={this.props.parent.img}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.img} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="address"
                            placeholder={this.props.parent.address}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.address} />
                    </FormField>
                    <FormField>
                        <FormInputButton
                            type="submit"
                            value="Update Parent" />
                    </FormField>
                    <FormField>
                    <FormButton><Link to="/parents">Back</Link></FormButton>
                    </FormField>
                </FormBody>
                </FormWrapper>
                }
            </div>
        )

    }
}

export default ParentEdit