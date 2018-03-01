import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'


class ParentEdit extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            updatedParent: {
                name: "",
                username: "",
                address: "",
                lat: "",
                lng: "",
                img: ""
            },
            redirect: false
        }
        this.state = { ...this.defaultState }
    }

    componenetWillMount(){
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

    async deleteParent(parentId) {
        try {
            console.log('DELETE', parentId)
            await axios.delete(`/api/parents/${parentId}`)
            window.location.reload()
        }
        catch (err) {
            console.log(err)
        }
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
                            placeholder="Full Name"
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.name}/>
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="username"
                            placeholder="User Name"
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.username}/>
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="img"
                            placeholder="Image"
                            onChange={this.handleInputChange} 
                            value={this.state.updatedParent.img} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="address"
                            placeholder="Address"
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
                    <button onClick={()=>this.deleteParent(this.props.parent.id)}>Delete Parent</button>
                </FormBody>
                </FormWrapper>
                }
            </div>
        )

    }
}

export default ParentEdit