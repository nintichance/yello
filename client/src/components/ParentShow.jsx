import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
import NavBar from './NavBar'
import ParentEdit from './ParentEdit'
class ParentShow extends Component {
    state = {
        parent: {
            buses: []
        },
        redirect: false
    }
    componentWillMount() {
        this.getOneParent()
    }


    handleLogin = (parent_id)=>{
        this.props.logInParent(parent_id)
        this.setState({redirect: true})
    }

    async getOneParent() {
        try {
            const res = await axios.get(`/api/parents/${this.props.match.params.parent_id}`)
            const parent = res.data
            this.setState({ parent: parent })
        }
        catch (error) {
            console.log(error)
        }
    }

    //ADD A BUS OR EDIT THE PARENT'S PROFILE
    async updateUser(userId, updatedUser) {
        try {
            console.log('EDIT', userId)
            console.log("UPDATED USEr", updatedUser)
            await axios.patch(`/api/users/${userId}`, { updatedUser })
            this.setState({ user: updatedUser })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <ParentEdit/>
                <h1>{this.state.parent.name}</h1>
                {this.state.parent.buses.map((bus, index) => {
                    return (
                        <div>
                            <NavBar />
                            <h1>{bus.id}</h1>
                            <h1>{bus.driver}</h1>
                            <PeopleImages src={bus.img} />
                            <h1>{bus.address}</h1>
                            <div>{bus.driver}</div>
                            <div>{bus.address}</div>
                            <button onClick={()=>this.handleLogin(this.state.parent.id)}> Login </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ParentShow