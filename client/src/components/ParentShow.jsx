import React, { Component } from 'react'
import axios from 'axios'
import { PeopleImages, TrashIcon } from './styled-components/Images'
import { ParentShowBus } from './styled-components/Containers'
import { Header, ParentShowContainer, ParentPageContainer } from './styled-components/ParentPageStyle' 
import NavBar from './NavBar'
import ParentEdit from './ParentEdit'
import { TrackBusButton } from './styled-components/Form'
import { Link } from 'react-router-dom'


class ParentShow extends Component {
    state = {
        parent: {
            buses: []
        },
        redirect: false,
        showEdit: false,
    }

    componentWillMount() {
        this.getOneParent()
        this.updateUser = this.updateParent.bind(this)
    }


    handleLogin = (parent_id) => {
        this.props.logInParent(parent_id)
        this.setState({ redirect: true })
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

    //UPDATE A PARENT'S INFORMATION
    async updateParent(parentId, updatedParent) {
        try {
            console.log('EDIT', parentId)
            console.log("UPDATED USEr", updatedParent)
            await axios.patch(`/api/parents/${parentId}`, { parent: updatedParent })
            this.setState({ parent: updatedParent })
        }
        catch (err) {
            console.log(err)
        }
    }

    showEdit = () => {
        this.setState({ showEdit: true })
    }

    //UPDATE PARENT OBJECT WITH ONE LESS BUS IN BUSES ARRAY
    //API NOT FOUND
    // deleteBusFromParent = async (index, bus) => {
    //     const parent = {...this.state.parent}
    //     console.log("HEYORIVER", this.state.parent)
    //     try{
    //     parent.buses.slice(index, 1)
    //     console.log("RIGHTHERE", parent)
    //     await axios.patch(`/api/parents/${this.state.parent.id}/buses/${bus.id}`, { parent: parent })
    //     this.setState({parent: parent})
    //   }
    //   catch(error){
    //   console.log(error)
    //   }
    //   }

    render() {

        const busesIndex = this.state.parent.buses.map((bus, index) => {
            return (
                <ParentShowBus>
                    <PeopleImages src={bus.img} />
                    <p>The Bus Driver is: {bus.driver}</p>
                    {/* <TrashIcon src="https://i.imgur.com/OMSX8Z5.png" onClick={()=>this.deleteBusFromParent(index, bus)} /> */}
                    <TrackBusButton> <Link to={`/buses/${bus.id}`}>Track Bus</Link></TrackBusButton> 
                </ParentShowBus>
            )
        })
        // <TrashIcon src="https://i.imgur.com/OMSX8Z5.png" onClick={() => { props.deletePost(props.cityId, props.postId) }} />
        // <EditIcon src="https://i.imgur.com/L0xUMw1.png" onClick={() => { props.showEditForm() }} />
        return (

            <ParentPageContainer>
                <NavBar />
                <Header>Welcome, {this.state.parent.name}</Header>

                <ParentShowContainer>
                {this.state.showEdit ?
                    <ParentEdit updateParent={this.updateParent} parentId={this.state.parent.id} parent={this.state.parent} /> :
                    busesIndex}
                    </ParentShowContainer>
                                        {/* <ParentPageButton onClick={()=>{this.showEdit()}}>Edit</ParentPageButton> */}

            </ParentPageContainer>

        )
    }
}
export default ParentShow

