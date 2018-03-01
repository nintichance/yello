import React, { Component } from 'react'
import axios from 'axios'
import { PeopleImages } from './styled-components/Images'
import NavBar from './NavBar'
import ParentEdit from './ParentEdit'
import { Link } from 'react-router-dom'
class ParentShow extends Component {
    state = {
        parent: {
            name: "",
            buses: []
        },
        redirect: false,
        showEdit: false,
    }

    componentWillMount() {
        this.getOneParent()
        this.updateUser = this.updateParent.bind(this)
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
        return (
          
            <div>
                {/* {this.state.showEdit ? <ParentEdit parentId={this.state.parent.id} parent = {this.state.parent}/> : */}
                <ParentEdit updateParent={this.updateParent} parentId={this.state.parent.id} parent = {this.state.parent}/>
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
                            <Link to={`/buses/${bus.id}`}>See Map</Link>
                            <button onClick={()=>this.deleteBusFromParent(index, bus)}> Remove Bus </button>
                        </div>
                    )
                })}
             {/* } */}
            
            </div>
            
        )
    }
}
export default ParentShow