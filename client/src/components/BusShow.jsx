import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
class BusShow extends Component {
    state={
        bus: {
            lat: "",
            lng: ""
        }
    }
    componentWillMount(){
        this.getOneBus()
    }
    
    async getOneBus(){
        try{
          const res = await axios.get(`/api/buses/${this.props.match.params.bus_id}`)
          const bus = res.data
          console.log("CALLED", bus)
          this.setState({bus: bus})
        }
        catch(error){
          console.log(error)
        }
      }

render(){
    return(
        <div>
                    <div>
                        <h1>{this.state.bus.id}</h1>
                        <h1>{this.state.bus.lat}</h1>
                        <h1>{this.state.bus.lng}</h1>
                        <MapContainerStyle>
                            <MapContainer lat={this.state.bus.lat} lng={this.state.bus.lng}/>
                        </MapContainerStyle>
                    <div>{this.state.bus.driver}</div>
                    <div>{this.state.bus.address}</div>
                    </div>      
        </div>
    )
    }
}
export default BusShow