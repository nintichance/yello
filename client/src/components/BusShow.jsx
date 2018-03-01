import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'

class BusShow extends Component {
    state = {
        bus: {
            lat: "",
            lng: ""
        }
    }
    componentWillMount() {
        this.getOneBus()
    }

    async getOneBus() {
        try {
            const res = await axios.get(`/api/buses/${this.props.match.params.bus_id}`)
            const bus = res.data
            console.log("CALLED", bus)
            this.setState({ bus: bus })
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <MapContainer lat={this.state.bus.lat} lng={this.state.bus.lng} />
            </div>
        )
    }
}
export default BusShow