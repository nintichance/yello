import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
class ParentShow extends Component {
    state = {
        parent: {
            buses: []
        }
    }
    componentWillMount() {
        this.getOneParent()
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
    render() {
        return (
            <div>
                <h1>{this.state.parent.name}</h1>
                {this.state.parent.buses.map((bus, index) => {
                    return (
                        <div>
                            <h1>{bus.id}</h1>
                            <h1>{bus.driver}</h1>
                            <PeopleImages src={bus.img} />
                            <h1>{bus.address}</h1>
                            <div>{bus.driver}</div>
                            <div>{bus.address}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ParentShow