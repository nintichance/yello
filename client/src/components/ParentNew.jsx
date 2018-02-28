import React, { Component } from 'react'
import { InputAndButtonContainer, ButtonContainer, TextArea, FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton } from './styled-components/Form'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
class NewParent extends Component {
    state = {
        newParent: {},
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
                                {/* <FormField>
                        <FormInput
                            type="string"
                            name="lat"
                            placeholder="Latitude"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="lng"
                            placeholder="Longitude"
                            onChange={this.handleInputChange} />
                    </FormField> */}
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