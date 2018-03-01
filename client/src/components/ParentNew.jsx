import React, { Component } from 'react'
import { FormWrapper, FormHeader, FormBody, FormField, FormInput, FormButton, FormInputButton } from './styled-components/Form'
import { Link, Redirect } from 'react-router-dom'

class NewParent extends Component {
    state = {
        newParent: {},
        updatedParent: {},
        redirect: false
    }
    handleInputChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newParent = { ...this.state.newParent }
        newParent[attributeName] = attributeValue
        this.setState({ newParent })
    }

    resetForm = () => {
        const newParent = { ...this.state.newParent }
        this.setState({ newParent, redirect: true })
    }

    addNewParent = (event) => {
        event.preventDefault()
        this.props.addNewParent(this.state.newParent)
        this.resetForm()
    }

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to="/parents"></Redirect> :
                    <FormWrapper>
                        <FormBody onSubmit={this.addNewParent}>
                        <FormHeader> Welcome </FormHeader>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="name"
                                    placeholder="Full Name"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="img"
                                    placeholder="Profile Picture"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                                <FormInput
                                    type="string"
                                    name="address"
                                    placeholder="Address"
                                    onChange={this.handleInputChange} />
                            </FormField>
                            <FormField>
                            
                                <FormInputButton
                                    type="submit"
                                    value="Add New Parent" />
                            </FormField>
                            <FormField>
                                <FormButton><Link to="/parents">Cancel</Link></FormButton>
                            </FormField>
                        </FormBody>
                    </FormWrapper>}

            </div>
        )
    }
}
export default NewParent