import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'
import { PeopleImages } from './styled-components/Images'
class BusShow extends Component {
    state={
        bus: {}
    }
    componentWillMount(){
        this.getOneBus()
    }
    
    async getOneBus(){
        try{
          const res = await axios.get(`/api/buses/${this.props.match.params.bus_id}`)
          const bus = res.data
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