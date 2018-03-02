import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle, BusShowContainer } from './styled-components/Containers'
import Footer from './Footer'
import HomeNav from './HomeNav'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HomeNavDiv, NavItems } from './styled-components/NavStyle'

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
            <BusShowContainer>
                <HomeNav />
                <MapContainer lat={this.state.bus.lat} lng={this.state.bus.lng} />
                <Footer />
            </BusShowContainer>
        )
    }
}
export default BusShow

